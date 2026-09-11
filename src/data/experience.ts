export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  isCommercial: boolean;
  context: string;
  techStack: string[];
  bulletPoints: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    company: "KCL Group",
    role: "Developer",
    period: "12/2025 – 09/2026",
    location: "Da Nang, Vietnam",
    isCommercial: true,
    context: "Public health information systems for healthcare organizations and medical facilities",
    techStack: ["Python", "FastAPI", "SQL Server", "Git"],
    bulletPoints: [
      "Developed and maintained public health information systems using Python (FastAPI) and SQL Server for healthcare organizations and medical facilities.",
      "Built REST APIs, database operations, authentication/authorization, and business workflows across multiple application modules.",
      "Implemented fullstack features involving data validation, reporting, data aggregation, and document generation.",
      "Investigated and resolved production issues across backend services, database operations, and data-processing workflows.",
      "Collaborated with a cross-functional team of approximately 5 developers and 3 business analysts using Git-based development workflows.",
    ],
  },
];
