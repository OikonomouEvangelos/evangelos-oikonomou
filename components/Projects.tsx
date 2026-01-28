"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./Card"; // Κάνουμε import το Card που φτιάξαμε

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const projects = [
    {
      title: "Hotel Booking Engine",
      category: "Full Stack App",
      description: "Σύστημα διαχείρισης κρατήσεων για μικρά ξενοδοχεία. Περιλαμβάνει διαχείριση δωματίων, ημερολόγιο διαθεσιμότητας και διασύνδεση με Stripe για πληρωμές.",
      tech: ["Next.js", "PostgreSQL", "Tailwind", "Stripe"],
      link: "#",
    },
    {
      title: "Appointment Manager",
      category: "Business Tool",
      description: "Εφαρμογή για κλείσιμο ραντεβού σε ιατρεία. Αυτόματη ενημέρωση πελατών μέσω email και admin dashboard για διαχείριση προγράμματος.",
      tech: ["React", "Node.js", "MongoDB", "SendGrid"],
      link: "#",
    },
    {
      title: "E-Shop Dashboard",
      category: "Ecommerce",
      description: "Custom Dashboard για διαχείριση αποθήκης και παραγγελιών. Real-time στατιστικά και εξαγωγή αναφορών σε PDF.",
      tech: ["Next.js", "Redux", "Supabase", "Chart.js"],
      link: "#",
    }
  ];

  return (
    <section id="projects" className="bg-cream w-full relative"> 
      {/* Τίτλος Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-dark">
          Selected Works
        </h2>
        <p className="text-dark/60 text-lg max-w-xl">
             Επιλεγμένες υλοποιήσεις λογισμικού. Εφαρμογές σχεδιασμένες με γνώμονα την απόδοση και την επίλυση σύνθετων προβλημάτων.
        </p>
      </div>

      {/* Εδώ αρχίζει το Stack Effect */}
      <div ref={container} className="mt-[10vh] mb-[50vh]">
        {projects.map((project, i) => {
          // Υπολογισμός κλίμακας: Η πρώτη κάρτα μικραίνει πιο πολύ από την τελευταία
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          
          return (
            <Card 
              key={i} 
              i={i} 
              {...project} 
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}