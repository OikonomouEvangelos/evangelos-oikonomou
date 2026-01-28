import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Η Βιτρίνα */}
      <Hero />
      
      {/* 2. Η Διαδικασία (Dark Section για αντίθεση) */}
      <Process />

      {/* 3. Οι Υπηρεσίες */}
      <Services />

      {/* 4. Τα Projects (Stacking Cards) */}
      <Projects />
      
      {/* 5. Φόρμα Επικοινωνίας */}
      <Contact />
    </div>
  );
}