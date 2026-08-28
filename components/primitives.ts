import { tv } from "tailwind-variants";

export const title = tv({
  base: "study-heading inline",
  variants: {
    color: {
      violet: "text-[var(--study-copper-soft)]",
      yellow: "text-[var(--study-copper-soft)]",
      blue: "text-[var(--study-slate)]",
      cyan: "text-[var(--study-slate)]",
      green: "text-[var(--study-copper-soft)]",
      pink: "text-[var(--study-copper-soft)]",
      foreground: "text-[var(--study-ink)]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const subtitle = tv({
  base: "study-heading my-2 block w-full max-w-full text-3xl md:text-4xl",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});
