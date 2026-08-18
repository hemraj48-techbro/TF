# Implementation Plan — TiffinFinder One-Page Pitch Site

Building a visually stunning, ultra-premium, dark-themed one-page pitch site for **TiffinFinder** — Maharashtra's first hyperlocal tiffin subscription platform connecting daily meal seekers with local home cooks in Nashik and Tier-2 cities.

Designed specifically for **Eureka! 2026 IIT Bombay E-Cell** judges, evaluators, and angel investors.

---

## Technical Approach & Design System

- **Design Aesthetic**: Dark pitch deck vibe (`#0B0C10` obsidian background, `#12141C` card surface, `#FF6B00` vibrant warm orange glow accent, `#FF9D00` secondary gold highlight, `#00E5FF` teal data accent).
- **Typography**: Inter / Outfit bold typography with clear hierarchy, metallic gradients, and high contrast.
- **Glassmorphic UI**: Multi-layered backdrop blurs (`backdrop-blur-xl`), subtle glowing borders (`border-white/10` and `hover:border-[#FF6B00]/40`), animated glow effects, and modern card elevated surfaces.
- **Interactive Presentation Components**:
  - **Hero Deck Header**: IIT Bombay E-Cell Eureka! 2026 Pitch Badge, Live Pitch Mode switcher, and quick-scroll navigator.
  - **Problem vs Solution Split**: Interactive before/after friction vs innovation toggle.
  - **Interactive Nashik Map Discovery Mockup**: Live SVG/CSS simulated map showing Nashik zones (College Road, Canada Corner, Gangapur Road, Panchavati, Nashik Road) with clickable provider pins and popups.
  - **3-Step "How It Works" Flow**: Step indicator with interactive preview cards (Map Discovery, Subscription & UPI Pay, Doorstep Delivery & Rating).
  - **Market Opportunity Dashboard**: Animated counter numbers, TAM (₹7.5L Cr) / SAM (₹50 Cr/mo Nashik) / SOM breakdown, interactive market size calculator.
  - **Business Model & Unit Economics Simulator**: Interactive revenue share calculator comparing TiffinFinder's 8-12% commission vs Swiggy's 25-30%.
  - **Competitive Advantage Matrix**: Side-by-side comparison table highlighting TiffinFinder vs Swiggy/Zomato vs Traditional WhatsApp tiffins.
  - **Interactive Growth Roadmap (2025–2028)**: Clickable roadmap cards tracking Nashik launch → Dominate Nashik → Aurangabad & Nagpur → Pan-India ₹500 Cr ARR.
  - **Eureka! 2026 Judge Action Hub**: Contact founder modal, pitch deck download trigger, judge rating widget, investor inquiry form.

---

## User Review Required

> [!IMPORTANT]
> **Pitch Target**: This pitch site is styled with pitch deck aesthetics tailored for **Eureka! 2026 IIT Bombay E-Cell**. It prioritizes visual storytelling, financial numbers, competitive moats, and investor metrics over standard e-commerce features.

---

## Proposed Changes

### Project Structure & Component Updates

#### [MODIFY] [App.tsx](file:///C:/Users/Admin/.gemini/antigravity/scratch/tiffin-finder/src/App.tsx)
- Transform main application into a premier pitch landing experience or add a dedicated Pitch Deck mode toggle header.
- Render all 8 pitch sections with animations, high visual polish, dark theme styling, and pitch interactions.

#### [NEW] [PitchSite.tsx](file:///C:/Users/Admin/.gemini/antigravity/scratch/tiffin-finder/src/components/pitch/PitchSite.tsx)
- Core Pitch Deck layout containing:
  1. **Navbar**: Logo, Eureka! 2026 Badge, section jump links, "Pitch Deck Mode" toggle.
  2. **Hero Section**: Value proposition, startup pitch summary, key stats ticker, action buttons.
  3. **Problem Statement**: Highlighting 4 core pain points (Expensive restaurant meals ₹150-300, invisible local cooks, zero ordering platform in Nashik, word-of-mouth trap).
  4. **The Solution**: 7 key feature cards (Hyperlocal map, Weekly/Monthly plans, UPI payment, Real-time tracking, Pause/Skip wallet, Provider dashboard, Night tiffin mode) + Interactive Map Mockup.
  5. **How It Works**: 3-step interactive customer & provider flow.
  6. **Market Opportunity (TAM/SAM/SOM)**: Nashik metrics (1.6L+ customers, ₹50 Cr/mo TAM, 5+ Tier-2 cities, ₹7.5L Cr India market).
  7. **Business Model**: Commission (8-12%), subscriptions (₹199-499), featured listings, delivery fee + live revenue simulator.
  8. **Competitive Advantage**: Feature matrix vs Swiggy/Zomato & WhatsApp vendors.
  9. **Future Vision**: 4-phase timeline (2025-2028) leading to ₹500 Cr ARR.
  10. **Eureka! 2026 Evaluator CTA**: Judge action hub, deck summary, team contact, interactive feedback/vote widget.

#### [NEW] [PitchComponents.tsx](file:///C:/Users/Admin/.gemini/antigravity/scratch/tiffin-finder/src/components/pitch/PitchComponents.tsx)
- Modular pitch components:
  - `MapDiscoveryPreview`: Interactive simulated Nashik map with live provider pins (Canada Corner Home Kitchen, College Road Tiffins, etc.).
  - `RevenueCalculator`: Interactive slider for meal price, daily orders, and commission savings.
  - `ComparisonMatrix`: Visual breakdown of TiffinFinder vs traditional aggregators.
  - `RoadmapTimeline`: Animated timeline cards for 2025–2028.
  - `JudgeActionModal`: Contact & Pitch evaluation modal for E-Cell judges.

#### [MODIFY] [index.css](file:///C:/Users/Admin/.gemini/antigravity/scratch/tiffin-finder/src/index.css)
- Add dark theme CSS variables, custom gradient text classes, glassmorphism utilities, glow effects, and smooth scroll behavior.

---

## Verification Plan

### Automated Build & Lint Check
- Run `npm run build` inside `C:\Users\Admin\.gemini\antigravity\scratch\tiffin-finder` to ensure zero TypeScript and compilation errors.

### Manual Verification
- Run `npm run dev` to start the local dev server.
- Verify visual aesthetics on dark background, orange accent (`#FF6B00`), glassmorphic styling, responsive layout, and interactive calculators/maps.
