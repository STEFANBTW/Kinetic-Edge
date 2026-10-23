# ADR 0001: Architecture & Feature Co-location Strategy

## Status
Accepted

## Context
The legacy Kinetic Edge Physiotherapy application was organized in a flat `src/components/` structure. To make the codebase scalable, maintainable, and readable for senior engineers and QA teams, we are refactoring to a feature-driven co-located directory structure.

## Decision
1. **Feature-Based Co-location**:
   - `src/features/landing/`: Contains components, hooks, types, and data related to the kinetic landing experience (Hero, Pillars, BodyMap, Team, Testimonials, Booking).
   - `src/shared/`: Generic reusable UI utilities (`cn()` helper, generic layout wrappers, icons, design tokens).
2. **Layer Separation**:
   - **View**: Pure layout and UI presentation.
   - **Logic & Hooks**: Encapsulated state management, slider transitions, interactive hot-spot handlers.
   - **Types**: Shared TypeScript interfaces co-located with their respective features or in `shared/types`.
3. **Strict Quality Gates**:
   - Strict TypeScript compiler settings (`strict: true`, `noUncheckedIndexedAccess: true`).
   - Clean, DRY Tailwind utility composition via `cn()` (clsx + tailwind-merge).

## Consequences
- Clean separation of concerns.
- Deleting or updating a feature isolates changes to a single directory.
- Fast onboarding and self-documenting code.
