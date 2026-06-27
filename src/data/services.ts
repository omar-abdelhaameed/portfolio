import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    title: "FastAPI Development",
    description:
      "REST APIs with validation, background tasks, auto-generated documentation, rate limiting, and maintainable layered architecture.",
    icon: "zap",
    features: [
      "Pydantic request/response validation",
      "Service and repository layer separation",
      "OpenAPI documentation out of the box",
    ],
  },
  {
    title: "Database & Authentication",
    description:
      "PostgreSQL with SQLAlchemy ORM, Alembic migrations, JWT authentication with bcrypt hashing, and role-based access control.",
    icon: "database",
    features: [
      "Alembic schema migrations",
      "JWT with refresh tokens and scoped access",
      "Row-level locking for data integrity",
    ],
  },
  {
    title: "AI & API Integrations",
    description:
      "LLM integrations with structured outputs, external REST APIs with error handling and timeouts, webhook consumers, and automation workflows.",
    icon: "cpu",
    features: [
      "Google Gemini and OpenAI integration",
      "External API clients with graceful fallback",
      "Context-aware AI responses with SaaS gating",
    ],
  },
  {
    title: "Testing & Deployment",
    description:
      "Automated test suites with pytest, Docker Compose orchestration, Nginx load balancing, CI-ready configurations, and structured logging.",
    icon: "container",
    features: [
      "Unit, integration, and E2E test coverage",
      "Multi-service Docker Compose setups",
      "Health checks and graceful error handling",
    ],
  },
];
