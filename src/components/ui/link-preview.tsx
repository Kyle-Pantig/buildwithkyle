"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Loader2, ExternalLink } from "lucide-react";

interface LinkPreviewProps {
  children: React.ReactNode;
  url: string;
  className?: string;
  width?: number;
  height?: number;
}

export function LinkPreview({
  children,
  url,
  className,
  width = 320,
  height = 200,
}: LinkPreviewProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Generate screenshot URL using microlink API (free, reliable)
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800&waitForTimeout=2000`;

  return (
    <div
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-50 pointer-events-none left-1/2 -translate-x-1/2 bottom-full mb-3"
          >
            <div
              className="rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-card"
              style={{ width, height }}
            >
              {/* Loading state */}
              {!imageLoaded && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted z-10">
                  <div className="flex flex-col items-center gap-2">
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground">Loading preview...</span>
                  </div>
                </div>
              )}

              {/* Error state */}
              {imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted z-10">
                  <span className="text-xs text-muted-foreground">Preview unavailable</span>
                </div>
              )}

              <div className="w-full h-full relative bg-muted">
                {!imageError && (
                  <Image
                    src={screenshotUrl}
                    alt={`Preview of ${url}`}
                    fill
                    className={cn(
                      "object-cover object-top transition-opacity duration-300",
                      imageLoaded ? "opacity-100" : "opacity-0"
                    )}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    unoptimized
                  />
                )}
              </div>

              {/* URL badge */}
              <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 bg-background/90 backdrop-blur-sm rounded-md px-2 py-1.5 border border-border/30">
                <ExternalLink className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                <span className="text-[10px] text-muted-foreground truncate font-medium">
                  {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-2">
              <div className="w-4 h-4 rotate-45 bg-card border-r border-b border-border/50" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

