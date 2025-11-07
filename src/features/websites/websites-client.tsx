"use client";

import { useState, useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "./data-table";
import { Website } from "./columns";
import { AddWebsiteDialog } from "./components/AddWebsiteDialog";
import type { WebsiteFormData } from "./types";

import SearchAndActionButton from "@/components/common/SearchBarWithAction";

interface WebsitesClientProps {
  data: Website[];
  columns: ColumnDef<Website>[];
}

export function WebsitesClient({ data, columns }: WebsitesClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (data: WebsiteFormData) => {
    console.log("Form submitted:", data);
    // Handle form submission - you can add API call here
    setIsDialogOpen(false);
  };

  // Filter data based on search term
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return data;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();

    return data.filter((website) => {
      return (
        website.name.toLowerCase().includes(lowerSearchTerm) ||
        website.domain.toLowerCase().includes(lowerSearchTerm) ||
        website.apiKey.toLowerCase().includes(lowerSearchTerm) ||
        website.paymentGateways.some((gateway) =>
          gateway.toLowerCase().includes(lowerSearchTerm)
        )
      );
    });
  }, [searchTerm, data]);

  return (
    <>
      <SearchAndActionButton
        inputValue={searchTerm}
        placeholder="Search websites..."
        buttonText="Add Website"
        onChange={(e) => setSearchTerm(e.target.value)}
        onButtonClick={() => setIsDialogOpen(true)}
      />

      {/* Data Table */}
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="inline-block min-w-full align-middle">
          <DataTable columns={columns} data={filteredData} />
        </div>
      </div>

      {/* Add Website Dialog */}
      <AddWebsiteDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={handleSubmit}
      />
    </>
  );
}
