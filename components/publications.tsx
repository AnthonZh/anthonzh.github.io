import { Accordion, AccordionItem } from "@heroui/accordion";
import { Link } from "@heroui/link";

import { publications } from "@/config/publications";

export const PublicationAccordion = () => {
  return (
    <Accordion
      itemClasses={{
        base: "border-b border-[var(--study-rule)] last:border-b-0",
        content: "cursor-auto px-0 pb-8 md:pl-32",
        indicator: "text-[var(--study-copper)]",
        subtitle:
          "mt-1 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[var(--study-faint)]",
        title:
          "max-w-4xl font-display text-2xl leading-snug text-[var(--study-ink)] transition-colors group-data-[hover=true]:text-[var(--study-copper-soft)] md:text-3xl",
        trigger: "group cursor-pointer px-0 py-6",
      }}
      selectionMode="multiple"
      variant="light"
    >
      {publications.research.map((p) => (
        <AccordionItem
          key={p.name}
          aria-label={p.name}
          subtitle={p.time}
          title={p.name}
        >
          <p className="cursor-text select-text text-sm leading-7 text-[var(--study-muted)]">
            {p.description}
          </p>
          <p className="mt-5 max-w-3xl border-l border-[var(--study-copper)] pl-4 text-xs leading-6 text-[var(--study-faint)]">
            <Link
              isExternal
              className="text-inherit underline decoration-[var(--study-strong-rule)] underline-offset-4 transition-colors hover:text-[var(--study-copper-soft)]"
              href={p.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {p.citation}
            </Link>
          </p>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
