import { Sparkles, MapPin, Globe, Moon, User, Calendar, Clock } from "lucide-react";
import FilterBar from "@/components/FilterBar";
import JobCard from "@/components/JobCard";
import TrustBar from "@/components/TrustBar";
import { jobs } from "@/lib/data";

const suggestions = [
  { icon: MapPin, label: "Care assistant jobs near me" },
  { icon: Globe, label: "Sponsorship opportunities" },
  { icon: Moon, label: "Night shifts" },
  { icon: User, label: "Senior care positions" },
  { icon: Calendar, label: "Weekend work" },
  { icon: Clock, label: "Flexible hours" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-pink-50/40 to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Find work that
              <br />
              fits your{" "}
              <span className="text-[#e8195a]">life.</span>
            </h1>
            <p className="mt-4 text-gray-500 text-base max-w-sm">
              Discover verified care opportunities matched to your skills, goals and availability.
            </p>
          </div>

          {/* Right – AI search */}
          <div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-1 flex items-center gap-2">
              <Sparkles className="ml-3 w-5 h-5 text-[#e8195a] shrink-0" />
              <input
                type="text"
                placeholder="What kind of role are you looking for?"
                className="flex-1 py-3 px-2 text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400"
              />
              <button className="w-10 h-10 rounded-full bg-[#e8195a] flex items-center justify-center shrink-0 hover:bg-[#c4144a] transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-3 mb-3">Try asking...</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-2 bg-white border border-gray-200 rounded-full text-xs text-gray-600 hover:border-[#e8195a] hover:text-[#e8195a] transition-colors shadow-sm"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FilterBar />

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-[#e8195a]" />
          <span className="font-bold text-gray-900">{jobs.length} jobs found</span>
        </div>
        <p className="text-xs text-gray-400 -mt-3 mb-5 flex items-center gap-1">
          Ranked by best match{" "}
          <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 text-gray-500 text-[10px]">
            ℹ
          </span>
        </p>

        <div className="flex flex-col gap-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      <TrustBar />
    </>
  );
}
