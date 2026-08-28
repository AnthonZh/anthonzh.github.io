import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        display: ["var(--font-display)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: "#100f0d",
            foreground: "#eee7dc",
            content1: "#171512",
            content2: "#1d1a16",
            content3: "#24201b",
            content4: "#2c2721",
            primary: {
              DEFAULT: "#cb805d",
              foreground: "#100f0d",
            },
            focus: "#cb805d",
          },
        },
      },
    }),
  ],
};

export default config;
