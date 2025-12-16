import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GridBackground } from "@/components/ui/grid-background";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Kyle Pantig - Web Developer",
  description: "Web Developer portfolio of Kyle Pantig",
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
      </body>
    </html>
  );
}
