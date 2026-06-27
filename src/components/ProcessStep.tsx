"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@heroui/react";
import type { ProcessStepData } from "@/lib/types";

interface ProcessStepProps {
  step: ProcessStepData;
}

export default function ProcessStep({ step }: ProcessStepProps) {
  const formattedNumber = String(step.number).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: step.number * 0.1 }}
      className="h-full"
    >
      <Card className="h-full card-3d border border-surface-3 bg-[#161821] p-0 overflow-hidden">
        <CardContent className="p-6 relative flex flex-col justify-between overflow-hidden">
          {/* Background oversized decorative number */}
          <span className="absolute -right-4 -bottom-6 font-display font-black text-7xl md:text-8xl text-accent/5 group-hover:text-accent/8 group-hover:-translate-y-1 transition-all select-none duration-300 pointer-events-none">
            {formattedNumber}
          </span>

          <div className="relative z-10">
            <span className="inline-flex items-center justify-center h-8 w-8 rounded bg-accent/10 text-accent text-sm font-bold font-mono mb-4 border border-accent/20">
              {step.number}
            </span>
            <h3 className="text-lg font-bold tracking-tight text-foreground font-display mb-2">
              {step.title}
            </h3>
            <p className="text-text-secondary text-xs leading-relaxed max-w-[40ch]">
              {step.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
