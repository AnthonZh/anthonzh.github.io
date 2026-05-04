import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";

import { skills } from "@/config/skills";

const columns = [
  {
    key: "languages",
    label: "Languages",
  },
  {
    key: "frameworks",
    label: "Frameworks",
  },
  {
    key: "software",
    label: "Software",
  },
];

const keys = Object.keys(skills) as (keyof typeof skills)[];

const maxLength = Math.max(...keys.map((key) => skills[key].length));

const rows = Array.from({ length: maxLength }, (_, index) => ({
  key: String(index + 1),
  languages: skills.programming[index] ?? "",
  frameworks: skills.frameworks[index] ?? "",
  software: skills.software[index] ?? "",
}));

export const Skills = () => {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <h3 className="text-center text-blue-500 font-bold">Skills</h3>
      <Table
        isCompact
        removeWrapper
        aria-label="Skills"
        className="w-full table-fixed bg-transparent"
        classNames={{
          base: "w-full max-w-full bg-transparent",
          table: "table-fixed w-full",
          thead: "bg-transparent",
          tbody: "bg-transparent",
          tr: "bg-transparent",
          th: "bg-transparent",
          td: "bg-transparent",
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key} className="text-center text-sm">
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell className="text-center text-sm whitespace-normal break-words">
                  {getKeyValue(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
