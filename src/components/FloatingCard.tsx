"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export type CardColor = "blue" | "orange" | "dark" | "lavender" | "custom";

interface FloatingCardProps {
  color: CardColor;
  rotation?: number; // angle in degrees
  icon?: LucideIcon;
  label?: string;
  className?: string;
  delay?: number; // staggered entrance animation delay in seconds
  animationSpeed?: "slow" | "medium" | "fast";
  children?: React.ReactNode; // custom slot for variants like "John Doe - Portal"
}

export default function FloatingCard({
  color,
  rotation = 0,
  icon: Icon,
  label,
  className = "",
  delay = 0,
  animationSpeed = "medium",
  children,
}: FloatingCardProps) {
  // Define styling based on color prop, including smooth shadow upgrades on hover
  const colorStyles = {
    blue: "bg-brand-blue text-white shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/35 dark:shadow-blue-900/10 border border-blue-400/10",
    orange: "bg-brand-orange text-white shadow-xl shadow-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/35 dark:shadow-orange-950/10 border border-orange-400/10",
    dark: "bg-brand-dark text-orange-400 shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-slate-950/40 dark:shadow-black/30 border border-slate-700/10 dark:border-slate-800/80",
    lavender: "bg-brand-lavender text-slate-900 shadow-xl shadow-indigo-500/10 hover:shadow-2xl hover:shadow-indigo-500/20 dark:bg-indigo-950/40 dark:text-indigo-200 dark:border dark:border-indigo-800/40",
    custom: "",
  };

  const floatClasses = {
    slow: "animate-float-slow",
    medium: "animate-float-medium",
    fast: "animate-float-fast",
  };

  const paddingClass = children
    ? "px-5 py-3 md:px-7 md:py-4"
    : "px-6 py-5 md:px-10 md:py-6";

  return (
    <motion.div
      // Entrance Animation
      initial={{ opacity: 0, y: 30, rotate: rotation - 5 }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotation,
        transition: {
          type: "spring",
          stiffness: 70,
          damping: 14,
          delay: delay,
        },
      }}
      // Interactive Hover Animations (scale and vertical lift only)
      whileHover={{
        scale: 1.05,
        y: -5,
        z: 10,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      style={{
        transformOrigin: "center center",
      }}
      className={`absolute select-none cursor-pointer [transform-style:preserve-3d] [backface-visibility:hidden] rounded-full ${className}`}
    >
      {/* Floating Animation Loop (uses CSS animation classes for butter-smooth compositor performance) */}
      <div
        style={{
          animationDelay: `${delay * -1.5}s`, // negative delay starts the animation offset immediately
        }}
        className={`${paddingClass} flex items-center gap-4 font-semibold text-lg md:text-[1.4rem] transition-all duration-300 [transform-style:preserve-3d] [backface-visibility:hidden] rounded-full ${colorStyles[color]} ${floatClasses[animationSpeed]}`}
      >
        {children ? (
          children
        ) : (
          <>
            {Icon && <Icon className="w-6 h-6 md:w-8 md:h-8 shrink-0 stroke-[2.5]" />}
            <span>{label}</span>
          </>
        )}
      </div>
    </motion.div>
  );
}
