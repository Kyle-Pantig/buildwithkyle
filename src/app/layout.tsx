import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GridBackground } from "@/components/ui/grid-background";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Kyle Pantig - Web Developer",
    template: "%s | Kyle Pantig",
  },
  description: "Web Developer from Pampanga, Philippines specializing in building modern, scalable web applications using React, Next.js, TypeScript, and Python. View my projects, experience, and tech stack.",
  keywords: [
    "Kyle Pantig",
    "Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Python",
    "FastAPI",
    "Portfolio",
    "Build with Kyle",
    "Build with Kyle Portfolio",
    "Build with Kyle Projects",
    "Build with Kyle Experience",
    "Build with Kyle Tech Stack",
    "Build with Kyle Certifications",
    "buildwithkyle",
    "buildwithkyle portfolio",
    "buildwithkyle projects",
    "buildwithkyle experience",
    "buildwithkyle tech stack",
    "buildwithkyle certifications",
  ],
  authors: [{ name: "Kyle Pantig", url: "https://github.com/Kyle-Pantig" }],
  creator: "Kyle Pantig",
  publisher: "Kyle Pantig",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kyle Pantig - Web Developer",
    title: "Kyle Pantig - Web Developer",
    description: "Web Developer from Pampanga, Philippines specializing in building modern, scalable web applications using React, Next.js, TypeScript, and Python.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyle Pantig - Web Developer",
    description: "Web Developer from Pampanga, Philippines specializing in building modern, scalable web applications.",
    creator: "@kylepantig",
  },
  metadataBase: new URL("https://www.kylepantig.site"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased`}
        style={{ fontFamily: 'var(--font-poppins), sans-serif' }}
      >
        <a
          href="#main-content"
          className="absolute -top-10 left-4 z-50 px-4 py-2 bg-primary text-primary-foreground rounded-md focus:top-4 transition-top"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GridBackground />
        {children}
          <Footer />
          <BackToTop />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
