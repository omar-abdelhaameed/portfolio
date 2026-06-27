import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  id,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      id={id}
      className={`mb-12 md:mb-16 scroll-mt-24 ${
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-3xl"
      }`}
    >
      <div
        className={`flex items-center gap-3 mb-3 ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span className="h-1 w-8 bg-accent rounded" />
        <span className="text-xs uppercase tracking-widest text-accent font-semibold">
          Omar AbdElhameed
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink font-display">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-text-secondary leading-relaxed max-w-[65ch]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
