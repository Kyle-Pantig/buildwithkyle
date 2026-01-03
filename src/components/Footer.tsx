"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="py-6 mt-12 max-w-5xl mx-auto px-4 sm:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="flex items-center justify-center">
        <Badge variant="outline" className="glass-card text-sm text-foreground font-normal px-4 py-2">
          © {currentYear} Kyle Pantig. All rights reserved.
        </Badge>
      </div>
    </motion.footer>
  );
}

