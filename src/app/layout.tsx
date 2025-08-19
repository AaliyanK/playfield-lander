import type { Metadata } from "next";
import { signifier, consolas } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Playfield - Superintelligence for Enterprise",
  description:
    "Map your systems. Generate interfaces. Run securely. Enterprise superintelligence platform that integrates with your internal systems and builds a reasoning map across them.",
  keywords: [
    "enterprise",
    "superintelligence",
    "AI",
    "automation",
    "integration",
    "workflow",
    "enterprise software",
  ],
  authors: [{ name: "Playfield" }],
  creator: "Playfield",
  publisher: "Playfield",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    "https://playfield-lander-224jedm5b-aalliyans-projects.vercel.app"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Playfield - Superintelligence for Enterprise",
    description:
      "Map your systems. Generate interfaces. Run securely. Enterprise superintelligence platform that integrates with your internal systems and builds a reasoning map across them.",
    url: "https://playfield-lander-224jedm5b-aalliyans-projects.vercel.app",
    siteName: "Playfield",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Playfield - Superintelligence for Enterprise",
    description:
      "Map your systems. Generate interfaces. Run securely. Enterprise superintelligence platform.",
    creator: "@playfield",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${signifier.variable} ${consolas.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
