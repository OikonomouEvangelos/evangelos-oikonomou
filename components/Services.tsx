import Reveal from "@/components/Reveal";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Booking Systems",
      desc: "Custom εφαρμογές κρατήσεων για ξενοδοχεία, ιατρεία και εστίαση. Διαχείριση ημερολογίου, automated emails και πληρωμές.",
    },
    {
      id: "02",
      title: "Web Applications",
      desc: "Full-stack λύσεις με Next.js. Από απλά dashboards μέχρι περίπλοκα συστήματα διαχείρισης δεδομένων (CMS/CRM).",
    },
    {
      id: "03",
      title: "Performance & SEO",
      desc: "Sites που φορτώνουν ακαριαία. Βελτιστοποίηση κώδικα για να σε αγαπάνε οι μηχανές αναζήτησης (Google).",
    },
  ];

  return (
    <section id="services" className="w-full bg-cream text-dark py-20 border-b border-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header - Εμφανίζεται ομαλά */}
        <Reveal width="100%">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              What I Do
            </h2>
            <p className="max-w-md text-sm font-medium opacity-70 mb-2">
              Δεν γράφω απλά κώδικα. Λύνω επιχειρηματικά προβλήματα μέσω της τεχνολογίας.
            </p>
          </div>
        </Reveal>

        {/* Services Grid - Εμφανίζονται διαδοχικά */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            // Χρησιμοποιούμε το index * 0.1 για να δώσουμε καθυστέρηση (0.1s, 0.2s, 0.3s)
            <Reveal key={service.id} delay={index * 0.1} width="100%">
              <div 
                className="group border border-dark p-8 hover:bg-dark hover:text-cream transition-colors duration-300 flex flex-col justify-between min-h-[300px]"
              >
                {/* Number */}
                <span className="text-6xl font-black opacity-20 group-hover:opacity-100 transition-opacity">
                  {service.id}
                </span>
                
                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-4 border-b-2 border-dark group-hover:border-cream pb-2 inline-block">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    {service.desc}
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