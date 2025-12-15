"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  interval?: number;
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
      timerRef.current = null;
    }
  }

  function startTimer() {
    clearTimer();
    if (!isPaused && count > 0) {
      timerRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % count);
      }, interval);
    }
  }

  useEffect(() => {
    startTimer();

    return () => clearTimer();
  }, [count, interval, isPaused]);

  function goTo(i: number) {
    const next = ((i % count) + count) % count; // normalize

    setIndex(next);
    clearTimer();
    timerRef.current = window.setTimeout(() => {
      window.clearTimeout(timerRef.current!);
      timerRef.current = null;
      startTimer();
    }, 50) as unknown as number;
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
      {/* Image area */}
      <div className="relative h-64 md:h-[520px] overflow-hidden rounded-2xl shadow-lg bg-black/10">
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
