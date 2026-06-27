"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardBody, Button } from "@heroui/react";
import type { Project } from "@/lib/types";
import TechTag from "./TechTag";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const hasImage = project.images && project.images.length > 0;
  const firstImage = hasImage ? project.images[0] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <Card className="card-3d border border-surface-3 bg-[#161821] overflow-hidden p-0">
        <CardBody className="p-6 md:p-8 flex flex-col md:grid md:grid-cols-12 gap-8">
          {/* Visual Thumbnail (Left) */}
          <div className="md:col-span-5 relative w-full aspect-video rounded overflow-hidden bg-surface-0 border border-surface-3 flex flex-col items-center justify-center">
            {firstImage ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={firstImage.src}
                alt={firstImage.alt}
                className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-500"
              />
            ) : (
              /* Sleek Technical Placeholder Graphic */
              <div className="p-6 text-center flex flex-col items-center justify-center h-full w-full select-none">
                <svg
                  className="w-12 h-12 text-accent/30 mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-display font-bold text-base text-foreground mb-1 block">
                  {project.title.split(" ").slice(0, 3).join(" ")}
                </span>
                <span className="text-[10px] font-mono text-accent uppercase tracking-widest">
                  Backend Case Study
                </span>
              </div>
            )}
          </div>

          {/* Project Details (Right) */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.slice(0, 4).map((tech) => (
                  <TechTag key={tech} name={tech} />
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-[10px] font-mono text-text-tertiary self-center pl-1">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground font-display mb-3">
                {project.title}
              </h3>

              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-4">
                {project.summary}
              </p>

              {/* Three Key Features */}
              <ul className="space-y-1.5 mb-6">
                {project.features.slice(0, 3).map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    <span className="leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons / Actions */}
            <div className="flex flex-wrap items-center gap-3 border-t border-surface-3 pt-4">
              <Button
                as={Link}
                href={`/projects/${project.slug}`}
                size="sm"
                className="bg-accent text-black font-semibold hover:bg-accent-hover uppercase tracking-wider text-[10px] rounded"
              >
                View Case Study
              </Button>

              {project.githubUrl && (
                <Button
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="bordered"
                  className="border-surface-3 text-foreground hover:bg-surface-2 uppercase tracking-wider text-[10px] rounded"
                >
                  GitHub
                </Button>
              )}

              {project.liveUrl && (
                <Button
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  variant="flat"
                  className="bg-accent-light border border-accent/30 text-accent hover:bg-accent/25 uppercase tracking-wider text-[10px] rounded"
                >
                  Live Demo
                </Button>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}
