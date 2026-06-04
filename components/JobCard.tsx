import Link from "next/link";
import { MapPin, Clock, Pound, CheckCircle, Bookmark } from "lucide-react";
import { Job, formatPosted } from "@/lib/data";

type Props = { job: Job };

export default function JobCard({ job }: Props) {
  const matchColor =
    job.matchPercent >= 88
      ? "text-[#e8195a]"
      : job.matchPercent >= 75
      ? "text-orange-500"
      : "text-yellow-600";

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow flex gap-4 items-start">
      {/* Logo */}
      <div className="shrink-0 flex flex-col items-center gap-1">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl"
          style={{ backgroundColor: job.companyColor + "22", color: job.companyColor }}
        >
          {job.companyInitial}
        </div>
        <span className="text-[10px] text-gray-400 text-center leading-tight max-w-[56px]">
          {job.company}
        </span>
      </div>

      {/* Middle */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2 flex-wrap">
          <Link
            href={`/jobs/${job.id}`}
            className="font-bold text-gray-900 text-base hover:text-[#e8195a] transition-colors"
          >
            {job.title}
          </Link>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-pink-50 ${matchColor}`}>
            {job.matchPercent}% Match
          </span>
        </div>

        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-sm font-medium text-gray-700">{job.company}</span>
          {job.verified && <CheckCircle className="w-3.5 h-3.5 text-[#e8195a] fill-[#e8195a]" />}
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
          <MapPin className="w-3.5 h-3.5" />
          {job.location}, {job.county}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-2">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="hidden md:flex flex-col gap-1.5 text-sm text-gray-600 shrink-0 w-44">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-gray-400" />
          {job.hoursMin === job.hoursMax
            ? `${job.hoursMin} hrs per week`
            : `${job.hoursMin}–${job.hoursMax} hrs per week`}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-gray-400 font-bold text-base leading-none">£</span>
          £{job.payMin.toFixed(2)} – £{job.payMax.toFixed(2)} / hr
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-gray-400 text-xs">📅</span>
          {formatPosted(job.postedDaysAgo)}
        </div>
      </div>

      {/* CTA */}
      <div className="hidden lg:flex flex-col items-end gap-2 shrink-0">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Bookmark className="w-4 h-4 text-gray-400" />
        </button>
        <Link
          href={`/jobs/${job.id}`}
          className="flex items-center gap-1.5 bg-[#e8195a] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#c4144a] transition-colors whitespace-nowrap"
        >
          View Role →
        </Link>
        <div className="flex items-center gap-1 text-xs text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
          <CheckCircle className="w-3 h-3 text-green-600" />
          <span className="font-medium">Strong match</span>
        </div>
      </div>
    </div>
  );
}
