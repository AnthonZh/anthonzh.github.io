import { Accordion, AccordionItem } from "@heroui/accordion";
import { Link } from "@heroui/link";

import { publications } from "@/config/publications";

export const PublicationAccordion = () => {
  return (
    <Accordion variant="splitted">
      {publications.preprints.map((p) => (
        <AccordionItem
          key={p.name}
          aria-label={p.name}
          subtitle={p.time}
          title={p.name}
        >
          <p className="text-default-700 text-justify">{p.description}</p>
          <br />
          <Link
            isExternal
            href={p.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="text-default-700 pl-8 -indent-8 text-justify">
              {p.citation}
            </p>
          </Link>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
