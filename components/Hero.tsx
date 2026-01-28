import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="w-full bg-cream text-dark flex flex-col items-center">
      
      {/* 1. TOP BAR: Status & Location */}
      <div className="w-full max-w-7xl border-b border-dark grid grid-cols-2 text-xs font-bold uppercase tracking-widest">
        <div className="p-4 border-r border-dark flex items-center gap-2">
          {/* Παλμική τελεία για το "Live/Available" */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-green-600 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 bg-green-600"></span>
          </span>
          Available for new projects
        </div>
        <div className="p-4 text-right">
          Based in Greece, Worldwide Service
        </div>
      </div>

      {/* 2. MAIN HEADLINE AREA */}
      <div className="w-full max-w-7xl py-20 px-6 lg:px-12 text-center flex flex-col items-center gap-8">
        
        {/* Ο Τίτλος: Reveal Effect χωρίς καθυστέρηση */}
        <Reveal width="100%">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter">
            BUILDING <br />
            <span className="bg-dark text-cream px-4">RELIABLE</span> WEB APPS
          </h1>
        </Reveal>

       <Reveal delay={0.2}>
            <p className="text-lg md:text-xl max-w-2xl font-medium text-dark/80 leading-relaxed">
                Full Stack Developer με έμφαση σε <strong>High-Performance Web Applications</strong>. 
                Σχεδιάζω και υλοποιώ ψηφιακές λύσεις που εκσυγχρονίζουν επιχειρήσεις, εστιάζοντας στην ταχύτητα, την ασφάλεια και την επεκτασιμότητα.
            </p>
        </Reveal>

        {/* 3. SHARP CTA BUTTONS: Reveal Effect με μεγαλύτερη καθυστέρηση (0.4s) */}
        <Reveal delay={0.4}>
          <div className="flex flex-col md:flex-row gap-6 mt-8 w-full md:w-auto justify-center">
            
            <Link 
              href="#projects" 
              className="group relative px-8 py-4 bg-dark text-cream text-sm font-bold uppercase tracking-widest border-2 border-dark hover:bg-cream hover:text-dark transition-all duration-300"
            >
              Δες τα Projects μου
              {/* Διακοσμητικό τετράγωνο που εμφανίζεται στο hover */}
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-dark opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Link>

            <Link 
              href="#contact" 
              className="group px-8 py-4 bg-transparent text-dark text-sm font-bold uppercase tracking-widest border-2 border-dark hover:bg-dark hover:text-cream transition-all duration-300"
            >
              Επικοινωνια
            </Link>
            
          </div>
        </Reveal>

      </div>

      {/* 4. TECH STACK TICKER (Με Logos) */}
      <div className="w-full border-y border-dark bg-white overflow-hidden">
        <div className="w-full max-w-7xl mx-auto py-6 px-6 flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-0">
          
          {[
            { name: "Next.js", logo: "/tech/next.png" },
            { name: "TypeScript", logo: "/tech/ts.png" },
            { name: "Tailwind", logo: "/tech/tailwindcss.png" },
            { name: "PostgreSQL", logo: "/tech/Postgresql.png" },
            { name: "Node.js", logo: "/tech/nodejs.png" },
          ].map((tech) => (
            <div key={tech.name} className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
              {/* Το Λογότυπο */}
              <div className="relative w-6 h-6">
                <Image 
                  src={tech.logo} 
                  alt={`${tech.name} logo`} 
                  fill 
                  className="object-contain"
                />
              </div>
              
              {/* Το Όνομα */}
              <span className="text-sm font-bold uppercase tracking-widest text-dark">
                {tech.name}
              </span>
            </div>
          ))}

        </div>
      </div>

    </section>
  );
}