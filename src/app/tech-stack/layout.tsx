import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack",
  description: "Discover the technologies I use for web development: React, Next.js, TypeScript, JavaScript, Python, FastAPI, Node.js, PostgreSQL, Tailwind CSS, and more.",
  keywords: [
    "Kyle Pantig Tech Stack",
    "Web Development Technologies",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Supabase",
    "Frontend Technologies",
    "Backend Technologies",
  ],
  openGraph: {
    title: "Tech Stack | Kyle Pantig",
    description: "Discover the technologies I use for web development: React, Next.js, TypeScript, Python, FastAPI, and more.",
  },
};

export default function TechStackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
