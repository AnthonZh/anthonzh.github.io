import DefaultLayout from "@/layouts/default";
import { Intro } from "@/components/introduction";
import {
  CSProjectsAccordion,
  EngineeringProjectsAccordion,
} from "@/components/tldrprojects";
import { Skills } from "@/components/skills";
import { PublicationAccordion } from "@/components/publications";
import { ExperienceTimeline } from "@/components/experience-timeline";

const SectionHeading = ({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) => (
  <header className="mb-10">
    <span className="study-kicker">{index}</span>
    <h2 className="study-heading mt-3 text-4xl sm:text-[2.75rem]">{title}</h2>
    {description ? (
      <p className="mt-4 text-sm leading-6 text-[var(--study-muted)]">
        {description}
      </p>
    ) : null}
  </header>
);

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Intro />
      <section className="study-section scroll-mt-24" id="experience">
        <SectionHeading
          description="My work and leadership roles, shown by month. Open each one to learn more about what I contributed."
          index="01 / Experience"
          title="Experience"
        />
        <ExperienceTimeline />
      </section>

      <section className="study-section" id="research">
        <SectionHeading
          description="My research has focused on using machine learning to improve medical imaging and generative models."
          index="02 / Research"
          title="Publications & preprints"
        />
        <PublicationAccordion />
      </section>

      <section className="study-section" id="projects">
        <SectionHeading
          description="A collection of the software and hardware projects I have worked on at Duke."
          index="03 / Work"
          title="Selected projects"
        />
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="study-kicker mb-3 text-[var(--study-slate)]">
              Computer science
            </h3>
            <CSProjectsAccordion />
          </div>
          <div>
            <h3 className="study-kicker mb-3 text-[var(--study-copper)]">
              Engineering
            </h3>
            <EngineeringProjectsAccordion />
          </div>
        </div>
      </section>

      <section className="study-section" id="skills">
        <SectionHeading
          description="The programming languages, frameworks, and software I use, along with a few interests outside engineering."
          index="04 / Skills"
          title="Skills"
        />
        <Skills />
      </section>
    </DefaultLayout>
  );
}
