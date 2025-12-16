import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Kyle Pantig",
  description: "View all certifications and achievements of Kyle Pantig",
};

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

