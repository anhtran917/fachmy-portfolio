"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import dynamic from "next/dynamic";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
const VideoScrub = dynamic(() => import("../components/VideoScrub"), { ssr: false });
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SeoContent from "../components/SeoContent";
import { TrustedBy, Services, WhyChooseMe, Process, Testimonials, FAQ, FinalCTA } from "../components/HomeSections";

export default function Home() {
  const footerRef   = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const usesTouch = window.matchMedia("(pointer: coarse)").matches;
    const bottomBlur = document.getElementById("site-bottom-blur");

    const blurTween = bottomBlur && footerRef.current
      ? gsap.fromTo(bottomBlur, { opacity: 1 }, {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        })
      : null;

    if (prefersReducedMotion || usesTouch) {
      ScrollTrigger.refresh();
      return () => blurTween?.revert();
    }

    const lenis = new Lenis({
      lerp: 0.16,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const tick = (time) => { lenis.raf(time * 1000); };
    gsap.ticker.add(tick);

    return () => {
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(tick);
      lenis.destroy();
      blurTween?.revert();
    };
  }, []);

  return (
    <main>
      {/* SEO-crawlable structured content (visually hidden) - Forced HMR refresh */}
      <SeoContent />

      {/* grain */}
      <div className="grain-overlay" />

      {/* difference cursor */}
      <Cursor />

      {/* sticky scrubbed video — lives behind everything */}
      <VideoScrub />

      {/* scroll progress indicator */}

      {/* fixed nav */}
      <Navbar />

      {/* bottom blur — fixed to viewport, fades when footer arrives */}
      {/* scrollable sections */}
      <div className="relative z-10">
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <Work />
        <WhyChooseMe />
        <Process />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Contact />
        <div ref={footerRef}><Footer /></div>
      </div>
    </main>
  );
}
