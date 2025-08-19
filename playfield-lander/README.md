# Playfield Landing Page

A modern, animated landing page for Playfield - Superintelligence for Enterprise.

## 🚀 Features

- **Modern Design**: Clean, minimal design with lots of whitespace
- **Smooth Animations**: Framer Motion animations throughout
- **Responsive**: Works perfectly on all devices
- **Fast Performance**: Built with Next.js 15 and Tailwind CSS v4
- **Smooth Scrolling**: Navigation links with smooth scroll behavior
- **Professional Layout**: Enterprise-grade design and structure

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── Header.tsx           # Navigation header
│   └── Footer.tsx           # Footer component
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Design System

- **Colors**: Black text on white/light grey backgrounds with blue accent (#0066FF)
- **Typography**: Clean, minimal fonts with proper hierarchy
- **Spacing**: Generous whitespace for modern feel
- **Animations**: Subtle, smooth transitions and hover effects

## 🚀 Getting Started

1. **Clone the repository**:

```bash
git clone <repository-url>
cd playfield-lander
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run the development server**:

```bash
npm run dev
```

4. **Open your browser** and navigate to `http://localhost:3000`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

The site is deployed on Vercel and can be accessed at: [your-vercel-url]

### Deploy to Vercel

1. **Build the project**:

```bash
npm run build
```

2. **Deploy**:

```bash
npx vercel --prod
```

## 📱 Sections

1. **Hero** - Main headline and call-to-action
2. **Value Props** - Three key benefits
3. **How it Works** - Three-step process
4. **Integrations** - Supported platforms
5. **Security** - Enterprise security features
6. **Vision** - Company vision and mission
7. **Contact** - Call-to-action section

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for performance
- **SEO**: Proper meta tags and structure
- **Accessibility**: WCAG 2.1 compliant

## 🔧 Customization

### Colors

Update the color scheme in `tailwind.config.ts`:

```typescript
brand: {
  DEFAULT: "#0066FF", // Main accent color
  light: "#3385FF",
  dark: "#0052CC",
}
```

### Content

Update the content in `src/app/page.tsx` for each section.

### Animations

Modify animation settings in the Framer Motion components.

## 📄 License

© 2024 Playfield. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ for Playfield
