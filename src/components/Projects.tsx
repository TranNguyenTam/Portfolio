import React from "react";
import { projectsData } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featuredProjects = projectsData.filter((p) => p.hasCaseStudy);
  const supportingProjects = projectsData.filter((p) => !p.hasCaseStudy);

  return (
    <section id="projects" className="scroll-mt-16 py-20 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
              <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              03. Technical Projects
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
              Systems & Architecture
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm text-slate-400 max-w-md">
            Engineered and developed with an emphasis on transactions, concurrency control, relational schemas, and real-world system constraints.
          </p>
        </div>

        {/* Featured Projects with Case Studies */}
        <div className="space-y-10 mb-16">
          <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Featured Systems (Deep-Dive Case Studies)
            </h3>
            <span className="text-xs text-slate-500 font-mono">2 Primary Case Studies</span>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured
                projectIndex={`0${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Supporting Projects */}
        <div>
          <div className="border-b border-slate-800 pb-3 mb-8 flex items-center justify-between">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Supporting Projects
            </h3>
            <span className="text-xs text-slate-500 font-mono">Academic Capstone</span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {supportingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
