"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Terminal, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <main className="h-screen w-full bg-black flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background Technical Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(var(--color-accent) 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* 1. Technical Error Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 rounded-full bg-accent/5 flex items-center justify-center text-accent mb-8 border border-accent/20 shadow-neon"
        >
          <ShieldAlert size={40} />
        </motion.div>

        {/* 2. Error Code with Serif Italic */}
        <h1 className="text-8xl md:text-9xl font-sans font-bold text-white tracking-tighter leading-none mb-4">
          404<span className="text-accent italic font-serif">!</span>
        </h1>

        {/* 3. Rephrased for SDE Tone */}
        <div className="max-w-md space-y-4">
          <h2 className="text-xl md:text-2xl font-serif italic text-foreground">
            System Route Not Found
          </h2>
          <p className="sub-description !text-sm !opacity-60 uppercase tracking-widest">
            The requested resource or endpoint is either private, 
            deprecated, or currently under development.
          </p>
        </div>

        {/* 4. Functional Return Path */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <Link 
            href="/"
            className="glass-capsule group flex items-center gap-3 px-8 py-4 hover:border-accent transition-all duration-500"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="tech-label !opacity-100 !text-xs">Return to System Root</span>
          </Link>

        </motion.div>
      </div>

      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
    </main>
  );
}