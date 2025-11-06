"use client";

import Link from "next/link";
import { BookOpen, HelpCircle } from "lucide-react";
import ToggleSidebar from "../common/ToggleSidebar";

export default function Header() {
  return (
    <header className="h-16 flex items-center bg-background border-b border-l border-[rgba(19,24,26,0.08)] sticky top-0 z-10">
      <div className="pl-4 md:hidden">
        <ToggleSidebar />
      </div>
      <div className="max-w-6xl flex-1 mx-auto h-full flex items-center justify-end gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="/docs"
            className="flex items-center gap-2 p-2 rounded-[10px] text-[14px] font-medium leading-5 transition-colors hover:bg-(--neutral-10) text-(--neutral-100)"
          >
            <BookOpen size={20} strokeWidth={1.39} />
            <span>Docs</span>
          </Link>
          <Link
            href="/support"
            className="flex items-center gap-2 p-2 rounded-[10px] text-[14px] font-medium leading-5 transition-colors hover:bg-(--neutral-10) text-(--neutral-100)"
          >
            <HelpCircle size={20} strokeWidth={1.39} />
            <span>Support</span>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#667eea] to-[#764ba2]" />
        </div>
      </div>
    </header>
  );
}
