# NECPL - Strategic Technology Consulting & Software Solutions

A modern, high-performance React + TypeScript web application built with Vite, Tailwind CSS, and shadcn/ui components.

## 🚀 Quick Links

- [Deployment Guide](./DEPLOYMENT_GUIDE.md) - Step-by-step Netlify & GoDaddy setup
- [Production Checklist](./PRODUCTION_CHECKLIST.md) - Pre-launch verification
- [Production Summary](./PRODUCTION_READY_SUMMARY.md) - Quick start guide

## 📋 Project Overview

NECPL is a professional website for strategic technology consulting and software solutions. The site features:

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI Components**: shadcn/ui component library
- **Performance Optimized**: Code splitting, lazy loading, minification
- **TypeScript**: Full type safety across the application
- **Routing**: React Router for multi-page navigation
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Email Integration**: EmailJS for contact forms

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 18.3 |
| **Language** | TypeScript 5.8 |
| **Build Tool** | Vite 5.4 |
| **Styling** | Tailwind CSS 3.4 |
| **UI Components** | shadcn/ui, Radix UI |
| **Routing** | React Router 6.30 |
| **Forms** | React Hook Form 7.61 |
| **Validation** | Zod 3.25 |
| **Data Fetching** | TanStack React Query 5.83 |
| **Carousel** | Embla Carousel |
| **Charts** | Recharts 2.15 |
| **Icons** | Lucide React 0.462 |
| **Notifications** | Sonner 1.7 |
| **Animations** | Tailwind CSS Animate |
| **Testing** | Vitest 3.2, React Testing Library |

## 📦 Installation & Setup

### Prerequisites
- Node.js 20 or higher
- npm or yarn package manager
- Git (for version control)

### Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/necpl.git
cd necpl

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run linting
npm run lint
```

The application will be available at `http://localhost:8080`

## 📁 Project Structure

```
necpl/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── home/            # Homepage sections
│   │   ├── layout/          # Layout components
│   │   ├── LoadingScreen.tsx
│   │   └── NavLink.tsx
│   ├── pages/               # Route pages
│   ├── lib/                 # Utilities
│   ├── hooks/               # Custom React hooks
│   ├── data/                # Static data/constants
│   ├── test/                # Test files
│   ├── assets/              # Images, logos
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static files
├── netlify.toml             # Netlify deployment config
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind configuration
├── DEPLOYMENT_GUIDE.md      # Deployment instructions
├── PRODUCTION_CHECKLIST.md  # Pre-launch checklist
└── package.json             # Dependencies
```

## 🎨 Features

### Pages
- **Home**: Hero section with impact counters, services, projects
- **About Us**: Company information and team
- **Services**: Detailed service offerings
- **Industry Sectors**: Industry-specific solutions
- **Projects**: Portfolio of completed projects
- **Software Expertise**: Technical capabilities
- **Clients**: Client testimonials and case studies
- **Contact**: Contact form with email integration

### Components
- Responsive Navbar with mobile menu
- Interactive carousels
- Accordion sections
- Image galleries
- Contact forms with validation
- Footer with links

## 🚀 Deployment

This project is optimized for deployment on **Netlify** with a **GoDaddy domain**.

### Quick Deploy
```bash
npm run build
netlify deploy --prod --dir=dist
```

### For detailed deployment instructions, see:
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Full setup guide
- [PRODUCTION_READY_SUMMARY.md](./PRODUCTION_READY_SUMMARY.md) - Quick overview

## 🔒 Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Copy from template
cp .env.example .env.local

# Add your credentials
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Important**: Never commit `.env.local` to Git. Use `.env.example` as a template for team members.

## ✅ Production Checklist

Before deploying to production, ensure all items in [PRODUCTION_CHECKLIST.md](./PRODUCTION_CHECKLIST.md) are completed.

Key items:
- [ ] Run `npm run build` and verify no errors
- [ ] Test in production mode: `npm run preview`
- [ ] Pass Lighthouse audit (90+ score)
- [ ] Cross-browser testing completed
- [ ] Accessibility audit passed
- [ ] Security headers verified
- [ ] Environment variables configured

## 📊 Performance Optimizations

The project includes several performance optimizations:

- **Code Splitting**: Vendor code separated into chunks
- **Lazy Loading**: Route-based code splitting via React Router
- **Minification**: Production builds minified with Terser
- **CSS Purging**: Unused Tailwind CSS removed in production
- **Image Optimization**: JPEG, PNG images optimized
- **Gzip Compression**: Netlify auto-compresses responses
- **Caching Strategy**: 
  - Immutable cache for versioned assets (1 year)
  - Must-revalidate cache for HTML (no cache)
  - 30-day cache for API responses

## 🧪 Testing

Run the test suite:
```bash
# Run tests once
npm run test

# Run tests in watch mode (development)
npm run test:watch
```

Tests are located in `src/test/` and configured with Vitest.

## 🔍 Code Quality

### Linting
```bash
npm run lint
```

ESLint is configured to enforce code standards. Fix errors:
```bash
npm run lint -- --fix
```

### TypeScript
The project uses strict TypeScript configuration. No implicit `any` types allowed.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 3000
```

### TypeScript Errors
```bash
# Rebuild TypeScript
npx tsc --noEmit
```

## 💡 Development Tips

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/layout/Navbar.tsx`

### Using UI Components
All shadcn/ui components are pre-installed. Import and use:
```tsx
import { Button } from "@/components/ui/button";

export default function MyComponent() {
  return <Button>Click me</Button>;
}
```

### Adding Environment Variables
1. Add to `.env.example`
2. Add to `.env.local` (local development)
3. Update `.env.production` if needed
4. Deploy to Netlify with env vars in dashboard

## 📚 Documentation

- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [React Router Docs](https://reactrouter.com)
- [shadcn/ui Docs](https://ui.shadcn.com)

## 🚀 Deployment Status

**Status**: ✅ **Production Ready**

For deployment instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).

## 📝 License

This project is proprietary and confidential.

## 👥 Support

For questions or issues, contact the development team.

---

**Last Updated**: February 26, 2026

**Status**: Production Ready - Ready for Netlify + GoDaddy deployment
