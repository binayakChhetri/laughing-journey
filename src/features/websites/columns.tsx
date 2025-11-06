"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash2 } from "lucide-react";

// This type is used to define the shape of our data.
export type Website = {
  id: string;
  name: string;
  domain: string;
  paymentGateways: string[];
  apiKey: string;
  status: "Active" | "Disconnected";
};

export const columns: ColumnDef<Website>[] = [
  {
    id: "#",
    header: "#",
    cell: ({ row }) => <div className="text-gray-600">{row.index + 1}</div>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="font-medium text-gray-900">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "domain",
    header: "Domain",
    cell: ({ row }) => {
      const domain = row.getValue("domain") as string;
      return (
        <div className="flex items-center gap-2 text-gray-600">
          {domain}
          <a href="#" className="text-blue-600 hover:text-blue-700">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-4l4 4m0 0l-4-4m4 4H3"
              />
            </svg>
          </a>
        </div>
      );
    },
  },
  {
    accessorKey: "paymentGateways",
    header: "Payment Gateways",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cell: ({ row }: any) => {
      const gateways = row.getValue("paymentGateways") as string[];
      return (
        <div className="text-gray-600">
          {gateways.length > 0 ? gateways.join(", ") : "-"}
        </div>
      );
    },
  },
  {
    accessorKey: "apiKey",
    header: "API Key",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cell: ({ row }: any) => {
      const apiKey = row.getValue("apiKey") as string;
      return <div className="font-mono text-sm text-gray-600">{apiKey}</div>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cell: ({ row }: any) => {
      const status = row.getValue("status") as string;
      const isActive = status === "Active";
      return (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
            isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              isActive ? "bg-green-600" : "bg-red-600"
            }`}
          />
          {status}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => (
      <div className="flex items-center gap-3">
        <Button className="text-[#859094] hover:text-[#363b3d] transition-colors">
          <Edit className="w-4 h-4" />
        </Button>
        <Button className="text-red-600 hover:text-red-700 transition-colors">
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    ),
  },
];
