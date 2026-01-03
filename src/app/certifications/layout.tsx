import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications",
  description: "View my professional certifications and credentials in web development, programming, and technology. Continuously learning and improving skills.",
  keywords: [
    "Kyle Pantig Certifications",
    "Web Development Certifications",
    "Programming Certifications",
    "Developer Credentials",
    "Professional Certifications",
  ],
  openGraph: {
    title: "Certifications | Kyle Pantig",
    description: "View my professional certifications and credentials in web development, programming, and technology.",
  },
};

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
