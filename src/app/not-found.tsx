"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function NotFound() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.5,
      },
    },
  };

  return (
    <main className="min-h-screen p-4 sm:p-8 flex items-center justify-center">
      <motion.div
        className="w-full max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        <motion.div variants={itemVariants}>
          <Card className="relative overflow-hidden">
            <CardContent className="p-8 sm:p-12 text-center space-y-6">
              <motion.div
                variants={itemVariants}
                className="space-y-4"
              >
                <h1 className="text-6xl sm:text-8xl font-bold text-foreground">
                  404
                </h1>
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
                  Page Not Found
                </h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  The page you're looking for doesn't exist or has been moved.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 justify-center items-center"
              >
                <Link href="/">
                  <Button variant="outline" className="rounded-full gap-2 w-full sm:w-auto">
                    <Home className="h-4 w-4" />
                    Go Home
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="rounded-full gap-2 w-full sm:w-auto"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </main>
  );
}

