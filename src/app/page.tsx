import React from "react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import ProcessStep from "@/components/ProcessStep";
import ContactSection from "@/components/ContactSection";
import FirstRunLoader from "@/components/FirstRunLoader";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import type { ProcessStepData } from "@/lib/types";

export default function Home() {
  const steps: ProcessStepData[] = [
    {
      number: 1,
      title: "Understand",
      description:
        "Confirm the current problem, expected result, and technical environment.",
    },
    {
      number: 2,
      title: "Plan",
      description: "Define scope, deliverables, price, and deadline.",
    },
    {
      number: 3,
      title: "Build",
      description: "Implement, test, and document the solution.",
    },
    {
      number: 4,
      title: "Deliver",
      description:
        "Demonstrate the result and provide setup and usage instructions.",
    },
  ];

  return (
    <>
      {/* First-Run Shell/CLI Loader */}
      <FirstRunLoader />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-[#0d0e12]">
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Professional Backend Services"
            subtitle="I specialize in building modular, fast, and secure backend systems tailored to startups, agencies, and SaaS platforms."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section
        id="projects"
        className="py-20 md:py-28 bg-[#12131a] border-t border-b border-surface-3"
      >
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Featured Projects"
            subtitle="Explore production-grade solutions demonstrating WebSockets, message queues, database optimizations, and external AI integrations."
          />
          <div className="space-y-12">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-20 md:py-28 bg-[#0d0e12] border-b border-surface-3">
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="My Work Process"
            subtitle="How I collaborate with clients and developers to deliver high-quality code on time."
            align="left"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <ProcessStep key={step.number} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-[#0d0e12]">
        <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <SectionHeading title="About Me" />
              <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-6">
                <p>
                  I am a backend developer specializing in Python and FastAPI. I
                  build APIs, database systems, authentication flows, AI
                  integrations, and automation services. My projects use
                  PostgreSQL with SQLAlchemy for data persistence, Alembic for
                  schema migrations, and JWT for authentication.
                </p>
                <p>
                  I integrate external services like the USDA FoodData Central
                  API and Google Gemini for AI-powered features, with proper
                  error handling, timeouts, and structured outputs. I test with
                  pytest across unit, integration, and end-to-end layers, and
                  deploy with Docker Compose, including multi-service
                  orchestrations with Redis, RabbitMQ, and Nginx load balancing.
                </p>
                <p>
                  I focus on clear architecture, maintainable code, reliable
                  validation, and straightforward documentation. I am especially
                  interested in supporting startups, agencies, and frontend
                  developers who need dependable backend implementation.
                </p>
              </div>
            </div>

            {/* Side Info Box */}
            <div className="lg:col-span-4 bg-[#161821] rounded-lg border border-surface-3 p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground font-display mb-4 border-b border-surface-3 pb-3">
                Key Professional Facts
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between">
                  <span className="text-text-secondary">Location</span>
                  <span className="font-semibold text-foreground">Egypt</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-text-secondary">Timezone</span>
                  <span className="font-semibold text-foreground">
                    Africa/Cairo (UTC+2)
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-text-secondary">Specialization</span>
                  <span className="font-semibold text-foreground">
                    FastAPI Backend
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-text-secondary">Availability</span>
                  <span className="font-semibold text-accent">
                    Sprints &amp; Fixed-Price
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
