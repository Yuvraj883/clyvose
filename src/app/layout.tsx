import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clyvose.vercel.app"),
  title: {
    default: "Clyvos | Digital Product Development",
    template: "%s | Clyvos",
  },
  description:
    "Clyvos helps startups and businesses launch fast, scalable web and mobile products with modern design and reliable engineering.",
  applicationName: "Clyvos",
  keywords: [
    "Clyvos",
    "MVP development",
    "web app development",
    "mobile app development",
    "startup product development",
  ],
  openGraph: {
    title: "Clyvos | Digital Product Development",
    description:
      "Build and launch high-quality digital products with Clyvos. Fast MVPs, scalable architecture, and transparent delivery.",
    url: "https://clyvose.vercel.app",
    siteName: "Clyvos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clyvos | Digital Product Development",
    description:
      "Fast MVPs, modern web and mobile apps, and reliable product delivery for growing teams.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#030712",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${plusJakartaSans.variable} antialiased font-sans bg-[#030712] text-[#f8fafc]`}
      >
        {children}
      </body>
    </html>
  );
}
