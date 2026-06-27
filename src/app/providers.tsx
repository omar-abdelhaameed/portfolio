"use client";

import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark min-h-screen text-foreground bg-background">
      {children}
    </div>
  );
}
