import React from "react";
import { experienceData } from "@/data/experience";

export default function Experience() {
  const exp = experienceData[0]; // KCL Group commercial experience

  return (
    <section id="experience" className="scroll-mt-16 border-b border-slate-800/80 bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="font-mono text-xs font-semibold uppercase tracking-widest text-emerald-400">
            02 // Commercial Experience
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Production Software Engineering
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Primary developer of an ISO/IEC 17025 testing-laboratory workflow and land-border health quarantine, and a main contributor to hospital patient-queue coordination.
          </p>
        </div>

        {/* Featured Commercial Timeline Block */}
        <div className="mt-12 relative border-l-2 border-emerald-500/40 pl-6 sm:pl-8 ml-2 sm:ml-4">
          {/* Timeline node icon */}
          <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-emerald-400 bg-slate-950" />

          {/* Header Block */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-bold text-slate-100 sm:text-3xl">
                  {exp.company}
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-800/70 bg-emerald-950/50 px-3 py-0.5 text-xs font-mono font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Commercial Production
                </span>
              </div>
              <p className="mt-1 font-mono text-sm font-semibold text-blue-400">
                {exp.role}
              </p>
            </div>

            <div className="font-mono text-xs text-slate-400 sm:text-right">
              <span className="text-slate-200 font-medium">{exp.period}</span>
              <span className="mx-1.5">•</span>
              <span>{exp.location}</span>
            </div>
          </div>

          {/* Domain Description */}
          <div className="mt-4 rounded-lg border border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-300">
            <span className="font-mono text-slate-400 font-semibold uppercase tracking-wider block mb-1">Domain & Context</span>
            <p className="text-sm leading-relaxed text-slate-300">
              {exp.context}. Client names, source code and screenshots are omitted because the systems are proprietary.
            </p>
          </div>

          {/* Key Contributions with Visual Emphasis */}
          <div className="mt-6 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">
              What I built:
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300 leading-relaxed">
              {exp.bulletPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compact Stack Tags */}
          <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/80">
            <span className="font-mono text-xs text-slate-400 mr-2">Production Stack:</span>
            {exp.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-800 bg-slate-900/90 px-2.5 py-0.5 font-mono text-xs text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
