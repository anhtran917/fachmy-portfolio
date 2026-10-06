"use client";
import { useEffect, useRef, useState } from "react";

export default function VideoScrub() {
  const fwdRef = useRef(null);
  const revRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isPhone = window.innerWidth <= 480;
    setIsMobile(isPhone);
    setMounted(true);

    const checkMobile = () => setIsMobile(window.innerWidth <= 480);
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!mounted || isMobile) return; // Skip if not mounted or on mobile

    const fwd = fwdRef.current;
    const rev = revRef.current;
    if (!fwd || !rev) return;

    let duration   = 0;
    let raf        = null;
    let prevY      = window.scrollY;
    let prevT      = performance.now();
    let vel        = 0;
    let frozenSnap = null;
    let activeEl   = fwd;
    let processedAt = 0;
    let warmupTimer = null;

    const FREEZE_VEL = 5;
    const PLAY_VEL   = 90;
    const EDGE       = 0.12;

    let videoEndScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

    // Keep the video mapped to the full scrollable page.
    const calcVideoEnd = () => {
      // The complete range lets upward scrolling reverse immediately at the bottom.
      videoEndScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    };
    calcVideoEnd();
    // recalc after fonts/images load
    window.addEventListener("load", calcVideoEnd, { once: true });

    const onResize = () => { calcVideoEnd(); };
    window.addEventListener("resize", onResize, { passive: true });

    const show = (el) => {
      if (activeEl === el) return;
      activeEl = el;
      fwd.style.opacity = el === fwd ? "1" : "0";
      rev.style.opacity = el === rev ? "1" : "0";
    };

    let fwdSeeking = false, fwdPend = null;
    const seekFwd = (t, fast = false) => {
      fwdPend = { t: Math.max(0, Math.min(duration, t)), fast };
      if (!fwdSeeking) flushFwd();
    };
    const flushFwd = () => {
      if (!fwdPend) { fwdSeeking = false; return; }
      const { t, fast } = fwdPend; fwdPend = null;
      if (Math.abs(fwd.currentTime - t) < 0.033) { fwdSeeking = false; return; }
      fwdSeeking = true;
      fast && fwd.fastSeek ? fwd.fastSeek(t) : (fwd.currentTime = t);
    };
    fwd.addEventListener("seeked", flushFwd);

    let revSeeking = false, revPend = null;
    const seekRev = (t, fast = false) => {
      revPend = { t: Math.max(0, Math.min(duration, t)), fast };
      if (!revSeeking) flushRev();
    };
    const flushRev = () => {
      if (!revPend) { revSeeking = false; return; }
      const { t, fast } = revPend; revPend = null;
      if (Math.abs(rev.currentTime - t) < 0.033) { revSeeking = false; return; }
      revSeeking = true;
      fast && rev.fastSeek ? rev.fastSeek(t) : (rev.currentTime = t);
    };
    rev.addEventListener("seeked", flushRev);

    let fwdSyncAt = 0, revSyncAt = 0;
    const bgSyncFwd = (t, now) => {
      if (now - fwdSyncAt < 300 || Math.abs(fwd.currentTime - t) < 0.3) return;
      fwd.fastSeek ? fwd.fastSeek(t) : (fwd.currentTime = t);
      fwdSyncAt = now;
    };
    const bgSyncRev = (t, now) => {
      if (now - revSyncAt < 300 || Math.abs(rev.currentTime - t) < 0.3) return;
      rev.fastSeek ? rev.fastSeek(t) : (rev.currentTime = t);
      revSyncAt = now;
    };

    const frame = (now) => {
      raf = requestAnimationFrame(frame);
      if (!duration) return;
      // Seeking decoded video on every display refresh can starve scroll and
      // layout work. 45 updates per second remains visually smooth.
      if (now - processedAt < 22) return;
      processedAt = now;

      const dt      = Math.max((now - prevT) / 1000, 0.001);
      prevT         = now;
      const scrollY = window.scrollY;
      vel           = vel * 0.82 + ((scrollY - prevY) / dt) * 0.18;
      prevY         = scrollY;

      const progress = videoEndScroll > 0 ? Math.min(1, scrollY / videoEndScroll) : 0;
      const tgt    = progress * duration;
      const revTgt = duration - tgt;
      const absVel = Math.abs(vel);
      const atStart = tgt <= EDGE;
      const atEnd   = progress >= 1;

      // ── PAST CONTACT: hold silently at current frame, no seek
      if (atEnd) {
        if (!fwd.paused) fwd.pause();
        if (!rev.paused) rev.pause();
        show(fwd);
        frozenSnap = null;
        return;
      }

      // ── FROZEN (near start or low velocity)
      if (absVel < FREEZE_VEL || atStart) {
        if (!fwd.paused) fwd.pause();
        if (!rev.paused) rev.pause();
        if (frozenSnap === null) {
          frozenSnap = atStart ? 0 : tgt;
          if (activeEl === rev && !atStart) {
            show(rev);
            seekRev(duration - frozenSnap, true);
          } else {
            show(fwd);
            seekFwd(frozenSnap);
          }
        }
        return;
      }
      frozenSnap = null;

      // ── SLOW SCRUB
      if (absVel < PLAY_VEL) {
        if (!fwd.paused) fwd.pause();
        if (!rev.paused) rev.pause();
        if (vel > 0) {
          if (tgt > fwd.currentTime + 0.033) seekFwd(tgt);
          show(fwd);
          bgSyncRev(revTgt, now);
        } else {
          if (revTgt > rev.currentTime + 0.033) seekRev(revTgt, true);
          show(rev);
          bgSyncFwd(tgt, now);
        }
        return;
      }

      // ── FAST PLAY
      const invM = duration / videoEndScroll;
      if (vel > 0) {
        const rate = Math.min(8, Math.max(0.25, vel * invM));
        if (Math.abs(fwd.playbackRate - rate) > 0.05) fwd.playbackRate = rate;
        if (Math.abs(fwd.currentTime - tgt) > 1.5) fwd.currentTime = tgt;
        if (fwd.paused) fwd.play().catch(() => {});
        if (!rev.paused) rev.pause();
        show(fwd);
        bgSyncRev(revTgt, now);
      } else {
        const rate = Math.min(8, Math.max(0.25, absVel * invM));
        if (Math.abs(rev.playbackRate - rate) > 0.05) rev.playbackRate = rate;
        if (Math.abs(rev.currentTime - revTgt) > 1.5) rev.currentTime = revTgt;
        if (rev.paused) rev.play().catch(() => {});
        if (!fwd.paused) fwd.pause();
        show(rev);
        bgSyncFwd(tgt, now);
      }
    };

    const onFwdEnded = () => { fwd.pause(); fwd.currentTime = duration; };
    const onRevEnded = () => { rev.pause(); rev.currentTime = duration; };
    fwd.addEventListener("ended", onFwdEnded);
    rev.addEventListener("ended", onRevEnded);

    const onVisibilityChange = () => {
      if (document.hidden) {
        if (raf !== null) cancelAnimationFrame(raf);
        raf = null;
        fwd.pause();
        rev.pause();
      } else if (duration && raf === null) {
        prevY = window.scrollY;
        prevT = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const setup = () => {
      duration = fwd.duration;
      fwd.currentTime = 0;
      rev.currentTime = duration;
      raf = requestAnimationFrame(frame);

      // Delay preloading the reverse video to prioritize initial page load performance
      warmupTimer = window.setTimeout(() => {
        rev.play().then(() => { rev.pause(); rev.currentTime = duration; }).catch(() => {});
      }, 3000);
    };

    if (fwd.readyState >= 1) setup();
    else fwd.addEventListener("loadedmetadata", setup, { once: true });

    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
      if (warmupTimer !== null) clearTimeout(warmupTimer);
      window.removeEventListener("load", calcVideoEnd);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      fwd.removeEventListener("loadedmetadata", setup);
      fwd.removeEventListener("seeked", flushFwd);
      rev.removeEventListener("seeked", flushRev);
      fwd.removeEventListener("ended", onFwdEnded);
      rev.removeEventListener("ended", onRevEnded);
    };
  }, [isMobile, mounted]);

  const SECTION_IMAGES = [
    { id: null,              src: '/photo/hero-v2.png'    }, // default / hero
    { id: 'about-section',  src: '/photo/about-v2.png'   },
    { id: 'work-section',   src: '/photo/project-v2.png' },
    { id: 'contact-section', src: '/photo/contact-v2.png' },
  ];

  // Mobile scroll-driven state — updated directly via RAF, no React re-renders
  const mobileLayersRef = useRef([]); // refs to the bg divs, updated imperatively

  useEffect(() => {
    if (!isMobile) return;

    const TRANSITION_ZONE = 0.35; // fraction of section height used for transition

    let sectionMetrics = [];
    const measure = () => {
      sectionMetrics = SECTION_IMAGES.map((section) => {
        const el = section.id ? document.getElementById(section.id) : null;
        return el ? { top: el.offsetTop, height: el.offsetHeight } : null;
      });
    };

    const getIndex = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      for (let i = SECTION_IMAGES.length - 1; i >= 1; i--) {
        const metric = sectionMetrics[i];
        if (metric && scrollY + vh * 0.5 >= metric.top) return i;
      }
      return 0;
    };

    const getProgress = (idx) => {
      // How far into the NEXT section's transition zone are we?
      const nextIdx = idx + 1;
      if (nextIdx >= SECTION_IMAGES.length) return 0;
      const nextMetric = sectionMetrics[nextIdx];
      if (!nextMetric) return 0;
      const sectionTop = nextMetric.top;
      const zone = nextMetric.height * TRANSITION_ZONE;
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const rel = (scrollY + vh * 0.5) - (sectionTop - zone);
      return Math.max(0, Math.min(1, rel / zone));
    };

    let rafId = null;
    let lastIdx = 0;
    let lastProg = -1;

    const frame = () => {
      rafId = null;
      const idx  = getIndex();
      const prog = getProgress(idx); // 0→1 as next section approaches

      if (idx === lastIdx && Math.abs(prog - lastProg) < 0.001) return;
      lastIdx  = idx;
      lastProg = prog;

      const layers = mobileLayersRef.current;
      if (!layers.length) return;

      // Down: current exits through the top and next enters from the bottom.
      // Up: the exact same motion reverses, so the earlier image enters from the top.
      const curLayer = layers[idx];
      const nxtLayer = layers[idx + 1];

      // Lazy-load bg image when layer is about to become visible
      const lazyLoad = (l) => {
        if (l && !l.style.backgroundImage && l.dataset.bg) {
          l.style.backgroundImage = `url(${l.dataset.bg})`;
        }
      };
      if (curLayer) lazyLoad(curLayer);
      if (nxtLayer) lazyLoad(nxtLayer);

      // Reset all layers
      layers.forEach((l, i) => {
        if (!l) return;
        if (i === idx) {
          l.style.transform = `translateY(${-(prog * 100)}%)`;
          l.style.opacity   = `${1 - prog * 0.6}`;
          l.style.zIndex    = '1';
        } else if (i === idx + 1 && nxtLayer) {
          l.style.transform = `translateY(${(1 - prog) * 100}%)`;
          l.style.opacity   = `${0.4 + prog * 0.6}`;
          l.style.zIndex    = '2';
        } else if (i < idx) {
          l.style.transform = 'translateY(-100%)';
          l.style.opacity   = '0';
          l.style.zIndex    = '0';
        } else {
          l.style.transform = 'translateY(100%)';
          l.style.opacity   = '0';
          l.style.zIndex    = '0';
        }
      });
    };

    const scheduleFrame = () => {
      if (rafId === null) rafId = requestAnimationFrame(frame);
    };
    const onResize = () => {
      measure();
      scheduleFrame();
    };

    measure();
    scheduleFrame();
    window.addEventListener("scroll", scheduleFrame, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("load", onResize, { once: true });

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", scheduleFrame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onResize);
    };
  }, [isMobile, mounted]);

  // Never render on server — eliminates SSR/client hydration mismatch
  if (!mounted) {
    // Return a static placeholder that matches the hero image for immediate LCP
    return (
      <div className="fixed inset-0 z-0 bg-[#0a0a0a]">
        <div 
          className="absolute inset-0 w-full h-full opacity-60"
          style={{
            backgroundImage: "url('/photo/hero-v2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
      </div>
    );
  }

  const cls = "absolute inset-0 w-full h-full object-cover";
  const sty = { willChange: "transform", transform: "translateZ(0)" };

  // Phone: scroll-driven parallax swipe — image moves WITH finger in real time
  if (isMobile) {
    return (
      <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
        {SECTION_IMAGES.map((sec, i) => (
          <div
            key={sec.src}
            ref={el => {
              mobileLayersRef.current[i] = el;
              // Only eagerly load hero; others get src set lazily on first show
              if (el && i === 0) el.style.backgroundImage = `url(${sec.src})`;
            }}
            className="absolute inset-0 w-full h-full"
            data-bg={sec.src}
            style={{
              backgroundSize: isMobile ? 'cover' : 'auto 115vh',
              backgroundPosition: isMobile ? 'center top' : 'right bottom',
              backgroundRepeat: 'no-repeat',
              transform: i === 0 ? 'translateY(0%)' : 'translateY(100%)',
              opacity: i === 0 ? 1 : 0,
              willChange: 'transform, opacity',
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/45 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/10 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25 z-10" />
      </div>
    );
  }

  // Desktop: Full scroll-scrubbing video experience
  return (
    <div className="fixed inset-0 z-0 bg-[#0a0a0a]">
      <video ref={fwdRef} src="/videos/optimized.mp4" poster="/photo/hero.webp"
        className={cls} style={{ ...sty, opacity: 1 }}
        muted playsInline preload="metadata"
        aria-hidden="true" suppressHydrationWarning />
      <video ref={revRef} src="/videos/optimized-rev.mp4"
        className={cls} style={{ ...sty, opacity: 0 }}
        muted playsInline preload="none"
        aria-hidden="true" suppressHydrationWarning />
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />
    </div>
  );
}
