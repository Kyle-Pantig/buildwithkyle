export interface Project {
  name: string;
  description: string;
  link: string;
  technologies?: string[];
  date?: string;
}

export const projects: Project[] = [
    
    {
        name: "GoCodes",
        description: "Comprehensive asset management solution for tracking company assets like computers and equipment.",
        link: "https://gocodes.vercel.app/",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI", "Supabase"],
        date: "2025",
    },
    {
        name: "DigiVault",
        description: "Secure password manager to store, manage, and protect your passwords with advanced security features.",
    link: "https://digivault-sand.vercel.app",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Supabase", "AES", "Stripe"],
    date: "2025",
},
{
    name: "PurseFlow",
    description: "PurseFlow expense tracker account to manage your finances.",
    link: "https://purseflow.vercel.app",
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Supabase"],
    date: "2025",
},
    {
      name: "ShoreAgents Staff Management System",
      description: "Staff tracking system for monitoring active time, inactive time, break management, and task management.",
      link: "https://shoreagents-users.vercel.app",
      technologies: ["Electron.js", "Next.js", "Tailwind CSS", "Supabase", "Prisma", "Socket.io"],
      date: "2025",
    },
    {
        name: "E-Booth",
        description: "Your online photo booth — customize, filter, and make every shot unique!",
        link: "https://e-booth.vercel.app",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
        date: "2024",
    },
    
];

