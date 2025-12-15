// components/Slideshow.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[]; // e.g. ['/cavaliers/1.jpg', ...]
  interval?: number; // ms between auto-advances (default 4000)
};

export default function Slideshow({ images, interval = 4000 }: Props) {
  const [index, setIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // In browsers setInterval returns a number; use number | null for the ref
  const timerRef = useRef<number | null>(null);

  const count = images.length;

  function clearTimer() {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  function startTimer() {
    clearTimer();
    if (!isPaused && count > 0) {
      timerRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % count);
      }, interval) as unknown as number;
    }
  }

  useEffect(() => {
    startTimer();

    return () => clearTimer();
  }, [count, interval, isPaused]);

  function goTo(i: number) {
    if (count === 0) return;
    const next = ((i % count) + count) % count;

    setIndex(next);
    clearTimer();
    timerRef.current = window.setTimeout(() => {
      window.clearTimeout(timerRef.current!);
      timerRef.current = null;
      startTimer();
    }, 50) as unknown as number;
  }

  function prev() {
    goTo(index - 1);
  }

  function next() {
    goTo(index + 1);
  }

  // handle click or touch on the image area:
  // clicking left half -> prev(), right half -> next()
  function handlePointerNavigate(
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
  ) {
    if (count === 0) return;

    let clientX: number | null = null;

    if ("touches" in e) {
      if (e.touches && e.touches.length > 0) clientX = e.touches[0].clientX;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }

    if (clientX == null) {
      next();

      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const mid = rect.left + rect.width / 2;

    if (clientX < mid) prev();
    else next();
  }

  if (count === 0) {
    return (
      <div className="w-full py-12 text-center text-gray-500">
        No images found.
      </div>
    );
  }

  return (
    <div
      className="w-full max-w-4xl mx-auto"
      onBlur={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image area - clickable / tappable halves */}
      <div
        aria-label="Slideshow. Click left or right half to navigate."
        className="relative h-64 md:h-[520px] overflow-hidden rounded-2xl shadow-lg bg-black/10 cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={(e) => handlePointerNavigate(e)}
        onKeyDown={(e) => {
          // keep keyboard accessibility: left/right arrows still work
          if (e.key === "ArrowLeft") prev();
          if (e.key === "ArrowRight") next();
        }}
        onTouchStart={(e) => handlePointerNavigate(e)}
      >
        {images.map((src, i) => (
          <div
            key={src}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              fill
              alt={`Slide ${i + 1}`}
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 800px"
              src={src}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}

        {/* Optional: subtle hover hint (purely visual) */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between opacity-0 hover:opacity-100 transition-opacity">
          <div className="w-1/2 h-full" />
          <div className="w-1/2 h-full" />
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-3 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-sky-500 ${
              i === index ? "bg-green-600 scale-125" : "bg-gray-300"
            }`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
