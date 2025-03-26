"use client";
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Logique d'envoi du formulaire ici ( envoi d'email ou stockage des données)
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Section principale de contact */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-black" aria-label="Contactez-nous">
          Contactez-nous
        </h1>
        <p className="text-lg text-gray-900 mt-4">
          Vous avez des questions ou besoin d`aide ? N`hésitez pas à nous contacter !
        </p>

        {/* Formulaire de contact */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 max-w-lg mx-auto">
          <div>
            <label htmlFor="name" className="block text-left text-gray-700 font-semibold">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-2 px-4 py-3 w-full border border-gray-300 text-black bg-white rounded-lg"
              placeholder="Nom & prenom"
              aria-label="Nom"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-left text-gray-700 font-semibold">
              Courriel
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-2 px-4 py-3 w-full border border-gray-300 text-black rounded-lg"
              placeholder="Votre adresse courriel"
              aria-label="Email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-left text-gray-700 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              className="mt-2 px-4 py-3 w-full text-black border border-gray-300 rounded-lg"
              placeholder="Votre message"
              aria-label="Message"
            />
          </div>

          {/* Bouton d'envoi */}
          <div className="mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-[#113d61] text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Envoyer
            </button>
          </div>

          {/* Feedback après envoi */}
          {isSubmitted && (
            <div className="mt-6 text-green-600">
              <p>Merci ! Votre message a été envoyé avec succès.</p>
            </div>
          )}
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
