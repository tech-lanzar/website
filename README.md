# Vikpalla Software Corporate Website

A modern, professional corporate website for Vikpalla Software Private Limited built with Next.js 14, React 18, and TypeScript.

## Features

- **Modern Tech Stack**: Next.js 14, React 18, TypeScript
- **Design System**: Tailwind CSS with shadcn/ui components
- **Atomic Design**: Structured component architecture
- **Animations**: Framer Motion for micro-interactions
- **Forms**: React Hook Form with Zod validation
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Optimized for Core Web Vitals

## Project Structure

```
src/
├── app/                    # Next.js App Router
├── components/             # Atomic Design Structure
│   ├── atoms/             # Basic building blocks
│   ├── molecules/         # Simple component combinations
│   ├── organisms/         # Complex UI sections
│   └── templates/         # Page-level layouts
├── lib/                   # Utilities and configurations
├── hooks/                 # Custom React hooks
└── types/                 # TypeScript type definitions
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Brand Colors

The website uses Vikpalla's brand colors derived from the hexagonal logo:

- **Orange**: #FF5722
- **Purple**: #9C27B0
- **Blue**: #2196F3

## Development Guidelines

- Follow atomic design principles
- Use TypeScript strict mode
- Maintain accessibility standards
- Write semantic HTML
- Use Tailwind CSS for styling
- Implement responsive design
- Add subtle animations with Framer Motion