import { Accordion, AccordionItem } from "@heroui/accordion";

import { Link } from "@heroui/link"

import { projects } from "@/config/projects";


export const ProjectsAccordion = () => {
  return (
    <Accordion variant="splitted">
      {projects.projects.map((p) => (
        <AccordionItem
          key={p.name}
          aria-label={p.name}
          subtitle={p.time}
          title={p.name}
        >
          <p className="text-default-700 text-justify">{p.description}</p>
          <br />
          {p.learnmore?.trim() ? (
            <p className="text-default-600">
              <Link
                isExternal
                href={p.learnmore}
                rel="noopener noreferrer"
                target="_blank"
              >
                Learn more
              </Link>
            </p>
          ) : null}
        </AccordionItem>
      ))}
    </Accordion>
  );
};
