"use client";

import { Switch } from "@/components/ui/switch";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  className?: string;
  initialAnimation?: boolean;
}

export default function ThemeToggle({ className = "", initialAnimation = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  const switchComponent = (
    <Switch 
      checked={mounted && isDark} 
      onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      disabled={!mounted}
      aria-label={mounted && isDark ? "Switch to light mode" : "Switch to dark mode"}
      role="switch"
      aria-checked={mounted && isDark}
    >
      {mounted && (isDark ? (
        <Moon className="h-3 w-3 text-foreground" />
      ) : (
        <Sun className="h-3 w-3 text-foreground" />
      ))}
    </Switch>
  );

  if (initialAnimation) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {switchComponent}
      </motion.div>
    );
  }

  return <div className={className}>{switchComponent}</div>;
}

