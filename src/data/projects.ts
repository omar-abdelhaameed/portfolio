import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "real-time-chat-system",
    title: "Queue-Based Real-Time Chat with Horizontal Scaling",
    summary:
      "A real-time chat platform built on FastAPI WebSockets with RabbitMQ message queuing, Redis Pub/Sub for cross-instance delivery, and PostgreSQL row-level locking for strict message ordering. Deployed as 7 Docker services with Nginx load balancing across multiple FastAPI instances.",
    problem:
      "Simple WebSocket chat implementations break under scale: messages arrive out of order, reconnecting users miss messages, and adding a second server instance means users on different instances cannot communicate. Building a chat system that handles these production realities requires careful architectural decisions around message persistence, ordering, and cross-instance synchronization.",
    solution:
      "Designed a queue-based message pipeline: WebSocket messages are published to RabbitMQ, consumed by a dedicated worker that locks the room row in PostgreSQL (SELECT FOR UPDATE) to assign monotonically increasing sequence numbers, then broadcasts via Redis Pub/Sub to all FastAPI instances. This decouples message ingestion from persistence, guarantees ordering, and enables horizontal scaling. Reconnecting clients send their last known sequence number and receive any missed messages before live events resume.",
    features: [
      "Queue-based message pipeline with RabbitMQ for decoupled ingestion and persistence",
      "Strict message ordering via PostgreSQL row-level locking and sequence numbers",
      "Horizontal scaling with Redis Pub/Sub cross-instance broadcast, proven by cross-instance smoke tests",
      "WebSocket reconnect recovery with sequence-based missed message replay",
      "Typed WebSocket protocol with events for messaging, typing indicators, and read receipts",
      "JWT authentication with access/refresh tokens (15 min / 7 day expiry)",
      "Direct messaging with idempotent room creation via sorted UUID direct keys",
      "Redis-based rate limiting (10 messages/second/user, fail-open design)",
      "Profile photo upload with file type and size validation (2 MB limit)",
      "User search with case-insensitive pattern matching",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL 16",
      "SQLAlchemy",
      "Alembic",
      "Redis",
      "RabbitMQ",
      "WebSocket",
      "Docker Compose",
      "Nginx",
      "JWT",
      "pytest",
      "Playwright",
      "React",
    ],
    technicalDecisions: [
      {
        title: "RabbitMQ over direct database writes",
        description:
          "Messages are published to a RabbitMQ queue rather than written directly to PostgreSQL from the WebSocket handler. A separate worker process consumes from the queue and handles persistence. This decouples the real-time connection from database latency and allows the worker to serialize writes with row-level locking.",
      },
      {
        title: "Row-level locking for sequence assignment",
        description:
          "The message worker locks the room row (SELECT FOR UPDATE) before incrementing the sequence number. This prevents race conditions when multiple messages arrive simultaneously and guarantees a monotonically increasing, gap-free sequence per room.",
      },
      {
        title: "Redis Pub/Sub for cross-instance delivery",
        description:
          "After persisting a message, the worker publishes a 'message.created' event to Redis. Every FastAPI instance subscribes to this channel and broadcasts to its local WebSocket connections. This enables horizontal scaling without sticky sessions.",
      },
      {
        title: "Repository pattern with service layer",
        description:
          "Data access is isolated in repository classes, business rules live in services, and HTTP/WebSocket handlers only orchestrate. This makes the codebase testable with SQLite in-memory databases while running PostgreSQL in production.",
      },
      {
        title: "Client message ID for idempotency",
        description:
          "Clients generate a unique message ID before sending. A database constraint on (sender_id, client_message_id) prevents duplicate messages if retransmission occurs during reconnection.",
      },
    ],
    testing: {
      summary:
        "31+ tests across unit, integration, WebSocket, cross-instance, and end-to-end layers using pytest and Playwright.",
      details: [
        "Auth tests: registration, duplicate detection, login validation, token refresh",
        "Room and message tests: creation, membership, join idempotency, message ordering, read state non-regression",
        "Profile and people tests: field validation, photo upload, username uniqueness, search, room rename authorization",
        "WebSocket tests: invalid token rejection (4401), non-member rejection (4403), connection handshake, message queuing",
        "Message worker tests: sequence assignment, deduplication, room-scoped sequences, non-member rejection",
        "Live smoke test: full registration → login → room creation → WebSocket → message delivery flow",
        "Cross-instance smoke test: message sent from fastapi-1, verified on fastapi-2",
        "Playwright E2E: room creation, two-user messaging, direct chat via people search",
      ],
    },
    improvements: [
      "Move profile photo storage from container filesystem to object storage (S3 or GCS)",
      "Add server-backed push notifications for mobile and offline users",
      "Implement message editing and deletion with event propagation",
      "Add end-to-end encryption for direct messages",
      "Set up CI/CD pipeline with automated test execution on pull requests",
    ],
    githubUrl: "https://github.com/omar-abdelhaameed/chat_system",
    liveUrl: null,
    images: [
      {
        src: "/screenshots/chat-system/production-desktop.png",
        alt: "Chat system desktop interface showing room list and message thread",
      },
      {
        src: "/screenshots/chat-system/production-mobile.png",
        alt: "Chat system mobile layout with responsive navigation",
      },
      {
        src: "/screenshots/chat-system/redesign-desktop.png",
        alt: "Chat system redesigned desktop view with dark theme",
      },
      {
        src: "/screenshots/chat-system/room-settings-owner.png",
        alt: "Room settings panel showing member management for room owner",
      },
    ],
    architecture: {
      description:
        "Seven Docker services orchestrated with Docker Compose. Two FastAPI instances sit behind an Nginx load balancer. Messages flow through RabbitMQ to a dedicated worker for ordered persistence, then fan out via Redis Pub/Sub to all connected instances.",
      layers: [
        {
          name: "Client",
          details:
            "React SPA with custom WebSocket client, exponential backoff reconnection, and optimistic message rendering",
        },
        {
          name: "Load Balancer",
          details:
            "Nginx 1.27 with WebSocket upgrade headers and upstream health checks across two FastAPI instances",
        },
        {
          name: "API / WebSocket",
          details:
            "FastAPI with JWT auth, REST endpoints for rooms/users/messages, and WebSocket handlers with typed event protocol",
        },
        {
          name: "Message Queue",
          details:
            "RabbitMQ with durable queue for incoming messages, consumed by a separate worker process",
        },
        {
          name: "Worker",
          details:
            "Python process that reads from RabbitMQ, acquires PostgreSQL row lock, assigns sequence number, persists message, and publishes to Redis",
        },
        {
          name: "Cache / Pub/Sub",
          details:
            "Redis for rate limiting (INCR + EXPIRE), typing indicator broadcast, and cross-instance message delivery via Pub/Sub channels",
        },
        {
          name: "Database",
          details:
            "PostgreSQL 16 with 6 tables, unique constraints for idempotency, and Alembic-managed schema migrations",
        },
      ],
    },
  },
  {
    slug: "macrometrics",
    title: "AI-Powered Nutrition Tracking with Bilingual Food Search",
    summary:
      "A full-stack fitness and nutrition tracking application with an AI coach powered by Google Gemini, a hybrid food search engine combining a local Egyptian food database with the USDA FoodData Central API, and automated macro calculation using clinically-backed formulas.",
    problem:
      "Fitness tracking apps rarely support Arabic-speaking users or regional Middle Eastern foods. Existing solutions lack intelligent coaching that adapts to a user's actual intake history, and their food databases miss common Egyptian dishes. Users need a tracker that speaks their language, knows their food, and provides actionable nutrition advice based on real data.",
    solution:
      "Built a FastAPI backend with a nutrition engine using the Mifflin-St Jeor equation for BMR calculation, TDEE estimation, and bodybuilder-grade macro splits (2.2g/kg protein, 25% fats, remainder carbs). The food search is a hybrid system: a curated database of 80+ Egyptian and Middle Eastern foods provides instant results, with automatic fallback to the USDA FoodData Central API for broader coverage. An AI coach powered by Google Gemini receives the user's full context (today's macros, 7-day history, plateau detection status, fitness goal) and responds in Arabic or English.",
    features: [
      "Automated nutrition engine: BMR → TDEE → macro targets, recalculated when body stats or goals change",
      "AI nutrition coach with Google Gemini (2.5 Flash), context-aware prompting, and rule-based fallback",
      "Hybrid food search: 80+ local Egyptian foods (zero latency) with USDA FoodData Central API fallback",
      "Arabic/English bilingual support across food search, AI chat, and food names",
      "Weight plateau detection algorithm with refeed day suggestions",
      "Daily macro tracking with consumed/target/remaining calculations",
      "Analytics dashboard: 30-day weight trends, macro composition charts, logging streaks",
      "JWT authentication with bcrypt hashing (12 rounds) and rate limiting via slowapi",
      "SaaS-ready architecture with Pro/Free tier gating for AI features",
      "Supplement tracking for 10 pre-defined supplements with daily dosage logging",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy 2.0",
      "Alembic",
      "Pydantic 2.9",
      "Google Gemini API",
      "USDA FoodData Central API",
      "httpx",
      "JWT",
      "slowapi",
      "pytest",
      "React",
    ],
    technicalDecisions: [
      {
        title: "Hybrid food search with priority database",
        description:
          "Rather than relying solely on the USDA API (which has latency and lacks Middle Eastern foods), a curated local database of 80+ Egyptian foods is searched first. Only if the query is not satisfied locally does the system fall back to the USDA API. Results are deduplicated and merged, giving users the speed of local data with the breadth of USDA.",
      },
      {
        title: "Context-aware AI prompting",
        description:
          "The AI chat endpoint constructs a rich prompt including today's macros, 7-day intake history, plateau detection status, user's fitness goal, and SaaS tier. This allows the Gemini model to give specific, actionable advice rather than generic nutrition tips. A rule-based fallback handles cases when the API is unavailable.",
      },
      {
        title: "Automatic macro recalculation",
        description:
          "When a user updates their weight, activity level, or fitness goal, the nutrition engine automatically recalculates BMR, TDEE, and macro targets. This keeps the tracking accurate without requiring the user to manually adjust targets.",
      },
      {
        title: "Arabic language detection via Unicode ranges",
        description:
          "The backend detects Arabic text input by checking Unicode character ranges. Arabic queries are passed through a translation layer (60+ Egyptian food mappings) before searching the English-centric USDA database, making bilingual search transparent to the user.",
      },
      {
        title: "Rate limiting per endpoint type",
        description:
          "slowapi is configured with different rate limits by endpoint sensitivity: auth endpoints at 5/min, search at 30/min, AI chat at 10/min, and general endpoints at 60/min. This prevents abuse while keeping legitimate usage smooth.",
      },
    ],
    testing: {
      summary:
        "15 tests covering authentication flows and schema validation using pytest with async support.",
      details: [
        "Auth tests: valid registration, invalid email rejection, password length validation, age range validation, login success and failure paths",
        "Schema validation tests: valid meal creation, date format validation, meal type validation, empty ingredient rejection, daily log patching, notes length limits, calorie override bounds, user update validation, activity level validation, weight bounds checking",
      ],
    },
    improvements: [
      "Add Docker configuration for containerized deployment",
      "Expand test coverage to include AI chat integration tests and meal logging flows",
      "Add barcode scanning for packaged food lookup",
      "Implement meal planning with AI-generated weekly meal suggestions",
      "Add WebSocket support for real-time macro updates across devices",
    ],
    githubUrl: "https://github.com/omar-abdelhaameed/macrometrics",
    liveUrl: null,
    images: [],
    architecture: {
      description:
        "A layered FastAPI backend with 8 routers, a services layer for business logic (nutrition engine, USDA client, translator), and SQLAlchemy ORM models backed by PostgreSQL. The frontend is a React SPA communicating through a centralized API client.",
      layers: [
        {
          name: "API Layer",
          details:
            "8 FastAPI routers: auth, users, meals, daily summary, ingredients, analytics, AI chat, supplements. Rate limited with slowapi.",
        },
        {
          name: "Services",
          details:
            "Nutrition engine (BMR/TDEE/macro calculation), USDA API client (async httpx with timeouts), Arabic translator, and AI chat service with Gemini integration",
        },
        {
          name: "Data Access",
          details:
            "SQLAlchemy 2.0 ORM with 8 models: User, Ingredient, DailyLog, Meal, MealIngredient, Supplement, UserSupplement, ChatHistory",
        },
        {
          name: "Database",
          details:
            "PostgreSQL with Alembic migrations, including standalone migration scripts for schema evolution (Golden Food columns, SaaS columns)",
        },
        {
          name: "External APIs",
          details:
            "Google Gemini (AI coach), USDA FoodData Central (food search). Both use async HTTP clients with error handling and timeouts.",
        },
      ],
    },
  },
];
