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
    role: "Software Developer",
    period: "12/2025 – Present",
    location: "Da Nang, Vietnam",
    isCommercial: true,
    context:
      "Two healthcare systems: a public-health management platform for a provincial Center for Disease Control (FastAPI), and patient-flow coordination for the diagnostic departments of a hospital information system (Flask)",
    techStack: ["Python", "FastAPI", "Flask", "SQL Server", "pyodbc", "pytest", "Playwright", "openpyxl", "python-docx", "Git"],
    bulletPoints: [
      "Public-health platform (400+ commits): built the chemical and microbiological testing-laboratory module to ISO/IEC 17025 as its primary developer — sample reception, staff assignment, result entry, two-level approval, tariffs, payments and invoicing (140+ REST endpoints).",
      "Kept concurrent edits consistent with row-level locking and versioned records; integrated remote digital signing of PDF lab reports inside serializable transactions.",
      "Developed the land-border health quarantine module (declarations, certificates, fee vouchers, invoices, statutory reports) and two-step Excel imports: dry-run preview, transactional commit, duplicate matching, idempotent inserts.",
      "Implemented three-tier reporting workflows (facility, commune health station, CDC) for water quality, school health and injury data with deadline auto-lock, reopen requests and Word/Excel exports; built non-communicable disease registers with DHIS2 and Excel imports.",
      "Wrote 60 SQL migrations and about 590 automated tests (pytest/unittest, Playwright) covering pricing concurrency, payment policy, permissions and import sessions.",
      "Hospital information system (140+ commits): built queueing and room coordination for six diagnostic areas (X-ray, CT/MRI, ultrasound, endoscopy, laboratory, nuclear medicine) — check-in, call-next, recall and skip, room suspension that returns patients to the queue, and waiting-room TV displays.",
      "Prevented duplicate calls from concurrent operators inside SQL stored procedures, made laboratory check-in idempotent, fixed TV disconnects by bounding server connections, and covered the work with about 570 automated tests.",
      "Added next-room suggestions driven by configurable area rules and nightly measured service times, a resource dashboard for department leads and monthly staff scheduling for imaging rooms.",
    ],
  },
];
