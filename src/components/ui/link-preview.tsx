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
}

export function LinkPreview({
  children,
  url,
  className,
}: LinkPreviewProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Generate screenshot URL using microlink API (free, reliable)
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800&waitForTimeout=2000`;

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Original card content */}
      <div className={cn(
        "transition-opacity duration-300",
        isHovered ? "opacity-0" : "opacity-100"
      )}>
        {children}
      </div>

      {/* Preview overlay - replaces the card on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-10 rounded-xl overflow-hidden cursor-pointer"
          >
            {/* Loading state */}
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted z-10 rounded-xl">
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                  <span className="text-[10px] text-muted-foreground">Loading preview...</span>
                </div>
              </div>
            )}

            {/* Error state */}
            {imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-muted z-10 rounded-xl">
                <span className="text-xs text-muted-foreground">Preview unavailable</span>
              </div>
            )}

            {/* Screenshot preview */}
            <div className="w-full h-full relative bg-muted rounded-xl">
              {!imageError && (
                <Image
                  src={screenshotUrl}
                  alt={`Preview of ${url}`}
                  fill
                  className={cn(
                    "object-cover object-top transition-opacity duration-300 rounded-xl",
                    imageLoaded ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  unoptimized
                />
              )}
            </div>

            {/* URL badge - glass effect */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 rounded-lg px-3 py-2 bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 shadow-sm">
              <ExternalLink className="h-3.5 w-3.5 text-gray-700 dark:text-gray-300 flex-shrink-0" />
              <span className="text-xs text-gray-700 dark:text-gray-300 truncate font-medium">
                {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
            </div>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}

