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
            ? "border-l border-default-300"
            : "border-l border-default-100"
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
        <p className="truncate text-base font-bold text-foreground">
          {item.role}
        </p>
        <p className="truncate text-sm font-semibold text-blue-600 dark:text-blue-400">
          {item.organization}
        </p>
        <p className="mt-0.5 text-xs text-default-500">
          {formatRange(item)} · {item.location}
        </p>
        {transition ? (
          <p className="mt-1 text-[11px] leading-tight text-default-600">
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
                ? "bg-blue-300 dark:bg-blue-700"
                : "bg-blue-600 dark:bg-blue-400"
              : isCurrent
                ? "bg-blue-600 dark:bg-blue-400"
                : "bg-blue-500 dark:bg-blue-400";
          const rounding =
            item.phases.length === 1
              ? "rounded-full"
              : isFirst
                ? "rounded-l-full"
                : isLast
                  ? "rounded-r-full"
                  : "";

          return (
            <div
              key={`${phase.label}-${formatDate(phase.start)}`}
              aria-hidden="true"
              className={`relative z-10 h-1 ${color} ${rounding}`}
              style={{
                gridColumn: `${startColumn + 1} / span ${duration}`,
                gridRow: 1,
              }}
            >
              {isFirst ? (
                <span className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-inherit" />
              ) : null}
              {!isFirst ? (
                <span className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border border-background bg-blue-600 dark:bg-blue-400" />
              ) : null}
              {isLast ? (
                <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-inherit" />
              ) : null}
              {isCurrent ? (
                <span className="absolute -top-5 right-0 inline-flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
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
      className="w-full max-w-6xl overflow-x-auto"
      role="region"
    >
      <div className="mx-auto w-max min-w-[960px]">
        <div
          className="grid gap-4 px-4 pb-2"
          style={{ gridTemplateColumns: contentGrid }}
        >
          <span className="self-end text-sm font-medium text-default-500">
            Role
          </span>
          <div>
            <div className="grid" style={{ gridTemplateColumns: monthGrid }}>
              {timelineYears.map((year) => (
                <span
                  key={year.year}
                  className="border-l border-default-300 pl-2 text-xs font-semibold text-default-600"
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
                    className="border-l border-default-100 pl-1 text-[10px] text-default-400"
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
            base: "border-b border-default-200 last:border-b-0",
            content: "px-4 pb-5",
            title: "w-full",
            trigger:
              "cursor-pointer px-4 py-3 data-[hover=true]:bg-default-100",
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
                <p className="max-w-3xl border-l-2 border-default-200 pl-4 text-sm leading-7 text-default-700">
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
