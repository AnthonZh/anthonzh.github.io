import NextLink from "next/link";

import DefaultLayout from "@/layouts/default";

export default function BlogPage() {
  return (
    <DefaultLayout>
      <section className="grid min-h-[70svh] gap-12 border-b border-[var(--study-rule)] py-20 md:grid-cols-[8rem_minmax(0,1fr)] md:py-28">
        <p className="study-kicker">Writing</p>
        <div className="max-w-4xl">
          <h1 className="study-heading text-6xl sm:text-7xl md:text-8xl">
            Blog
          </h1>
          <p className="mt-8 max-w-2xl font-display text-2xl leading-snug text-[var(--study-ink)] sm:text-3xl">
            I plan to write about projects I have enjoyed, lessons I have
            learned from them, and technical details that do not fit on the
            homepage.
          </p>
          <div className="mt-16 border-t border-[var(--study-strong-rule)] pt-5">
            <p className="study-kicker text-[var(--study-slate)]">
              Nothing here yet
            </p>
            <p className="study-prose mt-4 max-w-xl">
              I have not published anything yet, but I hope to add posts as I
              continue working on new projects. You can find my current work on
              the homepage.
            </p>
            <NextLink
              className="study-link mt-7 inline-block font-mono text-xs uppercase tracking-[0.12em]"
              href="/#projects"
            >
              Browse projects →
            </NextLink>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
