"use client";

import React from "react";
import { HeroUIProvider } from "@heroui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider className="dark min-h-screen text-foreground bg-background">
      {children}
    </HeroUIProvider>
  );
}
