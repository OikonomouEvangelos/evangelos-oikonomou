export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-cream mt-auto">
      
      <div className="w-full py-16 flex flex-col items-center text-center gap-8">
        
        {/* Branding - Φυσική γραφή */}
        <div className="flex flex-col gap-2">
          <h3 className="text-3xl font-bold text-cream">
            Evangelos Oikonomou
          </h3>
          {/* Αφαίρεσα uppercase και tracking για πιο καθαρό look */}
          <p className="text-sm text-cream/70">
            Web Application Developer
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-12 text-sm font-bold justify-center mt-4">
          <a 
            href="https://github.com/evangelos-oikonomou" 
            target="_blank" 
            className="text-cream hover:underline underline-offset-8 decoration-2 transition-all"
          >
            GitHub
          </a>
          
          <a 
            href="mailto:to_email_sou@gmail.com"
            className="text-cream hover:underline underline-offset-8 decoration-2 transition-all"
          >
            Email Me
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-cream/10 bg-dark py-6 text-center">
        <p className="text-xs text-cream/40">
          © {currentYear} All Rights Reserved. Designed & Developed by Oikonomou.Dev
        </p>
      </div>
    </footer>
  );
}