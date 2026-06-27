"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FirstRunLoader() {
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);

  const lines = [
    "ssh omar@backend-portfolio.dev",
    "Connecting to secure backend vault...",
    "Authentication successful (JWT via Hashing).",
    "Retrieving active FastAPI routers...",
    "Querying PostgreSQL (connection pool: 10/10)...",
    "Spinning up RabbitMQ message broker...",
    "Connecting Redis cache (rate-limiter: ACTIVE)...",
    "Compiling developer credentials... 100% OK.",
    "launch_site --mode=signal-dark",
  ];

  useEffect(() => {
    // Check if user already saw the loader in this session to prevent annoyance
    const hasSeen = sessionStorage.getItem("portfolio_loader_seen");
    if (hasSeen) {
      setLoading(false);
      return;
    }

    if (currentLine < lines.length) {
      const delay = currentLine === 0 ? 400 : currentLine === 2 ? 600 : 200;
      const timer = setTimeout(() => {
        setLogs((prev) => [...prev, lines[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const fadeTimer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("portfolio_loader_seen", "true");
      }, 1000);
      return () => clearTimeout(fadeTimer);
    }
  }, [currentLine]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-[#0d0e12] flex items-center justify-center p-4 font-mono select-none"
        >
          <div className="w-full max-w-xl bg-[#161821] rounded-lg border border-surface-3 shadow-2xl p-6 relative overflow-hidden">
            {/* Window control dots */}
            <div className="flex gap-1.5 mb-4 border-b border-surface-3 pb-3">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-[10px] text-text-tertiary ml-2 self-center font-sans tracking-wide">
                bash - omar@portfolio-vault:~
              </span>
            </div>

            {/* Logs area */}
            <div className="space-y-2 text-xs md:text-sm text-text-secondary min-h-[220px] flex flex-col justify-end">
              {logs.map((log, idx) => {
                const isCommand =
                  log.startsWith("ssh") || log.startsWith("launch_site");
                const isSuccess = log.includes("successful") || log.includes("OK.");

                return (
                  <div key={idx} className="flex gap-2">
                    {isCommand && <span className="text-accent font-bold">$</span>}
                    <span
                      className={`${
                        isCommand
                          ? "text-accent font-semibold"
                          : isSuccess
                          ? "text-emerald-400"
                          : "text-text-secondary"
                      }`}
                    >
                      {log}
                    </span>
                  </div>
                );
              })}
              {currentLine < lines.length && (
                <div className="flex items-center gap-1.5">
                  {lines[currentLine]?.startsWith("ssh") ||
                  lines[currentLine]?.startsWith("launch_site") ? (
                    <span className="text-accent font-bold">$</span>
                  ) : null}
                  <span className="w-2 h-4 bg-accent animate-pulse" />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
