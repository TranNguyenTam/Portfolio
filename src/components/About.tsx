import React from "react";
import { profileData } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-slate-800/80 bg-slate-950 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-400">
            01 // Engineering Approach
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            How I Approach Backend Engineering
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            I approach backend development as systems engineering rather than basic CRUD routing. Having maintained live public health systems in a commercial team, my focus centers on transactional correctness, concurrency control, and defensive fault isolation.
          </p>
        </div>

        {/* 3 Core Principles — Editorial Layout with Typography & Dividers, NOT repetitive cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
          {/* Principle 01: Business Logic */}
          <div className="pt-8 md:pt-0 md:pr-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-3xl font-bold text-slate-600">
                01
              </div>
              <h3 className="mt-3 text-xl font-bold text-slate-100">
                Business Logic & Domain Boundaries
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Translating clinical workflows and retail pharmacy operations into deterministic, verifiable backend services. Structuring domain rules with explicit boundary checks, role-based authorization (RBAC), and strict input validation before state transitions occur.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 font-mono text-xs text-slate-400">
              Focus: Domain boundaries • RBAC • Input sanitization
            </div>
          </div>

          {/* Principle 02: Data Integrity & Transactions */}
          <div className="pt-8 md:pt-0 md:px-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-3xl font-bold text-slate-600">
                02
              </div>
              <h3 className="mt-3 text-xl font-bold text-slate-100">
                Data Integrity & Transactions
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Designing normalized relational schemas and enforcing ACID consistency across multi-step mutations. Guarding against concurrent overselling with database-level inventory reservations, isolating state transitions via row locks (<code className="text-slate-200">UPDLOCK, ROWLOCK</code>), and eliminating N+1 query amplification.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 font-mono text-xs text-slate-400">
              Focus: ACID transactions • Row locking • Index optimization
            </div>
          </div>

          {/* Principle 03: Production Debugging */}
          <div className="pt-8 md:pt-0 md:pl-8 flex flex-col justify-between">
            <div>
              <div className="font-mono text-3xl font-bold text-slate-600">
                03
              </div>
              <h3 className="mt-3 text-xl font-bold text-slate-100">
                Production Debugging & Reliability
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Investigating live production issues across backend APIs, data pipelines, and database operations. Tracing runtime exceptions with structured logging, isolating edge cases under real traffic, and ensuring safe rollback states under partial failure.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800/60 font-mono text-xs text-slate-400">
              Focus: Root-cause diagnosis • Incident resolution • Idempotency
            </div>
          </div>
        </div>

        {/* Academic Foundation Meta */}
        <div className="mt-16 flex flex-col sm:flex-row sm:items-center justify-between border-t border-slate-800/80 pt-6 text-xs font-mono text-slate-400 gap-2">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="text-slate-200 font-medium">{profileData.education.institution}</span>
            <span className="text-slate-600">•</span>
            <span>{profileData.education.degree}</span>
          </div>
          <div>
            <span>{profileData.education.period} • {profileData.additional.language}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
