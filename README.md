# Trần Nguyên Tâm — Junior Backend Developer Portfolio

A technical portfolio website engineered to showcase commercial software engineering experience, database transactions, concurrency control, system architecture, and verifiable backend contributions.

---

## 1. Technical Positioning & Core Evidence

- **Positioning:** Junior Backend Developer with commercial experience in public health information systems, relational data, transactions, and REST APIs.
- **Primary Source of Truth:** `Tran_Nguyen_Tam_Junior_Backend_CV.pdf` (located in `/public`).
- **Commercial Experience:** **KCL Group** (12/2025 – 09/2026, Da Nang, Vietnam) — Public health information systems (Python/FastAPI, SQL Server).
- **Core Projects:**
  - **PBL6 Pharmacy Management System:** Domain-oriented Modular Monolith (`https://github.com/PBL6-Pharmacy-System/Back-End-Web`).
  - **QMS Hospital Queue System:** Clean Architecture in .NET 10 (`https://github.com/TranNguyenTam/hospital-queue-management-system`).
  - **PBL4 Video Chat Platform:** Realtime communication backend (Node.js, TypeScript, MongoDB, Socket.IO).

---

## 2. Technical Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Design Base:** Dark slate neutral (`#020617`), restrained blue accent, Geist Sans & Mono typography
- **Accessibility & SEO:** Semantic HTML5, visible focus states, Open Graph metadata

---

## 3. Project Structure

```text
portfolio/
├── public/
│   └── Tran_Nguyen_Tam_Junior_Backend_CV.pdf        # Verified CV PDF source of truth
├── src/
│   ├── app/
│   │   ├── globals.css                              # Tailwind v4 configuration & theme
│   │   ├── layout.tsx                               # Root layout with SEO & OpenGraph
│   │   ├── page.tsx                                 # Portfolio homepage
│   │   └── projects/
│   │       ├── pbl6/page.tsx                        # PBL6 deep-dive case study
│   │       └── qms/page.tsx                         # QMS deep-dive case study
│   ├── components/
│   │   ├── About.tsx                                # Backend philosophy & engineering focus
│   │   ├── ArchitectureDiagram.tsx                  # Data flow diagrams (PBL6 & QMS)
│   │   ├── Contact.tsx                              # Contact cards & clipboard actions
│   │   ├── Experience.tsx                           # KCL Group commercial experience
│   │   ├── Footer.tsx                               # Minimalist technical footer
│   │   ├── Hero.tsx                                 # Identity & positioning
│   │   ├── Navbar.tsx                               # Accessible header navigation
│   │   ├── ProjectCard.tsx                          # Reusable project showcase card
│   │   ├── Projects.tsx                             # Projects section container
│   │   └── Skills.tsx                               # Categorized skills grid (no percentage bars)
│   └── data/
│       ├── experience.ts                            # Commercial experience structured data
│       ├── profile.ts                               # Personal & contact information
│       ├── projects.ts                              # Technical projects & case-study records
│       └── skills.ts                                # Categorized technical competencies
├── package.json
└── tsconfig.json
```

---

## 4. Local Development

### Prerequisites
- Node.js 20+ (or 18.18+)
- npm 10+

### Installation & Run
```bash
# Navigate to portfolio directory
cd portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 5. Verification & Quality Gates

```bash
# Run ESLint validation
npm run lint

# Run full TypeScript check and production build
npm run build
```

---

## 6. Deployment Guide

### Option A: Vercel (Recommended for Next.js)
1. Push the `portfolio` project to your personal GitHub repository: `https://github.com/TranNguyenTam/portfolio`.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Set the Root Directory to `portfolio` (or `./` if repository root).
5. Build settings are detected automatically (`next build`).
6. Click **Deploy**.

### Option B: Cloudflare Pages / Netlify
1. Connect repository to Cloudflare Pages or Netlify.
2. Build command: `npm run build`.
3. Output directory: `.next` (or standalone if configured).

### Option C: Self-Hosted Node.js / Docker
1. Run `npm run build`.
2. Start the production server:
   ```bash
   npm run start
   ```
   (Listens on port 3000 by default).
