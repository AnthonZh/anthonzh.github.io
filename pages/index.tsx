
import DefaultLayout from "@/layouts/default";
import { Intro } from "@/components/introduction";
import { subtitle } from "@/components/primitives";
import { ProjectsAccordion } from "@/components/tldrprojects";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-1 py-2 md:py-1">
        <Intro />
      </section>
      <section className="flex flex-col items-center justify-center gap-1 py-4 md:py-8">
        <span className={subtitle()}>Projects</span>
        <ProjectsAccordion />
      </section>
    </DefaultLayout>
  );
}
