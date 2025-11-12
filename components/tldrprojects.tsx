import { Accordion, AccordionItem } from "@heroui/accordion";
import { Link } from "@heroui/link";

import { projects } from "@/config/projects";

export const CSProjectsAccordion = () => {
  return (
    <Accordion
      itemClasses={{
        trigger: "cursor-pointer",
        content: "cursor-auto",
        title: [
          "underline underline-offset-4 decoration-1 font-extrabold text-blue-500",
          "decoration-transparent",
          "transition-[text-decoration-color] duration-300 ease-in-out",
          "hover:decoration-current focus-visible:decoration-current",
        ].join(" "),
        subtitle: "font-bold",
      }}
      selectionMode="multiple"
      variant="bordered"
    >
      {projects.cs.map((p) => (
        <AccordionItem
          key={p.name}
          aria-label={p.name}
          subtitle={p.time}
          title={p.name}
        >
          <p className="text-default-700 text-justify cursor-text select-text">
            {p.description}
          </p>
          <br />
          {p.learnmore?.trim() ? (
            <p className="text-default-700 pl-8 -indent-4 text-justify">
              <Link
                isExternal
                className={[
                  "text-default-700 hover:text-default-800 visited:text-default-700",
                  "underline underline-offset-4 decoration-1",
                  "decoration-transparent",
                  "transition-[text-decoration-color] duration-300 ease-in-out",
                  "hover:decoration-current focus-visible:decoration-current",
                ].join(" ")}
                color="foreground"
                href={p.learnmore}
                rel="noopener noreferrer"
                target="_blank"
              >
                Learn More
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
        trigger: "cursor-pointer",
        content: "cursor-auto",
        title: [
          "underline underline-offset-4 decoration-1 font-extrabold text-blue-500",
          "decoration-transparent",
          "transition-[text-decoration-color] duration-300 ease-in-out",
          "hover:decoration-current focus-visible:decoration-current",
        ].join(" "),
        subtitle: "font-bold",
      }}
      selectionMode="multiple"
      variant="bordered"
    >
      {projects.engineering.map((p) => (
        <AccordionItem
          key={p.name}
          aria-label={p.name}
          subtitle={p.time}
          title={p.name}
        >
          <p className="text-default-700 text-justify cursor-text select-text">
            {p.description}
          </p>
          <br />
          {p.learnmore?.trim() ? (
            <p className="text-default-700 pl-8 -indent-4 text-justify">
              <Link
                isExternal
                className={[
                  "text-default-700 hover:text-default-800 visited:text-default-700",
                  "underline underline-offset-4 decoration-1",
                  "decoration-transparent",
                  "transition-[text-decoration-color] duration-300 ease-in-out",
                  "hover:decoration-current focus-visible:decoration-current",
                ].join(" ")}
                color="foreground"
                href={p.learnmore}
                rel="noopener noreferrer"
                target="_blank"
              >
                Learn More
              </Link>
            </p>
          ) : null}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
