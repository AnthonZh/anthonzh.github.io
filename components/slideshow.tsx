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
      className="mx-auto w-full"
      onBlur={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        aria-label="Slideshow. Click left or right half to navigate."
        className="relative aspect-[16/10] cursor-pointer overflow-hidden border border-[var(--study-strong-rule)] bg-black"
        role="button"
        tabIndex={0}
        onClick={(e) => handlePointerNavigate(e)}
        onKeyDown={(e) => {
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

        <span className="pointer-events-none absolute bottom-4 right-4 bg-[color:rgba(16,15,13,0.78)] px-2 py-1 font-mono text-[0.62rem] tracking-[0.12em] text-[var(--study-ink)]">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(count).padStart(2, "0")}
        </span>
      </div>

      <div aria-label="Choose slide" className="mt-4 flex items-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-0.5 flex-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--study-copper)] ${
              i === index
                ? "bg-[var(--study-copper)]"
                : "bg-[var(--study-strong-rule)] hover:bg-[var(--study-muted)]"
            }`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
