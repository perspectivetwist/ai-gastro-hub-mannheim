"use client";

import { usePathname } from "next/navigation";

export default function AnnouncementBanner() {
  const pathname = usePathname();

  if (pathname === "/mannheim-ki-studie-2026") return null;

  return (
    <div
      className="relative w-full text-center"
      style={{
        zIndex: 2,
        background: "linear-gradient(90deg, rgba(245,158,11,0.12) 0%, rgba(245,158,11,0.04) 50%, rgba(245,158,11,0.12) 100%)",
        borderBottom: "1px solid rgba(245,158,11,0.25)",
      }}
    >
      <a
        href="/mannheim-ki-studie-2026"
        className="flex items-center justify-center gap-2.5 px-4 py-3 text-sm sm:text-base font-medium transition-opacity duration-200 hover:opacity-80"
        style={{ color: "#F59E0B" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
        <span>
          <span className="font-semibold">86% der Mannheimer Restaurants unsichtbar für KI.</span>{" "}
          Studie lesen
        </span>
        <span
          className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold tracking-wide"
          style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.3)" }}
        >
          Jetzt lesen &rarr;
        </span>
      </a>
    </div>
  );
}
