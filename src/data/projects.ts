export interface TechnicalDecision {
  topic: string;
  problem: string;
  optionsConsidered: string[];
  decision: string;
  reason: string;
  tradeOff: string;
}

export interface LimitationItem {
  currentDesign: string;
  constraint: string;
  futureEvolution: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  techStack: string[];
  architecture: string;
  githubUrl?: string;
  hasCaseStudy: boolean;
  caseStudySlug?: string;
  shortDescription: string;
  cvBulletPoints: string[];
  keyDecisions?: {
    number: string;
    title: string;
    summary: string;
  }[];
  caseStudy?: {
    overview: string;
    myRoleDetailed: string;
    architectureOverview: string;
    technicalDecisions: TechnicalDecision[];
    limitations: LimitationItem[];
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "pbl6",
    title: "PBL6 — Pharmacy Management & E-commerce System",
    subtitle: "Backend RESTful API for multi-branch retail pharmacy and online ordering",
    role: "Primary Backend Contributor (about two-thirds of commits)",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Azure App Service", "GitHub Actions"],
    architecture: "Domain-oriented Modular Monolith",
    githubUrl: "https://github.com/PBL6-Pharmacy-System/Back-End-Web",
    hasCaseStudy: true,
    caseStudySlug: "pbl6",
    shortDescription:
      "Engineered the backend API for a pharmacy retail chain with multi-branch inventory tracking, atomic checkout with temporary stock reservation, passwordless customer OTP authentication, and automated Azure CI/CD.",
    cvBulletPoints: [
      "Implemented a modular-monolith backend with cleanly separated routes, controllers, services, and middleware layers.",
      "Implemented atomic checkout with database transactions and a 15-minute inventory reservation mechanism to maintain stock consistency under concurrent requests.",
      "Built passwordless OTP authentication with transactional customer provisioning and JWT-based access/refresh tokens.",
      "Enforced role-based and resource-ownership authorization to prevent cross-scope access, alongside sensitive customer data masking.",
      "Optimized database access with PostgreSQL composite indexing, endpoint-specific rate limiting, and GitHub Actions CI/CD to Azure App Service.",
    ],
    keyDecisions: [
      {
        number: "01",
        title: "Domain-oriented Modular Monolith",
        summary:
          "Encapsulated business logic into isolated domain modules (auth, orders, inventory, products, payments) with shared PostgreSQL connection pooling.",
      },
      {
        number: "02",
        title: "Atomic Checkout & 15-Min Reservation",
        summary:
          "Guaranteed inventory consistency under concurrent buyers using PostgreSQL database transactions (prisma.$transaction) and background TTL cleanup.",
      },
      {
        number: "03",
        title: "Passwordless OTP & Transactional Provisioning",
        summary:
          "Eliminated password friction while atomically provisioning User, Customer, and Cart records inside a single transaction boundary.",
      },
    ],
    caseStudy: {
      overview:
        "PBL6 Pharmacy System is an engineering capstone backend supporting multi-branch retail pharmacy operations and an online storefront. The backend provides comprehensive capabilities across product catalog management, branch-level stock allocation, customer authentication, checkout with voucher validation, and digital payment processing.",
      myRoleDetailed:
        "Served as Backend Developer / Core Contributor, implementing the restructuring of the backend into a domain-oriented modular monolith, implementing customer passwordless OTP authentication with transactional provisioning, designing atomic checkout with temporary inventory reservation, integrating VNPay and MoMo payment webhooks, eliminating catalog N+1 queries, and configuring automated CI/CD to Azure App Service.",
      architectureOverview:
        "The system employs a Domain-oriented Modular Monolith pattern where business logic is encapsulated into distinct domain modules (such as auth, order-management, product-management, inventory-management, and payments), sharing a centralized Prisma ORM client and database connection pool to minimize distributed overhead.",
      technicalDecisions: [
        {
          topic: "Stock Consistency & Concurrency Control",
          problem:
            "During high-traffic periods, multiple customers can check out the same limited stock item simultaneously. Without proper concurrency controls, race conditions can cause stock overselling before payment is confirmed.",
          optionsConsidered: [
            "Immediate permanent stock deduction upon adding to cart (Possible alternative considered: prone to abandoned carts hoarding stock)",
            "Process-local in-memory mutex locking (Possible alternative considered: unreliable and does not scale across instances)",
            "Database transaction with temporary 15-minute inventory reservation window (Selected)",
          ],
          decision:
            "Implemented an atomic check-and-reserve workflow within a PostgreSQL database transaction (`prisma.$transaction`), creating an active inventory reservation record with a 15-minute TTL.",
          reason:
            "Guarantees that stock is atomically reserved at the database level during checkout while giving customers a reasonable window to complete online payment. If the payment window expires, an automated background cleanup worker safely releases the reservation.",
          tradeOff:
            "Introduces architectural overhead requiring a scheduled background worker (`reservationCleanupJob`) to periodically query and release expired reservation records.",
        },
        {
          topic: "Frictionless Authentication & Account Provisioning",
          problem:
            "Requiring traditional passwords creates friction for pharmacy customers, yet customer accounts must be consistently associated with base user records, roles, and a cart without leaving orphaned entities.",
          optionsConsidered: [
            "Traditional username/password registration with email verification link (Possible alternative considered: high friction for mobile buyers)",
            "External OAuth provider only (Possible alternative considered: excludes customers without third-party accounts)",
            "Passwordless Phone/Email OTP with transactional auto-provisioning (Selected)",
          ],
          decision:
            "Implemented phone/email OTP verification with dynamic atomic creation of User, Customer profile, and Cart records inside a single `prisma.$transaction` upon initial login.",
          reason:
            "Reduces customer onboarding friction while strictly ensuring data consistency: no customer profile or cart can exist without a valid parent user record, and vice versa.",
          tradeOff:
            "Introduces external dependencies on SMS/Email delivery latency and requires managing ephemeral OTP record expiration and rate limits.",
        },
        {
          topic: "Eliminating N+1 Database Query Bottlenecks",
          problem:
            "Product catalog listing, search, and category filter endpoints previously executed an individual database aggregation query per product row inside `Promise.all()`, creating severe query amplification (N+1 queries) as catalog size grew.",
          optionsConsidered: [
            "Raw SQL join database views (Possible alternative considered: loses Prisma type-safety guarantees)",
            "Relational eager loading with in-memory aggregation and composite indexing (Selected)",
          ],
          decision:
            "Replaced iterative per-product database aggregates with eager-loaded relational selects (`include: { branchinventory: { select: { stock: true } } }`) followed by in-memory `reduce()` aggregation, supported by compound indexing on critical tables.",
          reason:
            "Collapsed N+1 database queries into a single round-trip query execution while maintaining type-safe ORM models.",
          tradeOff:
            "Transfers minor data aggregation computation to application memory, which is negligible compared to network round-trip query latency.",
        },
        {
          topic: "Asynchronous Payment Gateway Webhook Integration",
          problem:
            "Payment partners (VNPay, MoMo) deliver asynchronous Instant Payment Notifications (IPN). The server must verify that callbacks are authentic, not tampered with, and resilient against network duplicate deliveries.",
          optionsConsidered: [
            "Basic query parameter status checking (Possible alternative considered: vulnerable to spoofed HTTP requests)",
            "Cryptographic HMAC checksum verification with idempotent audit logging (Selected)",
          ],
          decision:
            "Implemented HMAC-SHA512 (VNPay) and HMAC-SHA256 (MoMo) cryptographic signature validation, coupled with `payment_logs` tracking and `idempotency_key` deduplication.",
          reason:
            "Ensures non-repudiation and prevents duplicate order fulfillment or double-crediting when webhook retries occur.",
          tradeOff:
            "Requires strict secret management and defensive handling of out-of-order notifications arriving before or after customer redirect URLs.",
        },
      ],
      limitations: [
        {
          currentDesign: "Process-local in-memory caching and database composite indexing",
          constraint:
            "While an `ioredis` client configuration was scaffolded, runtime caching operates via database composite indexing and select in-memory structures rather than an active distributed Redis cluster.",
          futureEvolution:
            "Wire an active Redis cluster into route middleware with cache invalidation webhooks to decouple cache state from application host memory.",
        },
        {
          currentDesign: "In-process scheduled background cleanup jobs",
          constraint:
            "Cron jobs for reservation release (`reservationCleanupJob`) and unpaid order expiration (`paymentExpirationJob`) execute within the Express web server process via `node-cron`.",
          futureEvolution:
            "Extract background tasks into an independent worker service backed by a persistent message queue (such as BullMQ) for resilient retry semantics.",
        },
        {
          currentDesign: "Manual REST Client validation suite",
          constraint:
            "API verification was executed through structured VS Code REST Client collections (`.http` scripts) rather than an automated CI unit and integration test runner.",
          futureEvolution:
            "Introduce an automated test suite (e.g., Vitest or Jest with Supertest) in the GitHub Actions pipeline for automated regression verification.",
        },
      ],
    },
  },
  {
    id: "qms",
    title: "QMS — Hospital Queue Management System",
    subtitle: "High-throughput patient queue coordination and biometric check-in backend",
    role: "Backend Developer",
    techStack: [".NET 10", "C# 14", "SQL Server", "Dapper", "SignalR", "AES-256-GCM"],
    architecture: "Clean Architecture",
    githubUrl: "https://github.com/TranNguyenTam/hospital-queue-management-system",
    hasCaseStudy: true,
    caseStudySlug: "qms",
    shortDescription:
      "Built the backend services for a hospital queue management system using Clean Architecture, atomic ticket transitions via SQL Stored Procedures, realtime SignalR device notifications, and AES-256-GCM biometric vector encryption.",
    cvBulletPoints: [
      "Developed backend APIs and application services using Clean Architecture across API, Core, Services, and Infrastructure layers.",
      "Implemented atomic ticket-calling and queue transitions via SQL Stored Procedures with explicit transactions and concurrency controls.",
      "Built realtime notifications with SignalR and managed active connections with an in-memory device registry.",
      "Implemented AES-256-GCM authenticated encryption for sensitive biometric vector storage, BCrypt for passwords, and scope-based authorization across hierarchical healthcare facilities.",
      "Built a thread-safe in-memory vector cache with atomic reference swapping and version-based invalidation, with an empirical fallback path for wait-time estimation.",
      "Added two Python FastAPI services (face recognition and a scikit-learn/XGBoost wait-time predictor) and packaged the system as four Docker Compose services behind nginx.",
    ],
    keyDecisions: [
      {
        number: "01",
        title: "Queue Concurrency via Stored Procedures",
        summary:
          "Eliminated double-calling and race conditions under simultaneous desk requests via sp_K004_ProcessNextTicket with explicit row locks (UPDLOCK, ROWLOCK).",
      },
      {
        number: "02",
        title: "SignalR Realtime & Device Registry",
        summary:
          "Built realtime event distribution over WebSockets and tracked connected hospital hardware terminals via a thread-safe in-memory registry.",
      },
      {
        number: "03",
        title: "AES-256-GCM Biometric Security & In-Memory Cache",
        summary:
          "Protected sensitive facial embeddings with authenticated encryption and reduced repeated database/decryption work using a thread-safe cache.",
      },
    ],
    caseStudy: {
      overview:
        "QMS is a specialized hospital queue coordination system designed for multi-department healthcare environments. It orchestrates patient ticket intake, triage desk assignments, examination room ticket calling, automated state transitions, and realtime terminal notifications.",
      myRoleDetailed:
        "Implemented core backend services in .NET 10 following Clean Architecture principles. Engineered the atomic ticket-calling concurrency mechanism using SQL Server stored procedures, integrated realtime SignalR push communication with an in-memory device registry, implemented AES-256-GCM biometric vector encryption, and created a thread-safe in-memory vector cache.",
      architectureOverview:
        "Built using Clean Architecture with strict dependency inversion across four decoupled layers: API (HTTP endpoints & SignalR Hub), Core / Application (domain entities & interfaces), Services (business rules & encryption), and Infrastructure (SQL Server repositories & Dapper execution).",
      technicalDecisions: [
        {
          topic: "Atomic Queue Transitions & Concurrency Control",
          problem:
            "In busy hospital clinics, multiple doctors or staff counters can invoke 'call next ticket' simultaneously. A race condition could result in two examination rooms calling the same patient or leave a ticket in an inconsistent intermediate state.",
          optionsConsidered: [
            "Application-level distributed locking (Possible alternative considered: introduces external dependency and latency overhead)",
            "Optimistic concurrency with client retry loop (Possible alternative considered: causes frequent user-facing transaction collisions)",
            "SQL Stored Procedure with explicit transaction and row-level locking (Selected)",
          ],
          decision:
            "Implemented `sp_K004_ProcessNextTicket` using explicit database transaction boundaries and row-locking hints (`UPDLOCK, ROWLOCK, READPAST`).",
          reason:
            "Guarantees strict ACID atomicity directly within SQL Server's lock manager, allowing concurrent calling requests from different counters to process sequentially without blocking or deadlocking.",
          tradeOff:
            "Encapsulates core ticket state transition logic within SQL Server stored procedures, requiring database migration discipline.",
        },
        {
          topic: "Data Access Strategy: Dapper Micro-ORM",
          problem:
            "High-frequency ticket status lookups and queue displays require low-overhead data access without the memory overhead and change-tracking baggage of heavyweight ORMs.",
          optionsConsidered: [
            "Entity Framework Core with NoTracking (Possible alternative considered: functional but carries query generation overhead)",
            "Raw ADO.NET SqlCommand (Possible alternative considered: verbose boilerplate for mapping)",
            "Dapper Micro-ORM (Selected)",
          ],
          decision:
            "Chose Dapper for explicit SQL control and lightweight data access in latency-sensitive queue operations.",
          reason:
            "Provides maximum transparency over raw SQL execution and stored procedure execution while offering high-performance object mapping.",
          tradeOff:
            "Requires manual SQL query maintenance and lacks automated database migration scaffolding.",
        },
        {
          topic: "Realtime Queue Event Distribution",
          problem:
            "Examination room displays, triage monitors, and kiosks must receive instant notifications when queue status changes without constant HTTP polling.",
          optionsConsidered: [
            "Client HTTP polling at fixed intervals (Possible alternative considered: generates unnecessary database load)",
            "Server-Sent Events (Possible alternative considered: unidirectional only)",
            "SignalR with in-memory device registry (Selected)",
          ],
          decision:
            "Built realtime notifications with SignalR and managed active device connections through an in-memory registry.",
          reason:
            "Enables persistent, bi-directional event distribution over WebSockets with automatic fallback, tracking connected hardware devices via an in-memory device registry.",
          tradeOff:
            "The in-memory device registry is process-local; horizontal scaling across multiple server instances would require a distributed backplane.",
        },
        {
          topic: "Biometric Facial Vector Cryptographic Security",
          problem:
            "Biometric face embeddings (512-dimension vectors) stored in the database are sensitive biometric data that must be protected against unauthorized data extraction or offline tampering.",
          optionsConsidered: [
            "Plaintext binary database columns (Possible alternative considered: unacceptable security risk for biometric data)",
            "AES-CBC block encryption (Possible alternative considered: lacks cryptographic integrity verification)",
            "AES-256-GCM authenticated encryption (Selected)",
          ],
          decision:
            "Implemented AES-256-GCM authenticated encryption using a unique initialization vector (IV) per record and cryptographic authentication tag.",
          reason:
            "Provides both data confidentiality and cryptographic authenticity: any unauthorized alteration to the ciphertext or authentication tag is detected immediately during decryption.",
          tradeOff:
            "Adds cryptographic CPU overhead during vector storage and read operations.",
        },
        {
          topic: "Thread-Safe In-Memory Vector Caching",
          problem:
            "Repeatedly querying and decrypting facial vector embeddings from SQL Server during check-in lookups generates redundant database and CPU overhead.",
          optionsConsidered: [
            "Direct database query on every frame (Possible alternative considered: causes database I/O bottlenecks)",
            "Thread-safe in-memory cache with atomic reference swapping (Selected)",
          ],
          decision:
            "Reduced repeated database/decryption work during face-vector lookup by using a thread-safe in-memory cache.",
          reason:
            "Leveraged atomic pointer swapping (`Interlocked.Exchange`) and version-based invalidation (`FaceGalleryCache`), allowing concurrent read operations without locking contention.",
          tradeOff:
            "The cache is local to the server process and must be re-warmed upon application restart.",
        },
      ],
      limitations: [
        {
          currentDesign: "Process-local SignalR device connection registry",
          constraint:
            "Active device connections are tracked in application memory on a single server host.",
          futureEvolution:
            "Integrate a distributed backplane (such as Redis SignalR Backplane) to synchronize connection state across multi-node server clusters.",
        },
        {
          currentDesign: "Process-local in-memory vector cache",
          constraint:
            "Biometric vector gallery is cached in local process memory, limiting horizontal scaling without inter-process coordination.",
          futureEvolution:
            "Migrate vector similarity search to a dedicated vector database (such as pgvector or Qdrant) with centralized index management.",
        },
        {
          currentDesign: "Host-coupled background monitoring tasks",
          constraint:
            "Wait-time recalculations and device heartbeat checks execute as background services within the main ASP.NET Core host process.",
          futureEvolution:
            "Decouple background maintenance tasks into an independent worker service or serverless schedule.",
        },
      ],
    },
  },
  {
    id: "pbl4",
    title: "PBL4 — Video Chat & Communication Platform",
    subtitle: "Realtime messaging, member permissions, and chatroom coordination backend",
    role: "Backend Developer (Academic Capstone)",
    techStack: ["Node.js", "TypeScript", "MongoDB", "Mongoose", "Socket.IO"],
    architecture: "Layered MVC Architecture",
    hasCaseStudy: false,
    shortDescription:
      "Developed group chat management with role-based permissions, advanced chatroom search with pagination, friend-request workflows with atomic MongoDB updates, and notification services.",
    cvBulletPoints: [
      "Implemented group chat management with role-based permissions, member management, group updates, and admin-safety rules preventing orphaned groups.",
      "Built advanced chatroom search with pagination, multi-condition filtering, cross-entity user search, and dynamic opponent resolution.",
      "Implemented friend-request workflows with duplicate/inverse-request prevention and atomic MongoDB updates ($addToSet, $pull).",
      "Developed notification and user-management functionality within a realtime communication platform.",
    ],
  },
];
