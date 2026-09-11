import React from "react";
import { profileData } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-sm font-semibold text-slate-200">
            {profileData.name}
          </div>
          <div className="text-xs text-slate-500 font-mono mt-0.5">
            Junior Backend Developer • Da Nang, Vietnam
          </div>
        </div>

        <div className="text-xs text-slate-500 text-center md:text-right">
          <div>Built with Next.js & Tailwind CSS. Designed for clarity and verified technical evidence.</div>
          <div className="mt-1 flex justify-center md:justify-end gap-4 font-mono">
            <a
              href="https://github.com/TranNguyenTam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-blue-400 transition-colors"
            >
              Email
            </a>
            <span>•</span>
            <a
              href="/Tran_Nguyen_Tam_Junior_Backend_CV.pdf"
              download
              className="hover:text-blue-400 transition-colors"
            >
              CV (PDF)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
