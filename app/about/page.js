// app/about.js
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12 text-center">
        {/* Titre de la section */}
        <h1 className="text-4xl font-bold text-black" aria-label="À propos de Notitia">
          À propos de Notitia
        </h1>

        {/* Description de l'application */}
        <p className="text-lg text-gray-900 mt-1">
          Notitia est une application dédiée à la gestion des prises de notes médicales.
          Elle est conçue pour faciliter le suivi des soins, l`historique médical, et la gestion
          des interventions chirurgicales des patients de manière simple et ergonomique.
        </p>
        
        <p className="text-lg text-gray-900 mt-4">
          Notre objectif est de fournir un outil intuitif et personnalisable, permettant aux
          professionnels de la santé, tels que les infirmiers et les médecins, d`améliorer leur
          efficacité et la qualité des soins prodigués aux patients.
        </p>
        
        {/* image explicative */}
        <div className="my-8">
          <Image 
            src="/assets/sage.png" 
            alt="Aperçu de Notitia"
            width={200} 
            height={400} 
            className="mx-auto"
          />
        </div>

        {/* Section de témoignages */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-black">Pourquoi choisir Notitia ?</h2>
          <p className="text-lg text-gray-900 mt-4">
            Notitia vous offre une interface simple et des outils puissants pour gérer efficacement
            les informations médicales de vos patients, tout en offrant une personnalisation complète
            des gabarits pour répondre aux besoins spécifiques de votre pratique.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
