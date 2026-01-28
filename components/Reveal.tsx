"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number; // Για να καθυστερούμε λίγο κάποια στοιχεία (π.χ. υπότιτλους)
}

export default function Reveal({ children, width = "fit-content", delay = 0 }: Props) {
  const ref = useRef(null);
  // Το useInView κοιτάει πότε το στοιχείο φάνηκε στην οθόνη
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75, scale: 0.95 }, // Αρχική κατάσταση (κρυφό, κάτω, λίγο μικρότερο)
          visible: { opacity: 1, y: 0, scale: 1 },    // Τελική κατάσταση (εμφανές, στη θέση του, κανονικό μέγεθος)
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ 
          duration: 0.8,        // Πόση ώρα διαρκεί (0.8 δευτερόλεπτα = πολύ ομαλό)
          delay: delay,         // Καθυστέρηση
          ease: [0.25, 0.25, 0.25, 0.75], // Custom καμπύλη για "premium" αίσθηση (όχι το βαρετό linear)
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}