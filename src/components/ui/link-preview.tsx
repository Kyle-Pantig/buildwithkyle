"use client";

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [showBelow, setShowBelow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  // Generate screenshot URL using microlink API (free, reliable)
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800&waitForTimeout=2000`;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isHovered && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      
      // Check if there's enough space above (need height + 20px gap)
      const spaceAbove = rect.top;
      const spaceNeeded = height + 30;
      
      // If not enough space above, show below
      const shouldShowBelow = spaceAbove < spaceNeeded;
      setShowBelow(shouldShowBelow);
      
      // Calculate horizontal position (centered, but clamped to viewport)
      let leftPos = rect.left + scrollX + rect.width / 2 - width / 2;
      // Clamp to viewport bounds with 10px padding
      const minLeft = scrollX + 10;
      const maxLeft = scrollX + window.innerWidth - width - 10;
      leftPos = Math.max(minLeft, Math.min(maxLeft, leftPos));
      
      if (shouldShowBelow) {
        // Show below the element
        setPosition({
          top: rect.bottom + scrollY + 15, // 15px gap below
          left: leftPos,
        });
      } else {
        // Show above the element
        setPosition({
          top: rect.top + scrollY - height - 20, // 20px gap above
          left: leftPos,
        });
      }
    }
  }, [isHovered, width, height]);

  const previewContent = (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: showBelow ? -10 : 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: showBelow ? -10 : 10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed z-[9999] pointer-events-none"
          style={{
            top: position.top,
            left: position.left,
          }}
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

            {/* URL badge - glass effect with dark text */}
            <div className="absolute bottom-2 left-2 right-2 flex items-center gap-1.5 rounded-md px-2 py-1.5 bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 shadow-sm">
              <ExternalLink className="h-3 w-3 text-gray-700 dark:text-gray-300 flex-shrink-0" />
              <span className="text-[10px] text-gray-700 dark:text-gray-300 truncate font-medium">
                {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
            </div>
          </div>

          {/* Arrow - positioned based on showBelow */}
          <div className={cn(
            "absolute left-1/2 -translate-x-1/2",
            showBelow ? "-top-2" : "-bottom-2"
          )}>
            <div className={cn(
              "w-4 h-4 rotate-45 backdrop-blur-md",
              "bg-white/20 dark:bg-white/10",
              showBelow 
                ? "border-l border-t border-white/30 dark:border-white/20" 
                : "border-r border-b border-white/30 dark:border-white/20"
            )} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div
      ref={triggerRef}
      className={cn("relative inline-block", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {mounted && createPortal(previewContent, document.body)}
    </div>
  );
}

