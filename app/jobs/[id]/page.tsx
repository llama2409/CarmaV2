import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Clock,
  CheckCircle,
  ArrowLeft,
  Bookmark,
  Share2,
  Globe,
  Star,
  Video,
  Phone,
  ChevronRight,
} from "lucide-react";
import { getJobById, jobs, formatPosted } from "@/lib/data";

export function generateStaticParams() {
  return jobs.map((j) => ({ id: j.id }));
}

export default async function JobPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const job = getJobById(id);
  if (!job) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#e8195a] mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to jobs
      </Link>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main */}
        <div className="lg:col-span-2 space-y-4">
          {/* Title card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <div className="flex items-start gap-4">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold shrink-0"
                style={{ backgroundColor: job.companyColor + "22", color: job.companyColor }}
              >
                {job.companyInitial}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <h1 className="text-2xl font-extrabold text-gray-900">{job.title}</h1>
                  <div className="flex gap-2 shrink-0">
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <Bookmark className="w-5 h-5 text-gray-400" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                      <Share2 className="w-5 h-5 text-gray-400" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="font-semibold text-gray-700">{job.company}</span>
                  {job.verified && <CheckCircle className="w-4 h-4 text-[#e8195a] fill-[#e8195a]" />}
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {job.location}, {job.county}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
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
            </div>

            {/* Key stats row */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-5 border-t border-gray-100">
              <div>
                <p className="text-xs text-gray-400 mb-1">Hours</p>
                <p className="text-sm font-semibold text-gray-800">
                  {job.hoursMin === job.hoursMax
                    ? `${job.hoursMin} hrs/wk`
                    : `${job.hoursMin}–${job.hoursMax} hrs/wk`}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Pay rate</p>
                <p className="text-sm font-semibold text-gray-800">
                  £{job.payMin.toFixed(2)} – £{job.payMax.toFixed(2)}/hr
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Posted</p>
                <p className="text-sm font-semibold text-gray-800">{formatPosted(job.postedDaysAgo)}</p>
              </div>
            </div>
          </div>

          {/* Match badge */}
          <div className="bg-pink-50 border border-pink-100 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#e8195a] flex items-center justify-center text-white font-bold text-sm">
                {job.matchPercent}%
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Strong match for you</p>
                <p className="text-xs text-gray-500">Based on your experience and preferences</p>
              </div>
            </div>
            <Star className="w-5 h-5 text-[#e8195a]" />
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="font-bold text-gray-900 text-lg mb-3">About the role</h2>
            <p className="text-sm text-gray-600 leading-relaxed">{job.description}</p>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="font-bold text-gray-900 text-lg mb-3">What we&apos;re looking for</h2>
            <ul className="space-y-2">
              {job.requirements.map((r) => (
                <li key={r} className="flex items-start gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e8195a] mt-0.5 shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="font-bold text-gray-900 text-lg mb-3">What you&apos;ll get</h2>
            <div className="grid sm:grid-cols-2 gap-2">
              {job.benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Interview Instantly CTA */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-28">
            <div className="text-center mb-5">
              <div className="w-12 h-12 rounded-full bg-[#e8195a] flex items-center justify-center mx-auto mb-3">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-extrabold text-gray-900 text-xl">Interview Instantly</h3>
              <p className="text-sm text-gray-500 mt-1">
                Skip the wait — connect with {job.company} right now via video or phone.
              </p>
            </div>

            <button className="w-full flex items-center justify-center gap-2 bg-[#e8195a] text-white font-bold py-3.5 rounded-full hover:bg-[#c4144a] transition-colors text-sm shadow-md shadow-pink-200">
              <Video className="w-4 h-4" />
              Start Video Interview
            </button>

            <button className="w-full flex items-center justify-center gap-2 border-2 border-[#e8195a] text-[#e8195a] font-bold py-3.5 rounded-full hover:bg-pink-50 transition-colors text-sm mt-3">
              <Phone className="w-4 h-4" />
              Request a Call Back
            </button>

            <div className="mt-4 flex items-center gap-2 bg-green-50 rounded-xl p-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
              <p className="text-xs text-green-700 font-medium">
                Employer is actively hiring — avg. response in 2 hrs
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                No CV required to get started
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                Your data is secure and private
              </div>
              {job.sponsorship && (
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-blue-500" />
                  Visa sponsorship available
                </div>
              )}
            </div>
          </div>

          {/* About company */}
          <div className="bg-white rounded-2xl border border-gray-100 p-5">
            <h3 className="font-bold text-gray-900 mb-3">About {job.company}</h3>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-bold"
                style={{ backgroundColor: job.companyColor + "22", color: job.companyColor }}
              >
                {job.companyInitial}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 flex items-center gap-1">
                  {job.company}
                  {job.verified && <CheckCircle className="w-3.5 h-3.5 text-[#e8195a] fill-[#e8195a]" />}
                </p>
                <p className="text-xs text-gray-500">
                  {job.verified ? "Verified employer" : "Employer"} · {job.county}
                </p>
              </div>
            </div>
            <Link
              href="/"
              className="mt-4 block text-center text-xs text-[#e8195a] font-semibold hover:underline"
            >
              View all jobs from this employer →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
