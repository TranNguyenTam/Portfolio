import React from "react";

export function Pbl6ArchitectureDiagram() {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-slate-800 bg-slate-950/80 p-6">
      <div className="min-w-[720px] text-xs font-mono">
        <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-between">
          <span>PBL6 Architecture & Data Flow — Domain-Oriented Modular Monolith</span>
          <span className="text-[10px] text-slate-500 font-normal sm:hidden">Swipe →</span>
        </div>

        {/* Top to bottom architecture stack */}
        <div className="space-y-4">
          {/* Layer 1: Client & External Entry */}
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-3 rounded border border-slate-700 bg-slate-900/90 p-3 text-center">
              <div className="font-semibold text-slate-200">Storefront / Client</div>
              <div className="text-[11px] text-slate-400 mt-1">Next.js / Mobile Browser</div>
            </div>
            <div className="col-span-1 flex items-center justify-center text-slate-500 font-bold">
              →
            </div>
            <div className="col-span-8 rounded border border-slate-700 bg-slate-900/90 p-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-slate-200">API Gateway / Express Routing Layer</span>
                  <span className="ml-2 text-[11px] text-blue-400">RESTful Endpoints</span>
                </div>
                <div className="text-[11px] text-slate-400">Rate Limiting • JWT Auth Middleware • RBAC</div>
              </div>
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center text-slate-500">
            <span>↓ Dispatch to Domain Modules ↓</span>
          </div>

          {/* Layer 2: Modular Monolith Domain Modules */}
          <div className="rounded border border-blue-900/60 bg-slate-900/60 p-4">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 mb-3">
              Modular Monolith — Encapsulated Domain Modules (Shared Application Host)
            </div>
            <div className="grid grid-cols-5 gap-2 text-center text-[11px]">
              <div className="rounded border border-slate-700 bg-slate-800/80 p-2.5">
                <div className="font-semibold text-slate-200">auth</div>
                <div className="text-[10px] text-slate-400 mt-1">OTP, JWT, Refresh</div>
              </div>
              <div className="rounded border border-slate-700 bg-slate-800/80 p-2.5">
                <div className="font-semibold text-slate-200">order-management</div>
                <div className="text-[10px] text-slate-400 mt-1">Orders, Checkout</div>
              </div>
              <div className="rounded border border-slate-700 bg-slate-800/80 p-2.5">
                <div className="font-semibold text-slate-200">inventory-mgmt</div>
                <div className="text-[10px] text-slate-400 mt-1">Branch Stock, TTL</div>
              </div>
              <div className="rounded border border-slate-700 bg-slate-800/80 p-2.5">
                <div className="font-semibold text-slate-200">product-mgmt</div>
                <div className="text-[10px] text-slate-400 mt-1">Catalog, Prices</div>
              </div>
              <div className="rounded border border-slate-700 bg-slate-800/80 p-2.5">
                <div className="font-semibold text-slate-200">payment</div>
                <div className="text-[10px] text-slate-400 mt-1">VNPay, MoMo Webhooks</div>
              </div>
            </div>
          </div>

          {/* Layer 3: Data Access & Persistence */}
          <div className="grid grid-cols-12 gap-3 items-center">
            <div className="col-span-5 rounded border border-slate-700 bg-slate-900/90 p-3 text-center">
              <div className="font-semibold text-slate-200">Prisma Client ORM</div>
              <div className="text-[11px] text-slate-400 mt-1">Shared Connection Pool • Type-safe Queries</div>
            </div>
            <div className="col-span-2 flex items-center justify-center text-slate-500 font-bold">
              → SQL Pool →
            </div>
            <div className="col-span-5 rounded border border-slate-700 bg-slate-900/90 p-3 text-center">
              <div className="font-semibold text-slate-200">PostgreSQL Database</div>
              <div className="text-[11px] text-slate-400 mt-1">Composite Indexes • ACID Transactions</div>
            </div>
          </div>

          {/* Separator / Flow Section */}
          <div className="my-3 border-t border-dashed border-slate-800 pt-3">
            <div className="mb-2 text-[11px] font-semibold text-amber-400 uppercase tracking-wide">
              Critical Transaction Flow: Atomic Checkout & 15-Minute Inventory Reservation
            </div>
            <div className="rounded border border-amber-950/60 bg-amber-950/20 p-3 text-slate-300">
              <div className="grid grid-cols-7 items-center gap-1 text-center text-[11px]">
                <div className="rounded bg-slate-900 p-2 border border-slate-800">
                  <div className="font-semibold text-slate-200">1. Checkout Request</div>
                  <div className="text-[10px] text-slate-400">Cart items & branch</div>
                </div>
                <div className="text-amber-400 font-bold">→</div>
                <div className="rounded bg-slate-900 p-2 border border-amber-900/50">
                  <div className="font-semibold text-amber-300">2. prisma.$transaction</div>
                  <div className="text-[10px] text-slate-400">Atomic execution boundary</div>
                </div>
                <div className="text-amber-400 font-bold">→</div>
                <div className="rounded bg-slate-900 p-2 border border-amber-900/50">
                  <div className="font-semibold text-amber-300">3. Stock Availability</div>
                  <div className="text-[10px] text-slate-400">Available = Qty - Reserved</div>
                </div>
                <div className="text-amber-400 font-bold">→</div>
                <div className="rounded bg-slate-900 p-2 border border-emerald-900/50">
                  <div className="font-semibold text-emerald-300">4. Reservation Created</div>
                  <div className="text-[10px] text-slate-400">15-min TTL reservation</div>
                </div>
              </div>
              <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800/80 pt-2">
                <span>Outcome A: Payment confirmed → Reservation converts to Permanent Stock Deduction</span>
                <span>Outcome B: TTL expires → Background worker releases reserved count</span>
              </div>
            </div>
          </div>

          {/* Technical Caption */}
          <div className="rounded border border-slate-800 bg-slate-900/60 p-3 text-[11px] text-slate-300">
            <span className="font-semibold text-amber-400">Where the engineering complexity lives:</span>{" "}
            Atomic PostgreSQL transaction (<code className="text-slate-100">prisma.$transaction</code>) holds an exclusive 15-minute stock lock, preventing inventory race conditions across concurrent customer checkouts.
          </div>
        </div>
      </div>
    </div>
  );
}

export function QmsArchitectureDiagram() {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-slate-800 bg-slate-950/80 p-6">
      <div className="min-w-[740px] text-xs font-mono">
        <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-between">
          <span>QMS Architecture & Data Flow — Clean Architecture & Concurrency</span>
          <span className="text-[10px] text-slate-500 font-normal sm:hidden">Swipe →</span>
        </div>

        <div className="space-y-4">
          {/* Layer 1: Client Devices */}
          <div className="grid grid-cols-12 gap-3 items-center">
            <div className="col-span-4 rounded border border-slate-700 bg-slate-900/90 p-3 text-center">
              <div className="font-semibold text-slate-200">Hardware Clients</div>
              <div className="text-[11px] text-slate-400 mt-1">Kiosks • Staff Counters • Room Displays</div>
            </div>
            <div className="col-span-1 flex items-center justify-center text-slate-500 font-bold">
              ⇄
            </div>
            <div className="col-span-7 rounded border border-blue-900/50 bg-slate-900/90 p-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-semibold text-slate-200">API Layer (ASP.NET Core / .NET 10)</span>
                  <span className="ml-2 text-[11px] text-blue-400">REST Endpoints + SignalR Hub</span>
                </div>
                <div className="text-[11px] text-slate-400">JWT Auth • Facility Scope Validation</div>
              </div>
            </div>
          </div>

          {/* Split into Clean Architecture Core & Realtime side */}
          <div className="grid grid-cols-12 gap-3">
            {/* Core & Services */}
            <div className="col-span-8 rounded border border-slate-800 bg-slate-900/60 p-3.5">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-300 mb-2">
                Clean Architecture Core Flow
              </div>
              <div className="space-y-2">
                <div className="rounded border border-slate-700 bg-slate-800/70 p-2.5">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-200">Services Layer (Application Business Logic)</span>
                    <span className="text-[10px] text-slate-400">Ticket Calling, Biometrics, Encryption</span>
                  </div>
                </div>
                <div className="flex justify-center text-slate-500 text-[10px]">↓ Invokes Interfaces ↓</div>
                <div className="rounded border border-slate-700 bg-slate-800/70 p-2.5">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-200">Infrastructure Layer (Dapper & SQL Access)</span>
                    <span className="text-[10px] text-blue-400">Lightweight Data Access</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    Direct execution of sp_K004_ProcessNextTicket with UPDLOCK / ROWLOCK hints
                  </div>
                </div>
              </div>
            </div>

            {/* Realtime & Device Registry */}
            <div className="col-span-4 rounded border border-blue-900/40 bg-slate-900/60 p-3.5">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-blue-400 mb-2">
                Realtime Event Channel
              </div>
              <div className="space-y-2 text-[11px]">
                <div className="rounded border border-slate-700 bg-slate-800/80 p-2">
                  <div className="font-semibold text-slate-200">SignalR Hub</div>
                  <div className="text-[10px] text-slate-400 mt-1">WebSocket persistent pipe</div>
                </div>
                <div className="text-center text-slate-500 text-[10px]">↓ Maps Connections ↓</div>
                <div className="rounded border border-slate-700 bg-slate-800/80 p-2">
                  <div className="font-semibold text-cyan-300">Active Device Registry</div>
                  <div className="text-[10px] text-slate-400 mt-1">Thread-safe in-memory map of device IDs</div>
                </div>
              </div>
            </div>
          </div>

          {/* Database Layer */}
          <div className="rounded border border-slate-700 bg-slate-900/90 p-3 text-center">
            <div className="font-semibold text-slate-200">SQL Server Database</div>
            <div className="text-[11px] text-slate-400 mt-1">
              Atomic Stored Procedures • Transaction Boundaries • Ticket State Transitions
            </div>
          </div>

          {/* Biometric Security & Caching Subsystem */}
          <div className="border-t border-dashed border-slate-800 pt-3">
            <div className="mb-2 text-[11px] font-semibold text-cyan-400 uppercase tracking-wide">
              Biometric Vector Security & In-Memory Cache Flow
            </div>
            <div className="grid grid-cols-7 items-center gap-1 text-center text-[11px]">
              <div className="rounded bg-slate-900 p-2 border border-slate-800">
                <div className="font-semibold text-slate-200">1. Vector Input</div>
                <div className="text-[10px] text-slate-400">512D Float embedding</div>
              </div>
              <div className="text-cyan-400 font-bold">→</div>
              <div className="rounded bg-slate-900 p-2 border border-cyan-900/50">
                <div className="font-semibold text-cyan-300">2. AES-256-GCM</div>
                <div className="text-[10px] text-slate-400">Unique IV + Auth Tag</div>
              </div>
              <div className="text-cyan-400 font-bold">→</div>
              <div className="rounded bg-slate-900 p-2 border border-slate-800">
                <div className="font-semibold text-slate-200">3. Encrypted Storage</div>
                <div className="text-[10px] text-slate-400">SQL Server column</div>
              </div>
              <div className="text-cyan-400 font-bold">→</div>
              <div className="rounded bg-slate-900 p-2 border border-emerald-900/50">
                <div className="font-semibold text-emerald-300">4. Thread-Safe Cache</div>
                <div className="text-[10px] text-slate-400">Atomic swap & versioning</div>
              </div>
            </div>
            <div className="mt-2 text-[11px] text-slate-400 text-center">
              Reduced repeated database/decryption work during face-vector lookup by using a thread-safe in-memory cache.
            </div>
          </div>

          {/* Technical Caption */}
          <div className="rounded border border-slate-800 bg-slate-900/60 p-3 text-[11px] text-slate-300">
            <span className="font-semibold text-cyan-400">Where the engineering complexity lives:</span>{" "}
            Stored procedure row locks (<code className="text-slate-100">UPDLOCK, ROWLOCK, READPAST</code>) serialize simultaneous patient calling across doctor counters, while atomic pointer swapping eliminates redundant facial decryption work.
          </div>
        </div>
      </div>
    </div>
  );
}
