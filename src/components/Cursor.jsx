"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  // null = unknown (SSR), true = touch device, false = mouse device
  const [isTouch, setIsTouch] = useState(null);

  useEffect(() => {
    // pointer: coarse → touchscreen; pointer: fine → mouse/trackpad
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isTouch !== false) return;  // skip if touch OR still unknown
    const el = cursorRef.current;
    if (!el) return;

    let mx = -200, my = -200;
    let cx = -200, cy = -200;
    let scale = 1;
    let targetScale = 1;
    let raf = null;
    const interactiveNodes = new Set();

    const requestTick = () => {
      if (raf === null) raf = requestAnimationFrame(frame);
    };
    const onMove = (e) => { mx = e.clientX; my = e.clientY; requestTick(); };
    const onEnter = () => { targetScale = 2.6; requestTick(); };
    const onLeave = () => { targetScale = 1; requestTick(); };
    const attach = (node) => {
      if (interactiveNodes.has(node)) return;
      interactiveNodes.add(node);
      node.addEventListener("mouseenter", onEnter);
      node.addEventListener("mouseleave", onLeave);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.querySelectorAll("a, button").forEach(attach);

    const observer = new MutationObserver(() => {
      document.querySelectorAll("a, button").forEach(attach);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const frame = () => {
      raf = null;
      cx += (mx - cx) * 0.11;
      cy += (my - cy) * 0.11;
      scale += (targetScale - scale) * 0.10;
      el.style.transform =
        `translate(${cx}px,${cy}px) translate(-50%,-50%) scale(${scale})`;
      if (Math.abs(mx - cx) > 0.1 || Math.abs(my - cy) > 0.1 || Math.abs(targetScale - scale) > 0.01) {
        requestTick();
      }
    };
    requestTick();

    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("mousemove", onMove);
      interactiveNodes.forEach((node) => {
        node.removeEventListener("mouseenter", onEnter);
        node.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [isTouch]);

  // Render nothing until we know the device type, and nothing on touch devices
  if (isTouch !== false) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position:      "fixed",
        top:           0,
        left:          0,
        width:         38,
        height:        38,
        borderRadius:  "50%",
        background:    "#fff",
        mixBlendMode:  "difference",
        pointerEvents: "none",
        zIndex:        99999,
        willChange:    "transform",
      }}
    />
  );
}
