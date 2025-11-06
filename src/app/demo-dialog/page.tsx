"use client";

import { useState } from "react";
import { AddWebsiteDialog } from "@/features/websites/components/AddWebsiteDialog";
import { Button } from "@/components/ui/button";
import type { WebsiteFormData } from "@/features/websites/types";

export default function DemoDialogPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (data: WebsiteFormData) => {
    console.log("Form submitted:", data);
    // Handle form submission
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="flex flex-col gap-4">
        <h1 className="heading-lg">Add Website Dialog Demo</h1>
        <Button onClick={() => setIsDialogOpen(true)}>
          Add Website
        </Button>
        
        <AddWebsiteDialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}