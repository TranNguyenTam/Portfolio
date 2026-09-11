import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trần Nguyên Tâm — Junior Backend Developer",
  description:
    "Junior Backend Developer with commercial healthcare software experience. Hands-on expertise with .NET 10, Python (FastAPI), Node.js, SQL Server, PostgreSQL, database transactions, concurrency, and Clean Architecture.",
  keywords: [
    "Trần Nguyên Tâm",
    "Junior Backend Developer",
    "Backend Developer Da Nang",
    ".NET Developer",
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "SQL Server",
    "Clean Architecture",
    "Modular Monolith",
  ],
  authors: [{ name: "Trần Nguyên Tâm", url: "https://github.com/TranNguyenTam" }],
  creator: "Trần Nguyên Tâm",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trannguyentam.dev",
    title: "Trần Nguyên Tâm — Junior Backend Developer",
    description:
      "Junior Backend Developer with commercial experience in public health information systems, relational data, transactions, and REST APIs across .NET, Python, and Node.js.",
    siteName: "Trần Nguyên Tâm Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trần Nguyên Tâm — Junior Backend Developer",
    description:
      "Junior Backend Developer with commercial experience in public health information systems, relational data, transactions, and REST APIs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
