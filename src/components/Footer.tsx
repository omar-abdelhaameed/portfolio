"use client";

import React from "react";
import Link from "next/link";
import { siteConfig, navLinks } from "@/data/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(href.replace("#", ""));
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-surface-0 border-t border-surface-3 py-12">
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-surface-3">
          {/* Logo / Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display font-bold text-lg text-ink">
              {siteConfig.name}
            </span>
            <span className="text-xs text-text-secondary mt-1">
              {siteConfig.title}
            </span>
          </div>

          {/* Quick links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollClick(e, link.href)}
                    className="text-xs font-semibold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-text-tertiary">
          <span>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <span className="font-mono text-accent">Next.js</span>
            <span>&amp;</span>
            <span className="font-mono text-accent">TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
