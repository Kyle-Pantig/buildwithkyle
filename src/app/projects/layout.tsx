import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Kyle Pantig",
  description: "View all web development projects by Kyle Pantig",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

