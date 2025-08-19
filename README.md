# Playfield - Superintelligence for Enterprise

A modern, clean landing page for Playfield, showcasing our enterprise superintelligence platform.

## 🚀 Features

- **Clean, Modern Design**: Minimalist aesthetic with focus on content
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Smooth Animations**: Subtle motion effects using Framer Motion
- **Custom Typography**: Using Signifier and Consolas fonts
- **Image Cards**: Showcase key product features with visual elements

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Language**: TypeScript

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   ├── error.tsx           # Error boundary
│   ├── loading.tsx         # Loading component
│   └── globals.css         # Global styles
├── components/
│   ├── Nav.tsx             # Navigation component
│   ├── ImageCard.tsx       # Feature showcase cards
│   └── ui/                 # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── badge.tsx
├── lib/
│   ├── fonts.ts            # Custom font configuration
│   └── utils.ts            # Utility functions
└── public/
    ├── images/             # Product feature images
    └── fonts/              # Custom font files
```

## 🎨 Design System

### Typography
- **Signifier**: Primary font for headings and brand elements
- **Consolas**: Monospace font for technical content

### Colors
- Clean white background with subtle borders
- Black text with varying opacity levels
- Minimal color palette focusing on content

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd playfield-lander
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

The site is automatically deployed to Vercel on every push to the main branch.

**Live URL**: [https://playfield-3yhhhi26n-aalliyans-projects.vercel.app](https://playfield-3yhhhi26n-aalliyans-projects.vercel.app)

## 📝 Content

The landing page showcases four key features of Playfield's enterprise superintelligence platform:

1. **Reasoning Map of Enterprise** - Ontology that bridges systems and data
2. **Code Gen as a Primitive** - Models trained to generate interfaces through code
3. **RL as a Service** - Continuous fine-tuning for enterprise superintelligence
4. **Enterprise Grade Privacy** - Secure, on-premise deployment options

## 🔧 Customization

### Adding New Features
1. Create new components in `src/components/`
2. Import and use in `src/app/page.tsx`
3. Add any required images to `public/images/`

### Updating Content
- Main content is in `src/app/page.tsx`
- Product images are in `public/images/`
- Fonts are configured in `src/lib/fonts.ts`

## 📄 License

© 2025 Playfield. All rights reserved.
