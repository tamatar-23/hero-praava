"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ReceiptText,
  Gavel,
  CheckSquare,
  FileText
} from "lucide-react";
import FloatingCard from "@/components/FloatingCard";
import JohnDoePortalCard from "@/components/JohnDoePortalCard";
import ThemeToggle from "@/components/ThemeToggle";

// Framer Motion animation container variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
} as const;

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f3f5fa] text-slate-900 dark:bg-[#090a0f] dark:text-slate-100 transition-colors duration-300">
      
      {/* BACKGROUND GRAPHICS */}
      {/* Solid grey side pill elements (matching the screenshot exactly) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Left side pills — lower area */}
        <div className="absolute left-[-120px] top-[55%] w-[300px] h-[85px] rounded-full bg-[#e4e9f5] dark:bg-[#131520] transition-colors duration-300 rotate-[-12deg]" />
        <div className="absolute left-[-50px] top-[68%] w-[300px] h-[85px] rounded-full bg-[#e4e9f5] dark:bg-[#131520] transition-colors duration-300" />
        <div className="absolute left-[-140px] top-[80%] w-[520px] h-[85px] rounded-full bg-[#e4e9f5] dark:bg-[#131520] transition-colors duration-300" />
        
        {/* Right side pills — upper and mid area */}
        <div className="absolute right-[-120px] top-[8%] w-[350px] h-[85px] rounded-full bg-[#e4e9f5] dark:bg-[#131520] transition-colors duration-300 rotate-[12deg]" />
        <div className="absolute right-[-80px] top-[20%] w-[420px] h-[85px] rounded-full bg-[#e4e9f5] dark:bg-[#131520] transition-colors duration-300" />
        <div className="absolute right-[-150px] top-[32%] w-[380px] h-[85px] rounded-full bg-[#e4e9f5] dark:bg-[#131520] transition-colors duration-300" />
      </div>

      {/* HEADER: Only contains the ThemeToggle now */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-end">
        <ThemeToggle />
      </header>

      {/* HERO SECTION MAIN LAYOUT */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 flex flex-col justify-start min-h-[calc(100vh-100px)]">
        
        {/* Unified desktop wrapper for perfect 1-to-1 card layout coordinates */}
        <div className="relative w-full max-w-6xl mx-auto h-[780px] flex flex-col">
          
          {/* LEFT CONTENT: Heading & Subtext (Matches screenshot styling and layout) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl text-left z-20 pt-3"
          >
            {/* Heading with precise weights and gray-indigo tones */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[4.2rem] font-medium tracking-tight text-[#5e6488] dark:text-[#94a3b8] leading-[1.12]"
            >
              A single platform to <br />
              <span className="font-extrabold text-[#323657] dark:text-white">manage</span> every part of <br />
              your <span className="font-extrabold text-[#323657] dark:text-[#818cf8]">legal work</span>
            </motion.h1>

            {/* Subtext in screenshot-matching blue */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg md:text-xl font-medium leading-relaxed text-[#1b4cf6] dark:text-[#60a5fa] max-w-[460px]"
            >
              Track matters, coordinate schedules, manage clients, centralize
              documents, and handle communication – all in one system.
            </motion.p>
          </motion.div>

          {/* DESKTOP VIEW: Overlapping absolute floating pills clustered tightly */}
          <div className="hidden lg:block absolute inset-0 pointer-events-auto z-10">
            {/* BILLING CARD */}
            <FloatingCard
              color="blue"
              rotation={9}
              icon={ReceiptText}
              label="Billing"
              delay={0.1}
              animationSpeed="slow"
              className="top-[36%] left-[62%] w-[390px]"
            />

            {/* MATTERS CARD */}
            <FloatingCard
              color="orange"
              rotation={-9}
              icon={Gavel}
              label="Matters"
              delay={0.25}
              animationSpeed="medium"
              className="top-[50%] left-[27%] w-[340px]"
            />

            {/* JOHN DOE - PORTAL CARD */}
            <FloatingCard
              color="lavender"
              rotation={3}
              delay={0.4}
              animationSpeed="slow"
              className="top-[53%] left-[60%] w-[375px]"
            >
              <JohnDoePortalCard />
            </FloatingCard>

            {/* TASKS CARD (Grey/Dark - Tilted same direction counter-clockwise) */}
            <FloatingCard
              color="dark"
              rotation={0}
              icon={CheckSquare}
              label="Tasks"
              delay={0.55}
              animationSpeed="fast"
              className="top-[68%] left-[33%] w-[350px]"
            />

            {/* DOCUMENTS CARD (Grey/Dark - Tilted same direction counter-clockwise) */}
            <FloatingCard
              color="dark"
              rotation={-6}
              icon={FileText}
              label="Documents"
              delay={0.7}
              animationSpeed="medium"
              className="top-[68%] left-[69%] w-[375px]"
            />
          </div>

          {/* MOBILE & TABLET VIEWPORT: Re-organized responsive grid (Stays clean) */}
          <div className="lg:hidden flex flex-col sm:grid sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-2xl mt-12 z-20">
            {/* Billing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="px-6 py-4 flex items-center gap-3 rounded-2xl bg-brand-blue text-white font-semibold text-lg shadow-md shadow-blue-500/10 cursor-pointer"
            >
              <ReceiptText className="w-5 h-5 shrink-0 stroke-[2.5]" />
              <span>Billing</span>
            </motion.div>

            {/* Matters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="px-6 py-4 flex items-center gap-3 rounded-2xl bg-brand-orange text-white font-semibold text-lg shadow-md shadow-orange-500/10 cursor-pointer"
            >
              <Gavel className="w-5 h-5 shrink-0 stroke-[2.5]" />
              <span>Matters</span>
            </motion.div>

            {/* John Doe Portal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="sm:col-span-2 px-6 py-4 rounded-2xl bg-brand-lavender text-slate-900 dark:bg-indigo-950/40 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800/40 shadow-sm cursor-pointer"
            >
              <JohnDoePortalCard />
            </motion.div>

            {/* Tasks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="px-6 py-4 flex items-center gap-3 rounded-2xl bg-brand-dark text-orange-400 font-semibold text-lg border border-slate-700/10 dark:border-slate-800/80 shadow-md cursor-pointer"
            >
              <CheckSquare className="w-5 h-5 shrink-0 stroke-[2.5]" />
              <span>Tasks</span>
            </motion.div>

            {/* Documents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-6 py-4 flex items-center gap-3 rounded-2xl bg-brand-dark text-orange-400 font-semibold text-lg border border-slate-700/10 dark:border-slate-800/80 shadow-md cursor-pointer"
            >
              <FileText className="w-5 h-5 shrink-0 stroke-[2.5]" />
              <span>Documents</span>
            </motion.div>
          </div>
          
        </div>

      </main>
    </div>
  );
}
