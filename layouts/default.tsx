import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Head />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main
        className="mx-auto w-full max-w-[var(--study-max)] flex-1 px-5 sm:px-8"
        id="main-content"
      >
        {children}
      </main>
      <footer className="mx-auto mt-16 flex w-full max-w-[var(--study-max)] flex-col gap-3 border-t border-[var(--study-rule)] px-5 py-8 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[var(--study-faint)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>Anthony Zhang</span>
        <span>ECE &amp; CS · Duke University</span>
      </footer>
    </div>
  );
}
