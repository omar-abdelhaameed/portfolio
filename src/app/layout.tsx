import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Omar AbdElhameed | FastAPI Backend Developer",
  description:
    "FastAPI backend developer specializing in Python APIs, PostgreSQL, authentication, AI integrations, external API connections, testing, and Dockerized deployments.",
  keywords: [
    "FastAPI",
    "Python",
    "PostgreSQL",
    "SQLAlchemy",
    "Docker",
    "RabbitMQ",
    "Redis",
    "AI integration",
    "Backend Developer",
  ],
  authors: [{ name: "Omar AbdElhameed" }],
  openGraph: {
    title: "Omar AbdElhameed | FastAPI Backend Developer",
    description:
      "FastAPI backend developer specializing in Python APIs, PostgreSQL, authentication, AI integrations, external API connections, testing, and Dockerized deployments.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
