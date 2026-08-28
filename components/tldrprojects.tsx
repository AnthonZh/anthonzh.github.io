import { Accordion, AccordionItem } from "@heroui/accordion";
import { Link } from "@heroui/link";

import { projects } from "@/config/projects";

export const CSProjectsAccordion = () => {
  return (
    <Accordion
      itemClasses={{
        base: "border-b border-[var(--study-rule)] last:border-b-0",
        content: "cursor-auto px-0 pb-6",
        indicator: "text-[var(--study-copper)]",
        subtitle:
          "mt-1 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[var(--study-faint)]",
        title:
          "font-display text-xl leading-snug text-[var(--study-ink)] transition-colors group-data-[hover=true]:text-[var(--study-copper-soft)]",
        trigger: "group cursor-pointer px-0 py-5",
      }}
      selectionMode="multiple"
      variant="light"
    >
      {projects.cs.map((p) => (
        <AccordionItem
          key={p.name}
          aria-label={p.name}
          subtitle={p.time}
          title={p.name}
        >
          <p className="max-w-2xl cursor-text select-text text-sm leading-7 text-[var(--study-muted)]">
            {p.description}
          </p>
          {p.learnmore?.trim() ? (
            <p className="mt-4">
              <Link
                isExternal
                className="study-link font-mono text-[0.68rem] uppercase tracking-[0.12em]"
                href={p.learnmore}
                rel="noopener noreferrer"
                target="_blank"
              >
                View project ↗
              </Link>
            </p>
          ) : null}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export const EngineeringProjectsAccordion = () => {
  return (
    <Accordion
      itemClasses={{
        base: "border-b border-[var(--study-rule)] last:border-b-0",
        content: "cursor-auto px-0 pb-6",
        indicator: "text-[var(--study-copper)]",
        subtitle:
          "mt-1 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[var(--study-faint)]",
        title:
          "font-display text-xl leading-snug text-[var(--study-ink)] transition-colors group-data-[hover=true]:text-[var(--study-copper-soft)]",
        trigger: "group cursor-pointer px-0 py-5",
      }}
      selectionMode="multiple"
      variant="light"
    >
      {projects.engineering.map((p) => (
        <AccordionItem
          key={p.name}
          aria-label={p.name}
          subtitle={p.time}
          title={p.name}
        >
          <p className="max-w-2xl cursor-text select-text text-sm leading-7 text-[var(--study-muted)]">
            {p.description}
          </p>
          {p.learnmore?.trim() ? (
            <p className="mt-4">
              <Link
                isExternal
                className="study-link font-mono text-[0.68rem] uppercase tracking-[0.12em]"
                href={p.learnmore}
                rel="noopener noreferrer"
                target="_blank"
              >
                View project ↗
              </Link>
            </p>
          ) : null}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
