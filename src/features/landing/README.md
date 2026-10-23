# Feature: Landing

This module encapsulates the entire "Kinetic Edge Physiotherapy" landing experience.

## Components
- **Navbar**: Main navigation with scroll progress.
- **Hero**: Initial high-impact entry point.
- **Pillars**: Methodology display.
- **BodyMap**: Interactive SVG diagram for condition areas.
- **Team**: Horizontal slider for team members.
- **Testimonials**: Mosaic-style grid.
- **Booking**: Lead capture form.

## Data & Hooks
- `data/landingData.ts`: Centralizes static content (team, testimonials, pillars).
- `hooks/useTeamSlider.ts`: Handles state and GSAP transitions for the team carousel.
- `hooks/useBodyMap.ts`: Manages active condition area selection.
- `hooks/useBookingForm.ts`: Handles form state and submission transition logic.
