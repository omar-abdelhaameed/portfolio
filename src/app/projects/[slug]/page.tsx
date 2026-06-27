import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import TechTag from "@/components/TechTag";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-12 md:py-20 bg-surface-0 min-h-screen">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-accent mb-8 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back to Projects</span>
        </Link>

        {/* Header Block */}
        <div className="border-b border-surface-3 pb-8 mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <TechTag key={tech} name={tech} />
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink font-display mb-4">
            {project.title}
          </h1>

          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-[65ch]">
            {project.summary}
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-3 mt-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-surface-0 bg-accent hover:bg-accent-hover rounded transition-colors duration-200"
              >
                GitHub Repository
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-accent border border-accent/30 hover:bg-accent-light rounded transition-colors duration-200"
              >
                Live Demonstration
              </a>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Detailed Writeup (Left) */}
          <div className="lg:col-span-8 space-y-12">
            {/* The Problem */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink font-display border-b border-surface-3 pb-2">
                The Problem
              </h2>
              <p className="text-text-secondary leading-relaxed text-sm md:text-base max-w-[65ch]">
                {project.problem}
              </p>
            </section>

            {/* The Solution */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink font-display border-b border-surface-3 pb-2">
                The Solution
              </h2>
              <p className="text-text-secondary leading-relaxed text-sm md:text-base max-w-[65ch]">
                {project.solution}
              </p>
            </section>

            {/* Visual Architecture */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink font-display border-b border-surface-3 pb-2 mb-4">
                System Design
              </h2>
              <ArchitectureDiagram architecture={project.architecture} />
            </section>

            {/* Technical Decisions */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-ink font-display border-b border-surface-3 pb-2">
                Key Technical Decisions
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {project.technicalDecisions.map((dec, i) => (
                  <div
                    key={i}
                    className="p-5 rounded bg-surface-1 border border-surface-3"
                  >
                    <h3 className="text-base font-bold text-ink font-display mb-2">
                      {i + 1}. {dec.title}
                    </h3>
                    <p className="text-text-secondary text-xs md:text-sm leading-relaxed">
                      {dec.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Testing and Verification */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink font-display border-b border-surface-3 pb-2">
                Testing &amp; Reliability
              </h2>
              <p className="text-text-secondary leading-relaxed text-sm md:text-base max-w-[65ch] mb-4">
                {project.testing.summary}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.testing.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded bg-surface-1 border border-surface-3 text-xs text-text-secondary"
                  >
                    <svg
                      className="w-4 h-4 text-accent mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Future Improvements */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-ink font-display border-b border-surface-3 pb-2">
                What I Would Improve Next
              </h2>
              <ul className="space-y-3">
                {project.improvements.map((imp, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-xs md:text-sm text-text-secondary"
                  >
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded bg-accent-light text-accent text-[10px] font-bold font-mono mt-0.5 border border-accent/20">
                      {i + 1}
                    </span>
                    <span className="leading-normal">{imp}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar Visuals / Metadata (Right) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Image Gallery */}
            {project.images && project.images.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-text-tertiary">
                  Screenshots &amp; Visuals
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {project.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative rounded overflow-hidden border border-surface-3 bg-surface-1 aspect-video group"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-300"
                      />
                      <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-surface-0/90 to-surface-0/0">
                        <span className="text-[10px] text-text-secondary leading-tight line-clamp-1">
                          {img.alt}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mini Contact CTA */}
            <div className="p-6 rounded-lg bg-surface-1 border border-accent/20">
              <h4 className="text-sm font-bold tracking-tight text-ink font-display mb-2">
                Need a similar system?
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                I can help design, build, test, and deploy production-ready API and real-time backend structures.
              </p>
              <Link
                href="/#contact"
                className="w-full text-center inline-block px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-surface-0 bg-accent hover:bg-accent-hover rounded transition-colors duration-200"
              >
                Discuss Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
