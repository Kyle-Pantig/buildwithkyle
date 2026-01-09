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

// JSON-LD Structured Data for SEO Sitelinks
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.kylepantig.site/#website",
      "url": "https://www.kylepantig.site",
      "name": "Kyle Pantig - Web Developer",
      "description": "Web Developer from Pampanga, Philippines specializing in building modern, scalable web applications using React, Next.js, TypeScript, and Python.",
      "publisher": {
        "@id": "https://www.kylepantig.site/#person"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "Person",
      "@id": "https://www.kylepantig.site/#person",
      "name": "Kyle Pantig",
      "url": "https://www.kylepantig.site",
      "jobTitle": "Web Developer",
      "sameAs": [
        "https://github.com/Kyle-Pantig",
        "https://www.linkedin.com/in/kyle-pantig"
      ],
      "knowsAbout": ["React", "Next.js", "TypeScript", "JavaScript", "Python", "FastAPI", "Node.js", "PostgreSQL", "Tailwind CSS"]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.kylepantig.site/#webpage",
      "url": "https://www.kylepantig.site",
      "name": "Kyle Pantig - Web Developer",
      "isPartOf": {
        "@id": "https://www.kylepantig.site/#website"
      },
      "about": {
        "@id": "https://www.kylepantig.site/#person"
      },
      "inLanguage": "en-US"
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Projects",
      "url": "https://www.kylepantig.site/projects",
      "description": "Explore my web development projects including GoCodes, DigiVault, PurseFlow, and more."
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Tech Stack",
      "url": "https://www.kylepantig.site/tech-stack",
      "description": "Technologies I use: React, Next.js, TypeScript, Python, FastAPI, Node.js, and more."
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Certifications",
      "url": "https://www.kylepantig.site/certifications",
      "description": "View my professional certifications and credentials in web development."
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Kyle" />
        <link rel="canonical" href="https://www.kylepantig.site" />
        {/* Explicit favicon/icon links for SEO tools and checkers */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/icon0.svg" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icon1.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
