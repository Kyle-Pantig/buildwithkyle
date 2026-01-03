import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my web development projects including GoCodes asset management, DigiVault password manager, PurseFlow expense tracker, and more. Built with Next.js, React, TypeScript, Python, and FastAPI.",
  keywords: [
    "Kyle Pantig Projects",
    "Web Development Projects",
    "Next.js Projects",
    "React Projects",
    "TypeScript Projects",
    "Full Stack Projects",
    "GoCodes",
    "DigiVault",
    "PurseFlow",
  ],
  openGraph: {
    title: "Projects | Kyle Pantig",
    description: "Explore my web development projects including asset management systems, password managers, expense trackers, and more.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
