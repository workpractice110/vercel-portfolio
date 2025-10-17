# Monu Dwivedi - Portfolio Website

A modern, responsive portfolio website showcasing 9+ years of software engineering experience in Java development, microservices architecture, and team leadership.

## Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark Mode Support**: Toggle between light and dark themes
- **Smooth Navigation**: Scroll animations and interactive UI
- **Professional Layout**: Clean, modern design with purple and emerald color scheme
- **Downloadable Resume**: One-click PDF download
- **Contact Form**: Direct email integration for easy communication

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui components
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel

## Quick Start

### Prerequisites
- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5000`

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click "Deploy"

### Environment Variables

No environment variables are required for this portfolio site.

## Project Structure

```
├── client/               # Frontend application
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   └── lib/          # Utilities and configurations
├── public/               # Static assets
│   └── attached_assets/  # Resume PDF
├── server/               # Backend (minimal, for potential future use)
├── vercel.json          # Vercel configuration
└── package.json         # Dependencies and scripts
```

## Customization

### Update Personal Information

Edit the following files to customize the portfolio:

1. **Hero Section**: `client/src/components/Hero.tsx`
2. **Experience**: `client/src/components/Experience.tsx`
3. **Skills**: `client/src/components/Skills.tsx`
4. **Education**: `client/src/components/Education.tsx`
5. **Contact**: `client/src/components/Contact.tsx`

### Change Color Scheme

Colors are defined in `client/src/index.css`. The current scheme uses:
- Primary: Purple (#262 83% 58%)
- Accent: Emerald (#142 76% 36%)

### Add Resume

Replace the PDF file in `public/attached_assets/` with your resume named `Monu_Dwivedi_Resume.pdf`

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Monu Dwivedi. All rights reserved.

## Contact

- **Email**: monudwivedi91@gmail.com
- **Phone**: +91 9831297110
- **LinkedIn**: [linkedin.com/in/monudwivedi](https://linkedin.com/in/monudwivedi)
- **Location**: Hyderabad, India
