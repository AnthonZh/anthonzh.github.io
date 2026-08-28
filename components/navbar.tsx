import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { siteConfig } from "@/config/site";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export const Navbar = () => {
  const router = useRouter();

  return (
    <HeroUINavbar
      classNames={{
        base: "border-b border-[var(--study-rule)] bg-[color:rgba(16,15,13,0.92)]",
        wrapper: "max-w-[var(--study-max)] px-5 sm:px-8",
        menu: "border-t border-[var(--study-rule)] bg-[var(--study-bg)] px-5 pt-8",
      }}
      maxWidth="full"
      position="sticky"
    >
      <NavbarContent className="basis-full" justify="start">
        <NextLink
          aria-label="Anthony Zhang, home"
          className="group flex items-baseline gap-3"
          href="/"
        >
          <span className="font-display text-xl text-[var(--study-ink)] transition-colors group-hover:text-[var(--study-copper-soft)]">
            Anthony Zhang
          </span>
          <span className="hidden font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--study-faint)] sm:inline">
            portfolio
          </span>
        </NextLink>
        <div className="ml-10 hidden items-center gap-6 md:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                aria-current={
                  router.pathname === item.href ? "page" : undefined
                }
                className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[var(--study-muted)] transition-colors hover:text-[var(--study-copper-soft)] aria-[current=page]:text-[var(--study-copper)]"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent className="hidden basis-full sm:flex" justify="end">
        <NavbarItem className="hidden items-center gap-4 sm:flex">
          <Link
            isExternal
            aria-label="GitHub"
            className="text-[var(--study-muted)] hover:text-[var(--study-copper-soft)]"
            href={siteConfig.links.github}
          >
            <GithubIcon size={19} />
          </Link>
          <Link
            isExternal
            aria-label="LinkedIn"
            className="text-[var(--study-muted)] hover:text-[var(--study-copper-soft)]"
            href={siteConfig.links.linkedin}
          >
            <LinkedinIcon size={19} />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4 md:hidden" justify="end">
        <NavbarMenuToggle className="text-[var(--study-ink)]" />
      </NavbarContent>

      <NavbarMenu>
        <div className="flex flex-col gap-1">
          {siteConfig.navMenuItems.map((item) => (
            <NavbarMenuItem
              key={item.href}
              className="border-b border-[var(--study-rule)] py-4"
            >
              <Link
                className="font-display text-3xl text-[var(--study-ink)]"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <div className="mt-6 flex gap-5">
            <Link
              isExternal
              className="study-link text-sm"
              href={siteConfig.links.github}
            >
              GitHub
            </Link>
            <Link
              isExternal
              className="study-link text-sm"
              href={siteConfig.links.linkedin}
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
