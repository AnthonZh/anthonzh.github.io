import { Accordion, AccordionItem } from "@heroui/accordion";

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
          <p className="text-default-700">{p.description}</p>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
