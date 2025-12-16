"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { FolderKanban, ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import ThemeToggle from "@/components/ThemeToggle";

export default function ProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen p-4 sm:p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Header */}
        <motion.div variants={itemVariants} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="rounded-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <FolderKanban className="h-6 w-6" />
              <h1 className="text-2xl font-semibold">All Projects</h1>
            </div>
          </div>
          <ThemeToggle />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="block"
            >
              <Card className="p-5 transition-all cursor-pointer group h-full min-h-[140px] flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-foreground group-hover:text-blue-500 transition-colors">
                      {project.name}
                    </h3>
                    {project.date && (
                      <p className="text-xs text-muted-foreground">{project.date}</p>
                    )}
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-blue-500 transition-colors flex-shrink-0 mt-0.5" />
                </div>
                <p className="text-xs text-muted-foreground  flex-1 line-clamp-3">
                  {project.description}
                </p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="glass-badge text-xs text-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

