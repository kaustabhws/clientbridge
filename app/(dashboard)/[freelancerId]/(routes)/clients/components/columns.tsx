"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type ClientColumn = {
  id: string;
  name: string;
  company: string;
  email: string;
  status: string;
  projects: number;
  createdAt: string;
};

export const columns: ColumnDef<ClientColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 whitespace-nowrap text-xs font-semibold ${
            row.original.status === "ACTIVE" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {row.original.status}
        </span>
      );
    },
  },
  {
    accessorKey: "projects",
    header: "Projects",
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-2">
          <span>{row.original.projects}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
