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
      "C# (.NET 10 / ASP.NET Core)",
      "Python (FastAPI)",
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
      "GitHub Actions (CI/CD)",
      "Azure App Service",
      "Postman / REST Client",
    ],
  },
];
