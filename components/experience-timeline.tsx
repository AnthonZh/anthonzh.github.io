import { useEffect, useMemo, useState } from "react";
import { Accordion, AccordionItem } from "@heroui/accordion";

import {
  experience,
  experienceTimelineStart,
  type Experience,
  type ExperienceMonth,
} from "@/config/experience";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

const monthWidth = 22;
const updateInterval = 6 * 60 * 60 * 1000;

const monthIndex = (date: ExperienceMonth) => date.year * 12 + date.month - 1;

const monthsBetween = (start: ExperienceMonth, end: ExperienceMonth) =>
  monthIndex(end) - monthIndex(start) + 1;

const laterMonth = (first: ExperienceMonth, second: ExperienceMonth) =>
  monthIndex(first) >= monthIndex(second) ? first : second;

const latestCompletedMonth = experience.reduce<ExperienceMonth>(
  (latest, item) => (item.end ? laterMonth(latest, item.end) : latest),
  experienceTimelineStart,
);

const getCurrentMonth = (): ExperienceMonth => {
  const now = new Date(Date.now());

  return { month: now.getMonth() + 1, year: now.getFullYear() };
};

const buildTimelineMonths = (end: ExperienceMonth) =>
  Array.from(
    { length: monthsBetween(experienceTimelineStart, end) },
    (_, index) => {
      const absoluteMonth = monthIndex(experienceTimelineStart) + index;

      return {
        month: (absoluteMonth % 12) + 1,
        year: Math.floor(absoluteMonth / 12),
      };
    },
  );

const groupTimelineYears = (months: ExperienceMonth[]) =>
  months.reduce<Array<{ count: number; year: number }>>((years, month) => {
    const lastYear = years.at(-1);

    if (lastYear?.year === month.year) {
      lastYear.count += 1;
    } else {
      years.push({ count: 1, year: month.year });
    }

    return years;
  }, []);

const formatDate = (date: ExperienceMonth) =>
  `${monthNames[date.month - 1]} ${date.year}`;

const formatRange = (item: Experience) =>
  `${formatDate(item.start)} to ${item.end ? formatDate(item.end) : "Present"}`;

const formatTransition = (item: Experience) => {
  if (item.phases.length < 2) return null;

  const firstPhase = item.phases[0];
  const secondPhase = item.phases[1];

  if (!firstPhase?.end || !secondPhase) return null;

  return `${firstPhase.label} through ${formatDate(firstPhase.end)} · ${secondPhase.label} from ${formatDate(secondPhase.start)}`;
};

const MonthGrid = ({ months }: { months: ExperienceMonth[] }) => (
  <div
    aria-hidden="true"
    className="absolute inset-0 grid"
    style={{
      gridTemplateColumns: `repeat(${months.length}, ${monthWidth}px)`,
    }}
  >
    {months.map((month) => (
      <span
        key={`${month.year}-${month.month}`}
        className={
          month.month === 1
            ? "border-l border-[var(--study-strong-rule)]"
            : "border-l border-[var(--study-rule)]"
        }
      />
    ))}
  </div>
);

const ExperienceBar = ({
  item,
  timelineEnd,
  timelineMonths,
}: {
  item: Experience;
  timelineEnd: ExperienceMonth;
  timelineMonths: ExperienceMonth[];
}) => {
  const transition = formatTransition(item);

  return (
    <div
      className="grid w-full items-center gap-4 pr-2"
      style={{
        gridTemplateColumns: `14rem ${timelineMonths.length * monthWidth}px`,
      }}
    >
      <div className="min-w-0">
        <p className="truncate font-display text-lg text-[var(--study-ink)]">
          {item.role}
        </p>
        <p className="truncate text-sm font-medium text-[var(--study-copper-soft)]">
          {item.organization}
        </p>
        <p className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.08em] text-[var(--study-faint)]">
          {formatRange(item)} · {item.location}
        </p>
        {transition ? (
          <p className="mt-2 text-[11px] leading-tight text-[var(--study-muted)]">
            {transition}
          </p>
        ) : null}
      </div>

      <div
        className="relative grid h-10 items-center"
        style={{
          gridTemplateColumns: `repeat(${timelineMonths.length}, ${monthWidth}px)`,
        }}
      >
        <MonthGrid months={timelineMonths} />
        {item.phases.map((phase, index) => {
          const phaseEnd = phase.end ?? timelineEnd;
          const startColumn =
            monthsBetween(experienceTimelineStart, phase.start) - 1;
          const duration = monthsBetween(phase.start, phaseEnd);
          const isCurrent = phase.end === null;
          const isFirst = index === 0;
          const isLast = index === item.phases.length - 1;
          const color =
            item.phases.length > 1
              ? isFirst
                ? "bg-[var(--study-slate)]"
                : "bg-[var(--study-copper)]"
              : isCurrent
                ? "bg-[var(--study-copper)]"
                : "bg-[var(--study-slate)]";

          return (
            <div
              key={`${phase.label}-${formatDate(phase.start)}`}
              aria-hidden="true"
              className={`relative z-10 h-0.5 ${color}`}
              style={{
                gridColumn: `${startColumn + 1} / span ${duration}`,
                gridRow: 1,
              }}
            >
              {isFirst ? (
                <span className="absolute -left-0.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 bg-inherit" />
              ) : null}
              {!isFirst ? (
                <span className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border border-[var(--study-bg)] bg-[var(--study-copper)]" />
              ) : null}
              {isLast ? (
                <span className="absolute -right-0.5 top-1/2 h-1.5 w-1.5 -translate-y-1/2 bg-inherit" />
              ) : null}
              {isCurrent ? (
                <span className="absolute -top-6 right-0 inline-flex items-center gap-1.5 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-[var(--study-copper-soft)]">
                  <span className="h-1.5 w-1.5 bg-current" />
                  <span>Present</span>
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ExperienceTimeline = () => {
  const [timelineEnd, setTimelineEnd] =
    useState<ExperienceMonth>(latestCompletedMonth);

  useEffect(() => {
    const updateTimelineEnd = () => {
      const nextEnd = laterMonth(latestCompletedMonth, getCurrentMonth());

      setTimelineEnd((currentEnd) =>
        monthIndex(currentEnd) === monthIndex(nextEnd) ? currentEnd : nextEnd,
      );
    };

    updateTimelineEnd();
    const interval = window.setInterval(updateTimelineEnd, updateInterval);

    return () => window.clearInterval(interval);
  }, []);

  const timelineMonths = useMemo(
    () => buildTimelineMonths(timelineEnd),
    [timelineEnd],
  );
  const timelineYears = useMemo(
    () => groupTimelineYears(timelineMonths),
    [timelineMonths],
  );
  const contentGrid = `14rem ${timelineMonths.length * monthWidth}px`;
  const monthGrid = `repeat(${timelineMonths.length}, ${monthWidth}px)`;

  return (
    <div
      aria-label="Experience by month. Scroll horizontally to see all dates."
      className="w-full overflow-x-auto pb-3"
      role="region"
    >
      <div className="mx-auto w-max min-w-[960px]">
        <div
          className="grid gap-4 px-4 pb-2"
          style={{ gridTemplateColumns: contentGrid }}
        >
          <span className="study-kicker self-end text-[var(--study-faint)]">
            Role
          </span>
          <div>
            <div className="grid" style={{ gridTemplateColumns: monthGrid }}>
              {timelineYears.map((year) => (
                <span
                  key={year.year}
                  className="border-l border-[var(--study-strong-rule)] pl-2 font-mono text-[0.65rem] font-medium tracking-[0.08em] text-[var(--study-muted)]"
                  style={{ gridColumn: `span ${year.count}` }}
                >
                  {year.year}
                </span>
              ))}
            </div>
            <div
              className="mt-2 grid"
              style={{ gridTemplateColumns: monthGrid }}
            >
              {timelineMonths.map((month, index) => {
                const showLabel =
                  index === 0 ||
                  index === timelineMonths.length - 1 ||
                  [1, 4, 7, 10].includes(month.month);

                return (
                  <span
                    key={`${month.year}-${month.month}`}
                    className="border-l border-[var(--study-rule)] pl-1 font-mono text-[9px] uppercase text-[var(--study-faint)]"
                  >
                    {showLabel ? monthNames[month.month - 1] : null}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <Accordion
          itemClasses={{
            base: "border-b border-[var(--study-rule)] last:border-b-0",
            content: "px-4 pb-5",
            title: "w-full",
            trigger:
              "group cursor-pointer px-4 py-4 data-[hover=true]:bg-transparent",
            indicator: "text-[var(--study-copper)]",
          }}
          selectionMode="multiple"
          variant="light"
        >
          {experience.map((item) => (
            <AccordionItem
              key={`${item.organization}-${item.role}`}
              aria-label={`${item.role} at ${item.organization}, ${formatRange(item)}`}
              title={
                <ExperienceBar
                  item={item}
                  timelineEnd={timelineEnd}
                  timelineMonths={timelineMonths}
                />
              }
            >
              <div
                className="grid gap-4"
                style={{ gridTemplateColumns: contentGrid }}
              >
                <span aria-hidden="true" />
                <p className="max-w-3xl border-l border-[var(--study-copper)] pl-4 text-sm leading-7 text-[var(--study-muted)]">
                  {item.summary}
                </p>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
