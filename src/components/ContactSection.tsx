"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/config";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) return;

    // Build the mailto link
    const subject = encodeURIComponent(`Backend Project Inquiry - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject Details:\n${message}`
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);

    // Reset after redirection
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-b border-surface-3 bg-surface-1"
    >
      <div className="max-w-[72rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Side (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-1 w-8 bg-accent rounded" />
                <span className="text-xs uppercase tracking-widest text-accent font-semibold">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink font-display mb-6">
                Start Your Implementation Plan
              </h2>

              <p className="text-base text-text-secondary leading-relaxed mb-8 max-w-[45ch]">
                {siteConfig.title === "FastAPI Backend Developer" && (
                  <>
                    Have a backend task that is blocking your project? Send me
                    the current problem, expected result, and technology stack.
                    I will reply with a practical implementation plan.
                  </>
                )}
              </p>
            </div>

            {/* Quick Contact Grid */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-text-tertiary">
                Direct Channels
              </h3>
              <div className="flex flex-col gap-3">
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{siteConfig.email}</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>

                {/* GitHub */}
                <a
                  href={siteConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.197 22 16.453 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <span>GitHub Repositories</span>
                </a>

                {/* WhatsApp */}
                {siteConfig.whatsappNumber && (
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber.replace(
                      /[+ ]/g,
                      ""
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.001-2.63-1.02-5.101-2.877-6.958C16.602 1.984 14.134.962 11.51.961 6.072.961 1.646 5.371 1.643 10.807c-.001 1.702.461 3.364 1.337 4.815l-.989 3.612 3.7.969zM15.5 13c-.27-.13-.59-.29-.68-.34-.09-.05-.16-.07-.23.03-.07.1-.28.34-.34.41-.06.07-.12.08-.21.04-.32-.15-.65-.29-.93-.49-.24-.17-.46-.35-.61-.55-.07-.1-.13-.19-.07-.29.07-.1.14-.19.2-.28.06-.09.08-.15.12-.22.04-.07.02-.13-.01-.18-.03-.05-.23-.55-.32-.76-.08-.2-.17-.17-.23-.17H11c-.08 0-.23.03-.35.15-.12.12-.46.45-.46 1.1s.47 1.28.54 1.37c.07.09.93 1.42 2.25 1.99.31.13.56.22.75.28.31.1.6.09.83.05.25-.04.77-.31.88-.61.11-.3.11-.56.08-.61-.03-.05-.1-.08-.21-.13z" />
                    </svg>
                    <span>WhatsApp Chat</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Form Side (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-surface-0 p-6 md:p-8 rounded-lg border border-surface-3">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-surface-1 border border-surface-3 rounded text-sm text-text-primary focus:border-accent focus:bg-surface-0 transition-colors focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 bg-surface-1 border border-surface-3 rounded text-sm text-text-primary focus:border-accent focus:bg-surface-0 transition-colors focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5"
                  >
                    Problem Description
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    placeholder="Provide your backend stack, the current problem, and expected result."
                    className="w-full px-4 py-3 bg-surface-1 border border-surface-3 rounded text-sm text-text-primary focus:border-accent focus:bg-surface-0 transition-colors focus:outline-none resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-surface-0 bg-accent hover:bg-accent-hover rounded shadow-sm transition-all cursor-pointer focus:outline-none"
                  >
                    {submitted ? "Redirecting..." : "Send Request"}
                  </button>
                  <p className="mt-3 text-[10px] text-text-tertiary text-center leading-relaxed">
                    Note: Submitting this form opens your system mail client.
                    If you prefer direct messaging, click one of the social
                    channels on the left.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
