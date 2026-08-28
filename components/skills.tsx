import { skills } from "@/config/skills";

const groups = [
  { items: skills.programming, label: "Programming" },
  { items: skills.frameworks, label: "Frameworks" },
  { items: skills.software, label: "Software" },
  { items: skills.fun, label: "Beyond the lab" },
] as const;

export const Skills = () => {
  return (
    <dl className="grid border-t border-[var(--study-rule)] sm:grid-cols-2">
      {groups.map((group, index) => (
        <div
          key={group.label}
          className={`border-b border-[var(--study-rule)] py-7 sm:px-7 ${
            index % 2 === 0 ? "sm:border-r sm:pl-0" : "sm:pr-0"
          }`}
        >
          <dt className="study-kicker text-[var(--study-slate)]">
            {group.label}
          </dt>
          <dd className="mt-4 font-display text-xl leading-relaxed text-[var(--study-ink)] sm:text-2xl">
            {group.items.join(" · ")}
          </dd>
        </div>
      ))}
    </dl>
  );
};
