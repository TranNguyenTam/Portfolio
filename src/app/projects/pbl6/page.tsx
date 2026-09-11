import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { Pbl6ArchitectureDiagram } from "@/components/ArchitectureDiagram";

export const metadata: Metadata = {
  title: "PBL6 Pharmacy System — Backend Case Study | Trần Nguyên Tâm",
  description:
    "Technical case study of PBL6 Pharmacy System: Domain-oriented Modular Monolith, PostgreSQL transactions, 15-minute inventory reservation, and OTP authentication.",
};

export default function Pbl6CaseStudyPage() {
  const project = projectsData.find((p) => p.id === "pbl6")!;
  const cs = project.caseStudy!;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500 selection:text-white">
      {/* Sticky Top Bar / Breadcrumbs */}
      <div className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono">
            <Link
              href="/#projects"
              className="text-slate-400 hover:text-slate-100 flex items-center gap-1 transition-colors"
            >
              ← Back to Overview
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-blue-400 font-semibold">PBL6 Case Study</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/PBL6-Pharmacy-System/Back-End-Web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-700 transition-colors"
            >
              <svg className="h-3.5 w-3.5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              GitHub Repository
            </a>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Title Header */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/40 px-3 py-1 text-xs font-mono font-medium text-blue-300">
            <span>Engineering Technical Write-up</span>
            <span>•</span>
            <span>Architecture & Concurrency Breakdown</span>
          </div>

          <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-slate-100">
            PBL6 — Pharmacy Management & E-commerce System
          </h1>
          <p className="mt-3 text-lg text-slate-300">
            Backend RESTful API for multi-branch retail pharmacy and online ordering
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-y border-slate-800 py-4 text-xs font-mono">
            <div>
              <span className="text-slate-500 uppercase tracking-wider block">Role</span>
              <span className="font-semibold text-slate-200 mt-1 block">{project.role}</span>
            </div>
            <div>
              <span className="text-slate-500 uppercase tracking-wider block">Architecture</span>
              <span className="font-semibold text-blue-400 mt-1 block">{project.architecture}</span>
            </div>
            <div>
              <span className="text-slate-500 uppercase tracking-wider block">Database & ORM</span>
              <span className="font-semibold text-slate-200 mt-1 block">PostgreSQL • Prisma ORM</span>
            </div>
            <div>
              <span className="text-slate-500 uppercase tracking-wider block">Host & CI/CD</span>
              <span className="font-semibold text-slate-200 mt-1 block">Azure App Service • GitHub Actions</span>
            </div>
          </div>
        </div>

        {/* System Overview */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            01. System Context & Overview
          </div>
          <h2 className="text-2xl font-bold text-slate-100">Domain & Requirements</h2>
          <p className="text-slate-300 leading-relaxed">
            {cs.overview}
          </p>

          <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 font-mono">
              My Specific Ownership & Contributions
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              {cs.myRoleDetailed}
            </p>
          </div>
        </section>

        {/* System Architecture & Visual Diagram */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            02. Architecture & Data Flow
          </div>
          <h2 className="text-2xl font-bold text-slate-100">Domain-oriented Modular Monolith</h2>
          <p className="text-slate-300 leading-relaxed">
            {cs.architectureOverview}
          </p>

          {/* Interactive / Clean Diagram */}
          <Pbl6ArchitectureDiagram />
        </section>

        {/* Technical Decisions (Problem -> Options -> Decision -> Reason -> Trade-off) */}
        <section className="space-y-8">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            03. Technical Trade-Offs & Decisions
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-100">Engineering Decisions in Context</h2>
            <p className="mt-1 text-sm text-slate-400">
              Structured analysis of real business problems, constraints, evaluated options, chosen implementation, and explicit trade-offs.
            </p>
          </div>

          <div className="space-y-8">
            {cs.technicalDecisions.map((td, idx) => (
              <div
                key={td.topic}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 space-y-6"
              >
                {/* Decision Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider">
                      ADR 0{idx + 1}
                    </span>
                    <span className="text-slate-600 font-mono">•</span>
                    <h3 className="text-lg font-bold text-slate-100">{td.topic}</h3>
                  </div>
                  <span className="font-mono text-[11px] text-slate-500 uppercase tracking-wider">
                    Architectural Decision
                  </span>
                </div>

                {/* Problem Statement */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                    Problem & System Constraints
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {td.problem}
                  </p>
                </div>

                {/* Options Evaluated */}
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Options Evaluated
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300 font-mono">
                    {td.optionsConsidered.map((opt, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2.5">
                        <span className="text-blue-400 mt-0.5">▪</span>
                        <span>{opt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Core ADR Block: Decision / Why / Trade-Off */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  {/* Decision */}
                  <div className="rounded-xl border border-emerald-900/50 bg-emerald-950/20 p-4 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-400">
                        Decision Made
                      </div>
                      <p className="mt-2 text-xs text-slate-200 leading-relaxed font-medium">
                        {td.decision}
                      </p>
                    </div>
                  </div>

                  {/* Why */}
                  <div className="rounded-xl border border-blue-900/50 bg-blue-950/20 p-4 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-400">
                        Engineering Rationale (Why)
                      </div>
                      <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                        {td.reason}
                      </p>
                    </div>
                  </div>

                  {/* Trade-off */}
                  <div className="rounded-xl border border-amber-900/50 bg-amber-950/20 p-4 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-amber-400">
                        Trade-Off & Maintenance
                      </div>
                      <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                        {td.tradeOff}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Current Limitations & Future Evolution */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            04. Engineering Limitations & System Evolution
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-100">
              Current Design → Constraint → Future Evolution
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Transparent assessment of architectural boundaries in the current implementation and how the system would evolve at higher scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cs.limitations.map((lim, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Current Design
                    </span>
                    <span className="text-sm font-semibold text-slate-200 mt-1 block">
                      {lim.currentDesign}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block">
                      Constraint
                    </span>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {lim.constraint}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 block">
                    Future Evolution
                  </span>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {lim.futureEvolution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Actions */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="text-xs font-mono text-slate-400 hover:text-slate-200 flex items-center gap-1 transition-colors"
          >
            ← Back to Overview
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/projects/qms"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-medium text-slate-200 hover:bg-slate-700 transition-colors"
            >
              Next Case Study: QMS Hospital System →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
