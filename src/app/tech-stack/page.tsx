"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Code, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { techStack } from "@/data/techStack";
import ThemeToggle from "@/components/ThemeToggle";

export default function TechStackPage() {
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
              <Button variant="ghost" size="sm" className="rounded-full liquid-glass">
                <span className="relative z-10 flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </span>
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6" />
              <h1 className="text-2xl font-semibold">Tech Stack</h1>
            </div>
          </div>
          <ThemeToggle />
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
            >
              <Card className="relative overflow-hidden h-full liquid-glass rounded-xl">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {category.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="glass-badge text-xs text-foreground font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

