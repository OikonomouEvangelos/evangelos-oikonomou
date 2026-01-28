import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-cream border-b-4 border-dark">
      <div className="flex w-full items-center justify-center py-6">
        
        {/* LOGO: Monogram Box */}
        <Link 
          href="/" 
          className="group relative flex items-center justify-center"
        >
          {/* Το μαύρο κουτί */}
          <div className="w-16 h-16 bg-dark flex items-center justify-center border-2 border-dark transition-all duration-300 group-hover:bg-cream">
            {/* Τα γράμματα EO */}
            <span className="text-2xl font-black text-cream tracking-tighter transition-colors duration-300 group-hover:text-dark">
              EO
            </span>
          </div>

          {/* Προαιρετικά: Το όνομα δίπλα (αν θες να φαίνεται) 
              Αν θες ΜΟΝΟ το κουτί, σβήσε το παρακάτω div */}
          <div className="ml-4 flex flex-col justify-center">
             <span className="text-lg font-bold text-dark leading-none uppercase tracking-wide">
               Evangelos
             </span>
             <span className="text-lg font-bold text-dark leading-none uppercase tracking-wide">
               Oikonomou
             </span>
          </div>

        </Link>

      </div>
    </header>
  );
}