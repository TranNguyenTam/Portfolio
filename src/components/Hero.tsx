import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800/80 bg-slate-950 pt-14 pb-14 sm:pt-20 sm:pb-16">
      {/* Subtle background technical grid pattern */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          {/* Small role label */}
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-wider text-blue-400 uppercase mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            <span>Backend Developer</span>
          </div>

          {/* Large Name */}
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-100 sm:text-6xl">
            {profileData.name}
          </h1>

          {/* Short, powerful positioning statement */}
          <p className="mt-5 text-lg leading-relaxed text-slate-300 sm:text-xl font-normal">
            Backend developer with about one year of commercial experience building healthcare information systems in Python (FastAPI, Flask) and SQL Server, plus .NET and Node.js backends in academic projects.
          </p>

          {/* Compact engineering signal row (lightweight inline badges, not large boxed cards) */}
          <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-3 text-xs font-mono text-slate-300">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-950/40 border border-emerald-800/50 px-2.5 py-1 text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Commercial Production: Public Health
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="rounded-md bg-slate-900 border border-slate-800 px-2.5 py-1 text-slate-300">
              Python (FastAPI) / .NET / Node.js
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="rounded-md bg-slate-900 border border-slate-800 px-2.5 py-1 text-slate-300">
              SQL & Transactions
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="rounded-md bg-slate-900 border border-slate-800 px-2.5 py-1 text-slate-300">
              REST API Architecture
            </span>
          </div>

          {/* Primary Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <span>View Selected Work</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/90 px-4 py-2.5 text-xs font-medium text-slate-200 hover:border-slate-600 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="/Tran_Nguyen_Tam_Backend_Developer_CV.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs font-medium text-slate-300 hover:border-slate-700 hover:text-white transition-colors"
            >
              <svg className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>

          {/* Location & Contact Meta */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 border-t border-slate-800/80 pt-4">
            <span className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {profileData.location}
            </span>
            <span className="text-slate-600">•</span>
            <a href={`mailto:${profileData.email}`} className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <svg className="h-3.5 w-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {profileData.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
