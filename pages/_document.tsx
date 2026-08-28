import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";

import { fontDisplay, fontMono, fontSans } from "@/config/fonts";

export default function Document() {
  return (
    <Html className="dark" lang="en">
      <Head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
          fontDisplay.variable,
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
