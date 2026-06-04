"use client";
import { SlidersHorizontal, ChevronDown, LayoutList, LayoutGrid } from "lucide-react";
import { useState } from "react";

const filters = ["Location", "Shift type", "Hours", "Sponsorship", "Distance", "Pay"];

export default function FilterBar() {
  const [view, setView] = useState<"list" | "grid">("list");

  return (
    <div className="bg-white border-b border-gray-100 sticky top-14 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-2 overflow-x-auto scrollbar-hide">
        <button className="flex items-center gap-1.5 shrink-0 px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[#e8195a] hover:text-[#e8195a] transition-colors">
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </button>

        {filters.map((f) => (
          <button
            key={f}
            className="flex items-center gap-1 shrink-0 px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[#e8195a] hover:text-[#e8195a] transition-colors whitespace-nowrap"
          >
            {f}
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        ))}

        <div className="ml-auto flex items-center gap-2 shrink-0 pl-4">
          <button className="flex items-center gap-1.5 px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[#e8195a] hover:text-[#e8195a] transition-colors whitespace-nowrap">
            Sort by: Best match
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setView(view === "list" ? "grid" : "list")}
            className="p-2 border border-gray-200 rounded-full hover:border-[#e8195a] hover:text-[#e8195a] transition-colors"
          >
            {view === "list" ? <LayoutList className="w-4 h-4" /> : <LayoutGrid className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
