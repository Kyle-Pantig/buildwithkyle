import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack | Kyle Pantig",
  description: "Technologies and tools used by Kyle Pantig",
};

export default function TechStackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

