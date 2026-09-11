"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 py-20 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-400">
            05 // Connect
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
            Let&apos;s build reliable backend systems.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Open to Junior Backend Developer positions where I can contribute to transactional business workflows, relational database engineering, and reliable API services. Based in Da Nang, Vietnam, with openness to remote or on-site engineering roles.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-500 transition-colors shadow-sm"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email Me</span>
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-medium text-slate-200 hover:border-slate-600 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <span>{copied ? "Email Copied to Clipboard!" : "Copy Email"}</span>
            </button>

            <a
              href="/Tran_Nguyen_Tam_Junior_Backend_CV.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs font-medium text-slate-300 hover:border-slate-700 hover:text-white transition-colors"
            >
              <svg className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download CV</span>
            </a>

            <a
              href="https://github.com/TranNguyenTam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-xs font-medium text-slate-300 hover:border-slate-700 hover:text-white transition-colors"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub</span>
            </a>
          </div>

          {/* Direct contact indicators */}
          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-800/80 pt-6 text-xs font-mono text-slate-400">
            <div>
              <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Email</span>
              <a href={`mailto:${profileData.email}`} className="text-slate-200 hover:text-blue-400 transition-colors">
                {profileData.email}
              </a>
            </div>
            <div>
              <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Phone</span>
              <a href={`tel:${profileData.phone}`} className="text-slate-200 hover:text-blue-400 transition-colors">
                {profileData.phone}
              </a>
            </div>
            <div>
              <span className="text-slate-500 uppercase tracking-wider block text-[10px]">Location</span>
              <span className="text-slate-200">{profileData.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
