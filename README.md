# Kinetic Edge Physiotherapy

A modern, high-performance landing page application built with React, Vite, Tailwind CSS (v4), and GSAP for fluid kinetic animations.

## Architecture & Philosophy

This codebase is structured following a strict feature-based co-location strategy, designed for scalability and maintainability by senior engineering teams.

- **Feature Co-location**: Business logic, presentation components, data, and types live together inside `src/features/`.
- **Layer Separation**: Components are strictly presentational. Complex state and effects are encapsulated in custom hooks.
- **QA-Friendly**: Key user interactions have stable `data-testid` attributes.
- **Performance**: Top-level features are lazy-loaded via `React.lazy` and wrapped in `Suspense` and `ErrorBoundary`.

## Directory Structure

```text
src/
├── features/
│   └── landing/          # Core landing page feature
├── shared/
│   ├── components/       # Reusable components (e.g., ErrorBoundary)
│   └── utils/            # Shared utilities (e.g., cn())
├── App.tsx               # Root component with routing/lazy-loading
├── main.tsx              # React entry point
└── index.css             # Tailwind theme & base layer
```

## Available Scripts

- `npm run dev`: Starts the local development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs type-checking and linting.

## Testing Guidelines

For E2E or Integration tests, refer to the `data-testid` attributes applied across key interactive elements (e.g., `data-testid="hero-start-recovery-button"`, `data-testid="booking-form"`).
