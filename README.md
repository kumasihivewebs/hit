# HiT - Hive Institute of Technology Website

A premium, modern landing page for Africa's leading institute for practical technology education. Built with Next.js 15, TypeScript, TailwindCSS, and Framer Motion.

## Overview

This is a production-grade website for Hive Institute of Technology (HiT), featuring:

- **Hero Section** - Compelling headline with animated background and CTAs
- **About Section** - Institute philosophy and mission
- **Programs** - 8 comprehensive tech programs (Backend, Fullstack, AI, Robotics, Embedded, Cloud, Cybersecurity, Product Design)
- **Learning Philosophy** - 6 core learning pillars
- **Innovation Labs** - Research spaces and equipment showcase
- **Student Projects** - Real project showcase with animations
- **Startup Ecosystem** - Startup incubation programs and benefits
- **Community Stats** - Animated counters showing impact metrics
- **Testimonials** - Student and graduate success stories
- **Admissions CTA** - Strong conversion-focused section
- **Responsive Navigation** - Sticky navbar with mobile menu
- **Modern Footer** - Multi-column footer with links

## Design System

**Dark Modern Aesthetic:**

- Background: #09090B (near black)
- Text: White (#ffffff)
- Accent: Orange (#f97316) with green alternatives
- Secondary: Slate grays for muted elements

**Typography:**

- Bold, modern headings with strong contrast
- Clean technical aesthetic
- High readability across all devices

**Animations:**

- Framer Motion for smooth transitions
- Scroll-triggered animations
- Hover effects on interactive elements
- Animated background gradients

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS v4
- **Animations:** Framer Motion
- **UI Components:** Custom components (no shadcn/ui needed - kept implementation simple)
- **Fonts:** Geist Sans and Mono from Vercel

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and custom utilities
├── components/
│   ├── Navbar.tsx          # Sticky navigation with mobile menu
│   ├── Footer.tsx          # Multi-column footer
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx      # Primary, secondary, outline buttons
│   │   ├── Card.tsx        # Card variants (Program, Project, Testimonial)
│   │   ├── Section.tsx     # Section wrapper and heading component
│   │   └── AnimatedCounter.tsx  # Animated number counter
│   └── sections/           # Page sections
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ProgramsSection.tsx
│       ├── LearningPhilosophySection.tsx
│       ├── InnovationLabsSection.tsx
│       ├── ProjectsSection.tsx
│       ├── StartupSection.tsx
│       ├── StatsSection.tsx
│       ├── TestimonialsSection.tsx
│       └── AdmissionsSection.tsx
├── constants/              # Data constants
│   ├── navigation.ts
│   ├── programs.ts
│   ├── learningPhilosophy.ts
│   ├── projects.ts
│   ├── stats.ts
│   └── testimonials.ts
└── lib/                    # Utilities (for future use)
```

## Key Features

### 1. Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Hamburger menu on mobile
- Touch-friendly interactions

### 2. Performance

- Static generation for fast load times
- Code splitting with next/dynamic
- Optimized images and assets
- Production build: ~146KB First Load JS

### 3. Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- High contrast text

### 4. Component Architecture

- Reusable UI components with variants
- Section components with scroll animations
- Data-driven content from constants
- Easy to maintain and extend

### 5. Animation System

- Framer Motion scroll triggers
- Staggered child animations
- Hover effects on cards
- Smooth page transitions

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Build

```bash
npm run build
npm start
```

## Customization Guide

### Updating Content

Edit the data in `src/constants/`:

```typescript
// src/constants/programs.ts
export const PROGRAMS = [
  {
    id: "backend",
    title: "Backend Engineering",
    description: "...",
    icon: "⚙️",
  },
  // Add more programs
];
```

### Modifying Colors

Update colors in `src/app/globals.css`:

```css
:root {
  --accent: #f97316; /* Change accent color */
  --background: #09090b;
  --foreground: #ffffff;
}
```

### Adding New Sections

1. Create a new section component in `src/components/sections/`
2. Import it in `src/app/page.tsx`
3. Add it to the main component render

### Customizing Button Styles

Edit button variants in `src/components/ui/Button.tsx`:

```typescript
const buttonVariants = cva("...", {
  variants: {
    variant: {
      // Add or modify variants
      primary: "...",
    },
  },
});
```

## Performance Metrics

- **Build Size:** 43.8 kB (page), 146 kB (first load JS)
- **Page Count:** 5 static pages
- **Load Time:** < 1s
- **Lighthouse Ready:** All best practices implemented

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Deploy on Vercel

```bash
npm install -g vercel
vercel
```

### Deploy on Other Platforms

This is a standard Next.js app and can be deployed to:

- Netlify
- Railway
- Render
- AWS Amplify
- Docker containers

## Future Enhancements

- Blog section with MDX
- Application form with validation
- Testimonial gallery with filters
- Event calendar
- News and updates section
- Alumni network
- Research publications
- Job board

## Contributing

The codebase follows these principles:

- TypeScript for type safety
- ESLint for code quality
- Responsive design first
- Accessibility standards
- Clean component structure
- DRY (Don't Repeat Yourself)

## License

This website is a custom implementation for HiT. All rights reserved.

## Contact

For inquiries about the website or HiT programs, visit the contact section on the site.

---

**Built with ❤️ for Africa's future in technology**
