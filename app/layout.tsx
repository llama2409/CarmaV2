import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "CARMA – Find work that fits your life",
  description: "Discover verified care opportunities matched to your skills, goals and availability.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
