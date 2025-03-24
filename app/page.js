"use client";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Page = () => {
  const [hovered, setHovered] = useState(null);

  // Liste des gabarits, incluant les nouveaux services spécifiques
  const templates = [
    { id: 1, name: 'Gabarit de Soins', description: 'Suivi des soins quotidiens', image: '/images/window.svg', link: '/soins' },
    { id: 2, name: 'Gabarit Médical', description: 'Historique médical du patient', image: '/images/globe.svg', link: '/medical' },
    { id: 3, name: 'Gabarit Chirurgical', description: 'Suivi des interventions chirurgicales', image: '/images/file.svg', link: '/chirurgical' },
    { id: 4, name: 'Infection Urinaire', description: 'Suivi des infections urinaires', image: '/images/infection.svg', link: '/infectionUrinaire' },
    { id: 5, name: 'Céphalée', description: 'Suivi des céphalées', image: '/images/cephalee.svg', link: '/gabarit-cephalee' },
    { id: 6, name: 'Santé Préventive', description: 'Suivi de la santé préventive', image: '/images/sante-preventive.svg', link: '/preventive' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Ajout du Navbar */}
      <Navbar />
      {/* Section d'introduction */}
      <div className="text-center py-12 bg-blue-100">
        <h1 className="text-4xl font-bold text-[#0b263d]">Gabarits cliniques adaptables </h1>
        <p className="text-lg text-gray-700 mt-4">Votre application de prise de notes médicales, simple, ergonomique et personnalisable.</p>
      </div>

      {/* Section des gabarits */}
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-[#0b263d] text-center">Gabarits disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="relative p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 transform hover:bg-yellow-100"
              onMouseEnter={() => setHovered(template.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link href={template.link}>
                <div className="group relative p-6 rounded-lg shadow-lg transform transition-all duration-300">
                  <div className="group-hover:scale-105 group-hover:bg-yellow-100">
                    <Image 
                      src={template.image} 
                      alt={`Image représentant le gabarit ${template.name}`} 
                      width={300} 
                      height={200} 
                      className="rounded-lg mb-4" 
                    />
                    <h3 className="text-xl font-bold text-black">{template.name}</h3>
                    <p className="text-gray-500 mt-2">{template.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Ajout du Footer */}
      <Footer /> 
    </div>
  );
};

export default Page;
