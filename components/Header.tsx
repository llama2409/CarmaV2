"use client";
import { Bell, BookOpen, ClipboardCheck, ChevronDown, Sparkles, Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-full bg-[#e8195a] flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="font-bold text-lg tracking-tight text-gray-900">CARMA</span>
        </Link>

        {/* Nav link */}
        <nav className="hidden sm:flex items-center gap-1 ml-2">
          <span className="text-sm font-semibold text-[#e8195a] px-3 py-1.5 rounded-full bg-pink-50">
            Job Board
          </span>
        </nav>

        {/* Search bar */}
        <div className="flex-1 mx-4 hidden md:block">
          <div className="relative">
            <Sparkles className="absolute left-3 top-1/2 -translate-y-1/2 text-[#e8195a] w-4 h-4" />
            <input
              type="text"
              placeholder="Ask CARMA about your next opportunity..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-full outline-none focus:border-[#e8195a] focus:bg-white transition-colors"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-4 shrink-0">
          <span className="hidden lg:flex items-center gap-1.5 text-sm text-gray-600">
            <Search className="w-4 h-4" />
            <span className="font-medium">4,372 jobs available</span>
          </span>

          <button className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#e8195a] transition-colors">
            <BookOpen className="w-4 h-4" />
            Skills Zone
          </button>

          <button className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-[#e8195a] transition-colors">
            <ClipboardCheck className="w-4 h-4" />
            Check Status
          </button>

          <button className="relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#e8195a] rounded-full" />
          </button>

          <button className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-300 to-pink-400 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold">
                JD
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
}
