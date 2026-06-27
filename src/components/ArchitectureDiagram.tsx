import React from "react";

interface ArchitectureLayer {
  name: string;
  details: string;
}

interface ArchitectureProps {
  architecture: {
    description: string;
    layers: ArchitectureLayer[];
  };
}

export default function ArchitectureDiagram({
  architecture,
}: ArchitectureProps) {
  return (
    <div className="bg-surface-0 rounded-lg border border-surface-3 p-6 md:p-8">
      <h3 className="text-lg font-bold tracking-tight text-ink font-display mb-3">
        Architecture Overview
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-8 max-w-[65ch]">
        {architecture.description}
      </p>

      {/* Layer Stack */}
      <div className="flex flex-col items-center gap-4 relative">
        {architecture.layers.map((layer, index) => {
          const isLast = index === architecture.layers.length - 1;

          return (
            <React.Fragment key={layer.name}>
              {/* Layer Card */}
              <div className="w-full max-w-xl group relative p-4 rounded bg-surface-1 border border-surface-3 hover:border-accent hover:bg-surface-2 transition-all duration-200">
                {/* Horizontal line indicator */}
                <div className="absolute left-0 top-0 h-full w-1 bg-accent/40 group-hover:bg-accent rounded-l" />

                <div className="pl-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-accent font-mono mb-1">
                    {layer.name}
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {layer.details}
                  </p>
                </div>
              </div>

              {/* Connecting Arrow */}
              {!isLast && (
                <div className="flex flex-col items-center py-1">
                  <div className="w-0.5 h-6 bg-surface-3" />
                  <svg
                    className="w-3 h-3 text-text-tertiary -mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
