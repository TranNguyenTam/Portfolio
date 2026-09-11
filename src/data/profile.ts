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
  name: "TRẦN NGUYÊN TÂM",
  title: "JUNIOR BACKEND DEVELOPER",
  location: "Da Nang, Vietnam",
  phone: "0375053769",
  email: "trannguyentam.dev@gmail.com",
  github: "github.com/TranNguyenTam",
  githubUrl: "https://github.com/TranNguyenTam",
  summary:
    "Backend-focused Developer with commercial experience building and maintaining public health information systems, alongside hands-on project experience across .NET, Python, Node.js, and SQL databases. Strongest areas include complex business logic, REST APIs, relational data, transactions, concurrency, authentication/authorization, and production debugging. Seeking a Junior Backend Developer role to deepen backend engineering and system design skills.",
  education: {
    institution: "The University of Danang — University of Science and Technology",
    degree: "Bachelor of Information Technology",
    period: "2022 – 2026",
  },
  additional: {
    language: "English: TOEIC 600",
  },
};
