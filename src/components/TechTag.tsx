import React from "react";

interface TechTagProps {
  name: string;
}

export default function TechTag({ name }: TechTagProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-surface-2 text-text-secondary border border-surface-3 font-mono hover:border-accent hover:text-accent transition-colors">
      {name}
    </span>
  );
}
