import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-20 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-400">
            04 // Technical Competencies
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Backend Engineering Depth
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Prioritizing concurrency, transaction boundaries, and data integrity over a generic technology catalog.
          </p>
        </div>

        {/* Primary Row: Core Backend, Data & Persistence, Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12 border-b border-slate-800/80">
          {/* 1. Core Backend */}
          <div className="space-y-4">
            <div className="border-b border-slate-800 pb-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-400">
                01. Core Backend Concepts
              </span>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                <div>
                  <span className="font-semibold text-slate-100">Transactions</span>
                  <p className="text-xs text-slate-400 mt-0.5">ACID boundaries, rollback safety, temporary stock reservation</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                <div>
                  <span className="font-semibold text-slate-100">Concurrency Control</span>
                  <p className="text-xs text-slate-400 mt-0.5">Row-level locking (UPDLOCK, ROWLOCK), race-condition mitigation</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                <div>
                  <span className="font-semibold text-slate-100">REST API Design</span>
                  <p className="text-xs text-slate-400 mt-0.5">Stateless resource routing, idempotent webhooks, status semantics</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                <div>
                  <span className="font-semibold text-slate-100">Auth & RBAC</span>
                  <p className="text-xs text-slate-400 mt-0.5">Passwordless OTP, JWT access/refresh, resource-ownership checks</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400" />
                <div>
                  <span className="font-semibold text-slate-100">Validation & Error Handling</span>
                  <p className="text-xs text-slate-400 mt-0.5">Defensive input schemas, structured logging, safe failure recovery</p>
                </div>
              </li>
            </ul>
          </div>

          {/* 2. Data & Persistence */}
          <div className="space-y-4">
            <div className="border-b border-slate-800 pb-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
                02. Data & Persistence
              </span>
            </div>
            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Relational & Document Databases
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm font-semibold text-slate-100">SQL Server</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-sm font-semibold text-slate-100">PostgreSQL</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-sm font-semibold text-slate-100">MongoDB</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                  Data Access & Query Strategy
                </span>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">▪</span>
                    <span><strong className="text-slate-100">Dapper:</strong> Micro-ORM access in latency-sensitive queue operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">▪</span>
                    <span><strong className="text-slate-100">Prisma ORM:</strong> Relational queries, migrations, connection pooling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">▪</span>
                    <span><strong className="text-slate-100">SQL Stored Procedures:</strong> Atomic calling workflows directly in SQL engine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">▪</span>
                    <span><strong className="text-slate-100">Composite Indexing:</strong> Optimizing multi-column catalog filters & eliminating N+1 queries</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Architecture */}
          <div className="space-y-4">
            <div className="border-b border-slate-800 pb-2">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-400">
                03. System Architecture
              </span>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                <div>
                  <span className="font-semibold text-slate-100">Clean Architecture</span>
                  <p className="text-xs text-slate-400 mt-0.5">Strict dependency inversion across API, Core, Services, and Infrastructure (.NET 10)</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                <div>
                  <span className="font-semibold text-slate-100">Domain-oriented Modular Monolith</span>
                  <p className="text-xs text-slate-400 mt-0.5">Domain-isolated modules sharing a central database pool to avoid distributed latency (Express / Prisma)</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                <div>
                  <span className="font-semibold text-slate-100">Layered Architecture</span>
                  <p className="text-xs text-slate-400 mt-0.5">Controller-service-repository patterns with clear responsibilities</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Secondary Row: Languages, Frameworks & Tooling */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-3">
              Languages & Runtimes
            </span>
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-200">
              <span className="rounded bg-slate-900 border border-slate-800 px-3 py-1.5">
                Python (FastAPI, Flask)
              </span>
              <span className="rounded bg-slate-900 border border-slate-800 px-3 py-1.5">
                C# (.NET 10 / ASP.NET Core)
              </span>
              <span className="rounded bg-slate-900 border border-slate-800 px-3 py-1.5">
                TypeScript / JavaScript (Node.js)
              </span>
              <span className="rounded bg-slate-900 border border-slate-800 px-3 py-1.5">
                SQL (T-SQL, PL/pgSQL)
              </span>
            </div>
          </div>

          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-3">
              Tooling, CI/CD & Cloud
            </span>
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-slate-200">
              <span className="rounded bg-slate-900 border border-slate-800 px-3 py-1.5">
                Git & GitHub
              </span>
              <span className="rounded bg-slate-900 border border-slate-800 px-3 py-1.5">
                Docker & Docker Compose
              </span>
              <span className="rounded bg-slate-900 border border-slate-800 px-3 py-1.5">
                GitHub Actions (CI/CD)
              </span>
              <span className="rounded bg-slate-900 border border-slate-800 px-3 py-1.5">
                pytest / Playwright
              </span>
              <span className="rounded bg-slate-900 border border-slate-800 px-3 py-1.5">
                AI-assisted development (Claude Code, Codex)
              </span>
              <span className="rounded bg-slate-900 border border-slate-800 px-3 py-1.5">
                Azure App Service
              </span>
              <span className="rounded bg-slate-900 border border-slate-800 px-3 py-1.5">
                Postman / REST Client
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
