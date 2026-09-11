import React from "react";
import Link from "next/link";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  featured?: boolean;
  projectIndex?: string;
}

export default function ProjectCard({
  project,
  featured = false,
  projectIndex = "01",
}: ProjectCardProps) {
  if (featured && project.keyDecisions) {
    return (
      <article className="rounded-2xl border border-slate-800/90 bg-slate-900/40 p-6 sm:p-10 transition-colors hover:border-slate-700/80">
        {/* Top Header: Project Index & Architecture */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-2xl font-bold text-slate-500">
              {projectIndex}
            </span>
            <span className="text-slate-600 font-mono">•</span>
            <span className="font-mono text-xs font-medium text-blue-400 uppercase tracking-wider">
              {project.architecture}
            </span>
          </div>
          <div className="font-mono text-xs text-slate-400">
            Role: <span className="text-slate-200 font-medium">{project.role}</span>
          </div>
        </div>

        {/* Project Title */}
        <div className="mt-4">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            {project.title}
          </h3>
          <p className="mt-3 text-base text-slate-300 leading-relaxed max-w-4xl">
            {project.shortDescription}
          </p>
        </div>

        {/* 3 Key Engineering Decisions — Scannable Technical Breakdown */}
        <div className="mt-8 space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-slate-400">
            Key Architectural Decisions:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.keyDecisions.map((decision) => (
              <div
                key={decision.title}
                className="rounded-lg border border-slate-800/70 bg-slate-950/60 p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-1.5 font-mono text-xs font-semibold text-blue-400">
                    <span className="shrink-0">{decision.number} {"//"}</span>
                    <span className="text-slate-200 font-sans font-medium text-xs leading-snug">
                      {decision.title}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {decision.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Stack & Action CTAs */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Tech Stack */}
          <div className="flex flex-wrap items-center gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-slate-800 bg-slate-950 px-2 py-0.5 font-mono text-[11px] text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/90 px-3.5 py-2 text-xs font-medium text-slate-200 hover:border-slate-600 hover:bg-slate-800 hover:text-white transition-colors"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>GitHub Repository</span>
              </a>
            )}

            {project.hasCaseStudy && project.caseStudySlug && (
              <Link
                href={`/projects/${project.caseStudySlug}`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition-colors shadow-sm"
              >
                <span>Read Technical Case Study</span>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </article>
    );
  }

  // Supporting project card (PBL4)
  return (
    <div className="rounded-xl border border-slate-800/70 bg-slate-900/30 p-6 sm:p-8 transition-colors">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-800/60 pb-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
            Supporting Capstone
          </span>
          <span className="text-slate-600">•</span>
          <span className="font-mono text-xs text-blue-400">{project.architecture}</span>
        </div>
        <span className="font-mono text-xs text-slate-400">Role: {project.role}</span>
      </div>

      <h3 className="mt-3 text-xl font-bold text-slate-100">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-300 leading-relaxed">
        {project.shortDescription}
      </p>

      <ul className="mt-4 space-y-2 text-xs text-slate-300">
        {project.cvBulletPoints.slice(0, 3).map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2 leading-relaxed">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-500" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-800/60">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-slate-800 bg-slate-950 px-2 py-0.5 font-mono text-[11px] text-slate-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
