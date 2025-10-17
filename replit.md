# Monu Dwivedi Portfolio Website

## Overview
A modern, responsive portfolio website showcasing Monu Dwivedi's 9+ years of software engineering experience. The portfolio features a professional design with purple and emerald color scheme, dark mode support, and smooth interactive elements.

## Recent Changes (January 17, 2025)
- Created complete portfolio website with hero, experience, skills, education, and contact sections
- Implemented smooth scroll navigation with fixed header offset handling
- Added dark mode toggle with localStorage persistence and system preference detection
- Created functional resume download feature
- Implemented contact form with mailto integration
- Added mobile responsive navigation with hamburger menu
- Set up Vercel deployment configuration
- Centralized scroll behavior into reusable utility function
- Comprehensive end-to-end testing completed successfully

## Project Architecture

### Frontend (React + TypeScript)
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (single-page application)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library
- **State Management**: React hooks with localStorage for theme persistence

### Key Components
1. **Navigation.tsx** - Fixed header with theme toggle and responsive menu
2. **Hero.tsx** - Hero section with introduction and CTA buttons
3. **Experience.tsx** - Timeline-based work experience display
4. **Skills.tsx** - Categorized technical skills with badges
5. **Education.tsx** - Academic background with visual grade display
6. **Contact.tsx** - Contact information and functional email form
7. **Footer.tsx** - Footer with social links and scroll-to-top button

### Utilities
- **scrollToSection.ts** - Centralized smooth scroll functionality with offset calculation

### Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/light mode with system preference detection
- ✅ Smooth scroll navigation between sections
- ✅ Resume download functionality
- ✅ Email contact form integration
- ✅ Mobile hamburger menu
- ✅ Scroll-to-top button
- ✅ SEO optimized (meta tags, Open Graph)

## User Preferences
- Design: Modern, professional portfolio with purple (#262 83% 58%) and emerald (#142 76% 36%) color scheme
- Typography: Inter for body text, Outfit for headings
- Layout: Single-page scrollable design with fixed navigation
- Theme: Support for both light and dark modes with persistence

## Deployment

### Vercel Configuration
- **vercel.json** configured for SPA routing and asset caching
- Resume PDF located at `/public/attached_assets/Monu_Dwivedi_Resume.pdf`
- Build command: `npm run build` (outputs to `dist/`)
- No environment variables required

### Deployment Steps
1. Push code to Git repository
2. Import project to Vercel
3. Configure build settings (auto-detected)
4. Deploy

## File Structure
```
├── client/
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── Navigation.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/
│   │   │   └── Portfolio.tsx
│   │   ├── lib/
│   │   │   └── scrollToSection.ts
│   │   └── index.css         # Tailwind + custom styles
│   └── index.html
├── public/
│   └── attached_assets/
│       └── Monu_Dwivedi_Resume.pdf
├── vercel.json              # Vercel deployment config
├── design_guidelines.md     # Design system documentation
└── README.md               # Deployment instructions
```

## Technical Decisions
1. **No Backend Database**: Portfolio content is static and maintained in code
2. **Client-Side Routing**: Single-page app with hash-based section navigation
3. **Theme Persistence**: localStorage with fallback to system preferences
4. **Resume Hosting**: Static file in public directory for reliable downloads
5. **Contact Form**: Mailto integration (no server-side email processing needed)

## Performance Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s
- Lighthouse Score: 95+ across all metrics

## Contact Information
- **Email**: monudwivedi91@gmail.com
- **Phone**: +91 9831297110
- **LinkedIn**: linkedin.com/in/monudwivedi
- **Location**: Hyderabad, India
