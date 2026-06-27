"use client";

import React from "react";
import { Card, CardContent } from "@heroui/react";
import { motion } from "framer-motion";
import type { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const stepNumber = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="h-full card-3d border border-surface-3 bg-[#161821] overflow-hidden">
        <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
          {/* Accent Step Number */}
          <div className="flex-shrink-0 flex items-center md:items-start select-none">
            <span className="font-display font-black text-4xl md:text-5xl text-accent/15 tracking-tight">
              {stepNumber}
            </span>
          </div>

          {/* Details */}
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-accent p-2 rounded bg-accent/10 border border-accent/20">
                  {service.icon === "zap" && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {service.icon === "database" && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  )}
                  {service.icon === "cpu" && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  )}
                  {service.icon === "container" && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  )}
                </span>
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground font-display">
                  {service.title}
                </h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            {/* Bullet features list */}
            <ul className="space-y-2 border-t border-surface-3 pt-4 mt-auto">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-text-secondary">
                  <svg className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
