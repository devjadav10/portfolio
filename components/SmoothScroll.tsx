"use client";
import { useEffect, ReactNode, memo } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

const SmoothScrollBase = ({ children }: SmoothScrollProps) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    // Expose Lenis instance globally so other components
    // (like the floating nav) can trigger smooth programmatic scrolls.
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      if ((window as any).lenis === lenis) {
        (window as any).lenis = null;
      }
    };
  }, []);

  return <>{children}</>;
};

const SmoothScroll = memo(SmoothScrollBase);

SmoothScroll.displayName = "SmoothScroll";

export default SmoothScroll;