import DefaultLayout from "@/layouts/default";
import { Intro } from "@/components/introduction";
import { subtitle } from "@/components/primitives";
import {
  CSProjectsAccordion,
  EngineeringProjectsAccordion,
} from "@/components/tldrprojects";
import { PublicationAccordion } from "@/components/publications";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-1 py-2 md:py-1">
        <Intro />
      </section>
      <section className="flex flex-col items-center justify-center gap-1 py-1 md:py-4">
        <span className={subtitle()}>Publications and Preprints</span>
        <PublicationAccordion />
      </section>
      <section className="flex flex-col items-center justify-center gap-1 py-1 md:py-4">
        <span className={subtitle()}>Computer Science Projects</span>
        <CSProjectsAccordion />
      </section>
      <section className="flex flex-col items-center justify-center gap-1 py-1 md:py-4">
        <span className={subtitle()}>Engineering Projects</span>
        <EngineeringProjectsAccordion />
      </section>
    </DefaultLayout>
  );
}
