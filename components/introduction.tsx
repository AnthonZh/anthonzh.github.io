import { Link } from "@heroui/link";
import Image from "next/image";

import { siteConfig } from "@/config/site";

export const Intro = () => {
  return (
    <section className="grid min-h-[calc(100svh-4rem)] items-center gap-12 border-b border-[var(--study-rule)] py-16 md:grid-cols-[minmax(0,1.3fr)_minmax(15rem,0.7fr)] md:gap-16 md:py-20">
      <div className="max-w-3xl">
        <p className="study-kicker">Duke University · Durham, NC</p>
        <h1 className="study-heading mt-5 text-6xl leading-[0.9] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          Anthony
          <br />
          Zhang
        </h1>
        <p className="mt-8 max-w-2xl font-display text-2xl leading-snug text-[var(--study-ink)] sm:text-3xl">
          I enjoy building intelligent systems through machine learning,
          robotics, and embedded hardware.
        </p>
        <p className="study-prose mt-5 max-w-xl">
          As an Electrical &amp; Computer Engineering and Computer Science
          student at Duke, I am interested in projects that combine software and
          hardware to solve real problems.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-xs uppercase tracking-[0.13em]">
          <a className="study-link text-xs leading-5" href="#experience">
            Experience ↓
          </a>
          <Link
            isExternal
            className="study-link !text-xs leading-5"
            href={siteConfig.links.github}
          >
            GitHub ↗
          </Link>
          <Link
            isExternal
            className="study-link !text-xs leading-5"
            href={siteConfig.links.linkedin}
          >
            LinkedIn ↗
          </Link>
        </div>
      </div>

      <figure className="mx-auto w-full max-w-sm md:mx-0 md:justify-self-end">
        <div className="border-l border-t border-[var(--study-copper)] p-2">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--study-surface)]">
            <Image
              fill
              priority
              alt="Anthony Zhang"
              className="object-cover grayscale-[18%]"
              sizes="(max-width: 768px) 90vw, 360px"
              src="/anthonyformal.jpg"
            />
          </div>
        </div>
        <figcaption className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[var(--study-faint)]">
          Machine learning · Robotics · Embedded systems
        </figcaption>
      </figure>
    </section>
  );
};
