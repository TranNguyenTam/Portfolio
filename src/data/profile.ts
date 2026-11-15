export interface Profile {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  githubUrl: string;
  summary: string;
  education: {
    institution: string;
    degree: string;
    period: string;
  };
  additional: {
    language: string;
  };
}

export const profileData: Profile = {
  name: "TRAN NGUYEN TAM",
  title: "BACKEND DEVELOPER",
  location: "Da Nang, Vietnam",
  phone: "0375053769",
  email: "trannguyentam.dev@gmail.com",
  github: "github.com/TranNguyenTam",
  githubUrl: "https://github.com/TranNguyenTam",
  summary:
    "Backend Developer with about one year of commercial experience building healthcare information systems in Python (FastAPI, Flask) and SQL Server. Primary developer of an ISO/IEC 17025 testing-laboratory workflow and a land-border health quarantine module, and a main contributor to hospital patient-queue coordination — owning schema design, REST APIs, role-based access, billing and automated tests.",
  education: {
    institution: "The University of Danang — University of Science and Technology",
    degree: "Bachelor of Information Technology",
    period: "2022 – 2026",
  },
  additional: {
    language: "English: TOEIC 600",
  },
};
