"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Button, Chip } from "@heroui/react";
import TechTag from "./TechTag";

export default function Hero() {
  const handleScrollClick = (href: string) => {
    const targetElement = document.getElementById(href.replace("#", ""));
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const heroTech = [
    "Python",
    "FastAPI",
    "PostgreSQL",
    "SQLAlchemy",
    "Docker",
    "Redis",
    "RabbitMQ",
    "pytest",
    "Google Gemini API",
    "Pydantic",
  ];

  // Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center py-16 md:py-24 border-b border-surface-3 overflow-hidden bg-gradient-to-b from-[#0d0e12] to-[#12131a]"
    >
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg
          className="absolute -right-24 top-6 w-[800px] h-[800px] text-accent"
          fill="none"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4 4"
          />
          <path d="M10 50 L90 50" stroke="currentColor" strokeWidth="0.25" />
          <path d="M50 10 L50 90" stroke="currentColor" strokeWidth="0.25" />
        </svg>
      </div>

      <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column (Content) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:col-span-7 flex flex-col items-start text-left"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <Chip
              variant="soft"
              className="bg-accent-light border border-accent/20 text-accent py-4 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-ping mr-2 inline-block" />
              Available for fixed-price projects &amp; 24–48-hour sprints
            </Chip>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-display leading-[1.1] mb-6"
          >
            FastAPI Backend Developer for APIs, PostgreSQL and AI Integrations
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-[60ch]"
          >
            I help startups, agencies and frontend developers build reliable
            FastAPI backends, integrate external services and deliver AI-powered
            features.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="bg-accent text-black font-semibold hover:bg-accent-hover w-full sm:w-auto uppercase tracking-wider text-xs rounded"
              onClick={() => handleScrollClick("#projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-surface-3 text-foreground hover:bg-surface-2 w-full sm:w-auto uppercase tracking-wider text-xs rounded"
              onClick={() => handleScrollClick("#contact")}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Technologies */}
          <motion.div variants={itemVariants} className="w-full">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-tertiary mb-3">
              Inspected Technologies:
            </h3>
            <div className="flex flex-wrap gap-2 max-w-[50ch] sm:max-w-none">
              {heroTech.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column (Developer Card with Photo & 3D Effect) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="md:col-span-5 flex flex-col items-center justify-center"
        >
          <Card className="w-full max-w-[340px] card-3d border border-surface-3 bg-[#161821] shadow-2xl relative overflow-visible">
            <CardContent className="p-6 flex flex-col items-center text-center">
              {/* Profile Image container with Signal green glow */}
              <div className="relative w-40 h-40 rounded-full p-1 bg-gradient-to-tr from-accent to-surface-3 mb-6 shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/df.png"
                  alt="Omar AbdElhameed"
                  className="object-cover w-full h-full rounded-full bg-[#1b1d28]"
                />
                <span className="absolute bottom-1 right-3 w-4 h-4 bg-accent border-2 border-[#161821] rounded-full animate-pulse" />
              </div>

              <h2 className="text-xl font-bold font-display text-foreground tracking-tight">
                Omar AbdElhameed
              </h2>
              <p className="text-xs font-mono text-accent uppercase tracking-wider mt-1">
                FastAPI Backend Engineer
              </p>

              <div className="w-full border-t border-surface-3 mt-6 pt-4 flex flex-col gap-2.5">
                <div className="flex justify-between text-xs">
                  <span className="text-text-secondary">Focus</span>
                  <span className="font-mono text-foreground font-semibold">
                    APIs &amp; Distributed Systems
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-text-secondary">Location</span>
                  <span className="font-mono text-foreground font-semibold">
                    Egypt (UTC+2)
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-text-secondary">Uptime</span>
                  <span className="font-mono text-accent font-semibold">
                    100% Available
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
