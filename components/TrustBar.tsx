import { ShieldCheck, Globe, Lock, Sparkles } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Verified employers",
    sub: "All employers are background checked",
  },
  {
    icon: Globe,
    title: "Sponsorship available",
    sub: "Find roles that support your visa",
  },
  {
    icon: Lock,
    title: "Secure applications",
    sub: "Your data is always protected",
  },
  {
    icon: Sparkles,
    title: "AI matched roles",
    sub: "More relevant. Less searching.",
  },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, sub }) => (
          <div key={title} className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-900">{title}</p>
              <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
