import Reveal from "@/components/Reveal";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      desc: "Τεχνική ανάλυση και χαρτογράφηση απαιτήσεων. Ορίζουμε την αρχιτεκτονική του συστήματος και τη ροή δεδομένων πριν γραφτεί η πρώτη γραμμή κώδικα.",
    },
    {
      num: "02",
      title: "Architecture & Design",
      desc: "Σχεδιάζω τη βάση δεδομένων και τη ροή του χρήστη (User Flow). Εστιάζουμε στο να είναι το σύστημα γρήγορο και εύκολο στη χρήση.",
    },
    {
      num: "03",
      title: "Development",
      desc: "Υλοποίηση με σύγχρονα εργαλεία (Next.js, Tailwind). Γράφω καθαρό, ασφαλή κώδικα που αντέχει στο χρόνο και είναι εύκολο να συντηρηθεί.",
    },
    {
      num: "04",
      title: "Launch & Support",
      desc: "Δοκιμές, ανέβασμα στον server και εκπαίδευση στη χρήση. Δεν εξαφανίζομαι μετά την παράδοση, είμαι εκεί για οτιδήποτε χρειαστεί.",
    },
  ];

  return (
    <section className="w-full bg-dark text-cream py-24 border-b border-cream/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <Reveal width="100%">
          <div className="mb-20 border-b border-cream/20 pb-8 flex flex-col md:flex-row justify-between items-end gap-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              How I Work
            </h2>
            <p className="text-cream/60 max-w-sm text-sm font-medium">
              Μια δομημένη διαδικασία 4 βημάτων που εγγυάται ότι το project θα παραδοθεί στην ώρα του και χωρίς bugs.
            </p>
          </div>
        </Reveal>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 0.1} width="100%">
              <div className={`
                flex flex-col h-full p-8 border-cream/20
                ${index !== 3 ? 'border-b md:border-b-0 md:border-r' : ''} 
                /* Το παραπάνω βάζει διαχωριστικές γραμμές εκτός από το τελευταίο */
                hover:bg-cream/5 transition-colors duration-300
              `}>
                
                {/* Number */}
                <span className="text-5xl font-black text-cream/20 mb-8 block">
                  {step.num}
                </span>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-cream">
                    {step.title}
                  </h3>
                  <p className="text-sm text-cream/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}