export interface SkillCategory {
  name: string;
  description: string;
  isPrimary?: boolean;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Core Backend",
    description: "Server-side engineering principles, concurrency, and security boundaries",
    isPrimary: true,
    skills: [
      "Transactions",
      "Concurrency Control",
      "REST API Design",
      "Authentication & Authorization",
      "RBAC",
      "Validation & Error Handling",
      "Idempotent Imports",
      "Excel / Word / PDF Generation",
    ],
  },
  {
    name: "Data & Persistence",
    description: "Relational modeling, indexing, micro-ORMs, and query patterns",
    isPrimary: true,
    skills: [
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Dapper",
      "Prisma",
      "Mongoose",
    ],
  },
  {
    name: "Architecture",
    description: "Structural software boundaries and separation of concerns",
    isPrimary: true,
    skills: [
      "Clean Architecture",
      "Domain-oriented Modular Monolith",
      "Layered Architecture",
    ],
  },
  {
    name: "Languages & Frameworks",
    description: "Runtimes, typed languages, and server-side application frameworks",
    isPrimary: false,
    skills: [
      "Python (FastAPI, Flask, Pydantic, pyodbc)",
      "C# (.NET 10 / ASP.NET Core)",
      "TypeScript / JavaScript (Node.js)",
      "SQL (T-SQL, PL/pgSQL)",
    ],
  },
  {
    name: "Tools & Deployment",
    description: "Version control, automated pipelines, and cloud hosting",
    isPrimary: false,
    skills: [
      "Git & GitHub",
      "Docker & Docker Compose",
      "GitHub Actions (CI/CD)",
      "Azure App Service",
      "pytest / unittest / Playwright",
      "Postman / REST Client",
    ],
  },
];
