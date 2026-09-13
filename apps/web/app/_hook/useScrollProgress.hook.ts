"use client";

import { useState, useEffect, RefObject } from "react";

export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const totalScroll = ref.current.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScroll;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ref]);

  return progress;
}
