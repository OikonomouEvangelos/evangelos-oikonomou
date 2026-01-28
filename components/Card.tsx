"use client";

import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface ProjectProps {
  i: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  link: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

export default function Card({ i, title, category, description, tech, link, progress, range, targetScale }: ProjectProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  // Κίνηση: Όσο σκρολάρουμε, η κάρτα μικραίνει ελαφρώς (scale) για να φανεί η επόμενη
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="flex flex-col relative -top-[25%] h-[500px] w-full max-w-5xl bg-cream border-2 border-dark origin-top"
      >
        {/* Header Bar της Κάρτας */}
        <div className="border-b-2 border-dark p-4 flex justify-between items-center bg-dark text-cream">
           <h3 className="text-xl font-black uppercase tracking-widest">{title}</h3>
           <span className="text-xs font-bold uppercase tracking-widest bg-cream text-dark px-2 py-1">{category}</span>
        </div>

        {/* Κυρίως Περιεχόμενο */}
        <div className="flex flex-col lg:flex-row h-full">
          
          {/* Αριστερά: Εικόνα / Placeholder */}
          <div className="w-full lg:w-3/5 bg-dark/5 border-b lg:border-b-0 lg:border-r-2 border-dark flex items-center justify-center relative overflow-hidden group">
            <div className="text-center p-8 transition-transform duration-500 group-hover:scale-105">
               <p className="text-xs uppercase tracking-widest opacity-50">Project Preview</p>
               <div className="w-16 h-16 border-2 border-dark rounded-full flex items-center justify-center mx-auto mt-4 animate-spin-slow">
                 {/* Ένα μικρό γρανάζι/εικονίδιο για εφέ */}
                 <span className="text-2xl font-black">+</span>
               </div>
            </div>
            {/* Overlay που σκουραίνει στο hover */}
            <div className="absolute inset-0 bg-dark opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>

          {/* Δεξιά: Πληροφορίες */}
          <div className="w-full lg:w-2/5 p-8 flex flex-col justify-between bg-cream">
            <div>
              <p className="text-base font-medium opacity-80 leading-relaxed mb-6">
                {description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {tech.map((t) => (
                  <span key={t} className="px-2 py-1 border border-dark text-[10px] font-bold uppercase hover:bg-dark hover:text-cream transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <Link 
              href={link}
              className="w-full py-4 bg-transparent border-2 border-dark text-dark text-center text-sm font-black uppercase tracking-widest hover:bg-dark hover:text-cream transition-all duration-300"
            >
              View Case Study
            </Link>
          </div>

        </div>
      </motion.div>
    </div>
  );
}