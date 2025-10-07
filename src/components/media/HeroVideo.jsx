/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Features:
 * - Lazy attach <source> only when in-viewport
 * - Disables on mobile and when prefers-reduced-motion is set
 * - Poster + metadata preload for quick first paint
 */
export default function HeroVideo({
  sources = [], // [{ src, type }], highest quality first
  poster, // poster image URL
  className = "",
  autoDisableOnMobile = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "metadata",
}) {
  const videoRef = useRef(null);
  const [canLoad, setCanLoad] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  }, []);

  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(max-width: 768px)")?.matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || (autoDisableOnMobile && isMobile)) return;

    const el = videoRef.current;
    if (!el) return;

    // Lazy-load when the section is visible
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setCanLoad(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [prefersReducedMotion, isMobile, autoDisableOnMobile]);

  // Don’t render <source> if we shouldn’t load (poster will show)
  const effectiveSources =
    canLoad && !prefersReducedMotion && !(autoDisableOnMobile && isMobile)
      ? sources
      : [];

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload={preload}
      poster={poster}
      aria-hidden="true"
    >
      {effectiveSources.map((s, i) => (
        <source key={i} src={s.src} type={s.type} />
      ))}
    </video>
  );
}
