"use client"; // Χρειαζόμαστε client interactivity

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        event.target.reset(); // Καθαρίζει τη φόρμα
      } else {
        alert("Κάτι πήγε στραβά. Προσπάθησε ξανά.");
      }
    } catch (error) {
      console.error(error);
      alert("Υπήρξε πρόβλημα με την σύνδεση.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="w-full bg-cream text-dark py-24 border-t border-dark">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Let's Talk
          </h2>
          <p className="text-lg font-medium opacity-70 max-w-lg mx-auto">
            Στείλε μου μήνυμα για το project σου και θα απαντήσω άμεσα.
          </p>
        </div>

        {success ? (
          <div className="p-8 border-2 border-green-600 bg-green-100 text-green-800 text-center font-bold">
            <h3 className="text-2xl uppercase mb-2">Μηνυμα εσταλη!</h3>
            <p>Ευχαριστώ για την επικοινωνία. Θα απαντήσω σύντομα.</p>
            <button 
              onClick={() => setSuccess(false)} 
              className="mt-4 underline"
            >
              Αποστολή νέου μηνύματος
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest">Name</label>
                <input type="text" name="name" id="name" required placeholder="ΟΝΟΜΑΤΕΠΩΝΥΜΟ" className="w-full bg-transparent border-2 border-dark p-4 font-bold placeholder:text-dark/30 focus:bg-dark focus:text-cream focus:outline-none transition-colors duration-300 rounded-none" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest">Email</label>
                <input type="email" name="email" id="email" required placeholder="EMAIL@EXAMPLE.COM" className="w-full bg-transparent border-2 border-dark p-4 font-bold placeholder:text-dark/30 focus:bg-dark focus:text-cream focus:outline-none transition-colors duration-300 rounded-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest">Subject</label>
              <select name="subject" id="subject" className="w-full bg-transparent border-2 border-dark p-4 font-bold text-dark focus:bg-dark focus:text-cream focus:outline-none transition-colors duration-300 rounded-none appearance-none cursor-pointer">
                <option value="General">Γενική Ερώτηση</option>
                <option value="Booking System">Booking System Development</option>
                <option value="Website">Κατασκευή Website</option>
                <option value="Hiring">Πρόταση Συνεργασίας</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest">Message</label>
              <textarea name="message" id="message" rows={6} required placeholder="ΓΡΑΨΕ ΤΟ ΜΗΝΥΜΑ ΣΟΥ ΕΔΩ..." className="w-full bg-transparent border-2 border-dark p-4 font-bold placeholder:text-dark/30 focus:bg-dark focus:text-cream focus:outline-none transition-colors duration-300 rounded-none resize-none"></textarea>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="mt-4 w-full py-5 bg-dark text-cream text-sm font-black uppercase tracking-[0.2em] border-2 border-dark hover:bg-cream hover:text-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-wait"
            >
              {loading ? "ΑΠΟΣΤΟΛΗ..." : "ΑΠΟΣΤΟΛΗ ΜΗΝΥΜΑΤΟΣ"}
            </button>

          </form>
        )}

      </div>
    </section>
  );
}