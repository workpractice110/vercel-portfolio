# Portfolio Design Guidelines for Monu Dwivedi

## Design Approach
**Reference-Based Approach** drawing inspiration from modern developer portfolios and tech platforms like Linear, Vercel, and GitHub. The design will balance professional credibility with contemporary visual appeal to create a memorable impression for recruiters and potential employers.

## Core Design Principles
- **Bold Professionalism**: Strong visual hierarchy with confident typography
- **Tech-Forward**: Modern, clean aesthetics that reflect technical expertise
- **Scannable Content**: Information-dense but easy to digest through strategic visual breaks
- **Interactive Engagement**: Subtle micro-interactions that feel polished

---

## Color Palette

### Dark Mode (Primary)
- **Background**: 222 47% 11% (rich dark navy-gray)
- **Surface**: 222 47% 15% (elevated cards)
- **Primary Brand**: 262 83% 58% (vibrant purple - represents innovation)
- **Accent**: 142 76% 36% (emerald green - represents growth/success)
- **Text Primary**: 210 40% 98%
- **Text Secondary**: 215 20% 65%

### Light Mode
- **Background**: 0 0% 100%
- **Surface**: 220 13% 97%
- **Primary Brand**: 262 83% 58% (same purple)
- **Accent**: 142 71% 45%
- **Text Primary**: 222 47% 11%
- **Text Secondary**: 215 16% 47%

---

## Typography

### Font Families
- **Primary**: 'Inter' (Google Fonts) - for body text, descriptions, technical content
- **Headings**: 'Outfit' (Google Fonts) - modern, geometric feel for section titles and name

### Type Scale
- **Hero Name**: text-6xl md:text-7xl font-bold tracking-tight
- **Section Headings**: text-3xl md:text-4xl font-bold
- **Job Titles**: text-xl md:text-2xl font-semibold
- **Body Text**: text-base md:text-lg leading-relaxed
- **Labels/Meta**: text-sm font-medium uppercase tracking-wider

---

## Layout System

### Spacing Primitives
Use Tailwind units: **2, 4, 6, 8, 12, 16, 20, 24, 32**
- Component padding: p-6 or p-8
- Section spacing: py-16 md:py-24 lg:py-32
- Card gaps: gap-6 or gap-8
- Button padding: px-6 py-3 or px-8 py-4

### Container Strategy
- Max width: max-w-6xl mx-auto
- Side padding: px-6 md:px-8
- Grid columns: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 for skills/features

---

## Component Library

### Navigation
- **Sticky header** with blur backdrop (backdrop-blur-lg bg-background/80)
- Logo/name on left, navigation links on right
- Mobile: Hamburger menu with slide-in drawer
- Links: ["About", "Experience", "Skills", "Education", "Contact"]

### Hero Section
- **Full-width hero** with gradient overlay (purple to dark)
- **Large professional headshot** (circular, 200-250px diameter) positioned left or center
- Name in massive typography (7xl-8xl)
- Animated title with role rotation ("Senior Software Engineer", "Microservices Architect", "Team Leader")
- Primary CTA: "Download Resume" + Secondary: "Get in Touch"
- Background: Abstract gradient mesh or subtle tech-pattern overlay
- Height: min-h-screen with content vertically centered

### Experience Timeline
- **Vertical timeline design** with connecting line (left side)
- Each job: Card with company logo placeholder, date range badge, role title, responsibilities as bullet points
- Alternating card emphasis with subtle hover lift effect
- Timeline dots with brand color highlights
- Use 2-column layout on desktop (timeline + content)

### Skills Section
- **Multi-category grid layout**: "Languages & Frameworks", "Databases", "Tools & Platforms"
- Skill cards with icons (from Heroicons or Font Awesome)
- Each card: Icon, skill name, subtle gradient border on hover
- 3-column grid on desktop, 2 on tablet, 1 on mobile
- Badge-style tags for additional technologies

### Education Card
- Single prominent card with university logo placeholder
- Degree details with graduation year
- Grade percentage with visual bar or circular progress
- Subtle glow effect around card

### Contact Section
- **2-column layout**: Contact info + Contact form
- Left: Email, Phone, Location, LinkedIn with icons
- Right: Simple form (Name, Email, Message) with gradient submit button
- Background: Subtle gradient accent
- Include social proof: "Available for opportunities" badge

### Footer
- Clean, minimal with copyright and social links
- Smooth scroll-to-top button (appears after scroll)

---

## Images

### Hero Section Image
**Primary Hero Image**: Professional headshot or tech-themed illustration
- **Placement**: Positioned on left side with content on right (desktop), centered on mobile
- **Style**: Circular frame with subtle glow/border effect
- **Size**: 200-250px diameter
- **Alternative**: If no headshot, use abstract geometric pattern or gradient mesh background

### Company Logos (Experience Section)
- Placeholder boxes (100x100px) for Mashreq, DBS Bank, Deloitte, Cognizant
- Use subtle background in card color

### Background Patterns
- Hero: Gradient mesh (purple to dark blue) with subtle dot grid overlay
- Skills section: Light geometric pattern in background

---

## Animations
Use **sparingly** for polish:
- Hero: Fade-in name and title with stagger (0.2s delay)
- Cards: Subtle lift on hover (translateY -2px, shadow increase)
- Scroll-triggered: Fade-in sections as they enter viewport (Intersection Observer)
- No continuous animations - only state changes

---

## Accessibility
- High contrast ratios (WCAG AA minimum)
- Focus visible states on all interactive elements
- Semantic HTML with proper heading hierarchy
- Skip to main content link
- Dark mode toggle in header (respecting system preference)

---

## Key Differentiators
- **Timeline design** for experience (not generic cards)
- **Animated role titles** in hero (rotating through specializations)
- **Skill categorization** with icon-based cards
- **Professional color scheme** (purple/emerald) distinct from typical blue portfolios
- **Download resume CTA** prominently featured

This design creates a modern, memorable portfolio that showcases technical expertise while maintaining professional credibility suitable for senior engineering roles.