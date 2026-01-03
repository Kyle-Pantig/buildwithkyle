"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Award, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { certifications } from "@/data/certifications";
import ThemeToggle from "@/components/ThemeToggle";

export default function CertificationsPage() {
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
              <Award className="h-6 w-6" />
              <h1 className="text-2xl font-semibold">Certifications</h1>
            </div>
          </div>
          <ThemeToggle />
        </motion.div>

        {/* Certifications List */}
        <div className="space-y-4">
          {certifications.map((certification, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Card className="relative overflow-hidden h-full liquid-glass rounded-xl">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="font-normal text-sm text-foreground">
                        {certification.title}
                      </h3>
                    </div>
                    <Badge variant="outline" className="glass-badge text-xs text-foreground whitespace-nowrap font-normal">
                      {certification.date}
                    </Badge>
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

