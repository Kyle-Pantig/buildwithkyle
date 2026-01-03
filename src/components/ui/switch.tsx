"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"

function Switch({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  children?: React.ReactNode;
  checked?: boolean;
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      checked={checked}
      className={cn(
        "glass-switch peer focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-7 w-12 shrink-0 items-center rounded-full border transition-all outline-none focus-visible:ring-[3px] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        asChild
      >
        <motion.div
        className={cn(
            "glass-switch-thumb pointer-events-none flex items-center justify-center size-5 rounded-full"
          )}
          animate={{
            x: checked ? "calc(100% + 2px)" : "2px",
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={checked ? "dark" : "light"}
              initial={{ opacity: 0, rotate: -180, scale: 0 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 180, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}

export { Switch }
