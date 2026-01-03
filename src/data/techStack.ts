export interface TechStackCategory {
  label: string;
  technologies: string[];
}

export const techStack: TechStackCategory[] = [
  {
    label: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "Vite", "ESLint", "Prettier"],
  },
  {
    label: "Backend",
    technologies: ["Node.js", "Express", "Python", "FastAPI", "Java", "PHP", "C++", "NextAuth", "PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    label: "Tools",
    technologies: ["Git", "GitHub", "VS Code", "Cursor", "PyCharm", "WAMP", "Slack", "Discord", "Postman"],
  },
  {
    label: "Cloud",
    technologies: ["AWS S3", "Cloudinary", "Supabase Storage"],
  },
  {
    label: "CMS/No-Code",
    technologies: ["Shopify"],
  }
];

