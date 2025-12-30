import DefaultLayout from "@/layouts/default";
import { Intro } from "@/components/introduction";
import { subtitle } from "@/components/primitives";
import {
  CSProjectsAccordion,
  EngineeringProjectsAccordion,
} from "@/components/tldrprojects";
import { Skills } from "@/components/skills";
import { PublicationAccordion } from "@/components/publications";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col md:flex-row items-start justify-start gap-1 py-2 md:py-2">
        <section
          className="
            flex flex-col items-center justify-start
            w-full max-w-full
            px-4 py-2
            gap-2 space-y-8
            overflow-x-hidden
            md:max-w-md
          "
        >
          <Intro />
          <Skills />
        </section>
        <section className="w-full md:flex-1 min-w-0 justify-center">
          <section className="flex flex-col items-center justify-center gap-1 py-1 md:py-4">
            <span className={subtitle()}>Publications and Preprints</span>
            <div className="w-full min-w-0 max-h-[50vh] md:max-h-[60vh] overflow-y-auto">
              <PublicationAccordion />
            </div>
          </section>
          <section className="flex flex-col items-center justify-center gap-1 py-1 md:py-4">
            <span className={subtitle()}>Computer Science Projects</span>
            <div className="w-full min-w-0 max-h-[50vh] md:max-h-[60vh] overflow-y-auto">
              <CSProjectsAccordion />
            </div>
          </section>
          <section className="flex flex-col items-center justify-center gap-1 py-1 md:py-4">
            <span className={subtitle()}>Engineering Projects</span>
            <div className="w-full min-w-0 max-h-[50vh] md:max-h-[60vh] overflow-y-auto">
              <EngineeringProjectsAccordion />
            </div>
          </section>
        </section>
      </section>
    </DefaultLayout>
  );
}
