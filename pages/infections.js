"use client";  // Utilisation de la fonctionnalité client-side de Next.js

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GabaritInfectionUrinaire = () => {
  // State pour tous les champs du formulaire
  const [formData, setFormData] = useState({
    symptomes: [],
    douleur: '',
    temperature: '',
    brulureUrinaire: false,
    fréquenceUrinaire: '',
    analyseUrine: '',
    examenPhysique: '',
    impression: 'Infection urinaire probable',
    plan: [],
  });

  // Fonction pour mettre à jour les champs du formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Fonction pour soumettre le formulaire (peut être lié à une API ou une base de données)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données soumises:', formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* <Navbar />0 */}
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#0b263d] text-center">Gabarit - Infection Urinaire</h1>

        {/* Formulaire interactif */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Symptômes */}
          <div>
            <h2 className="text-xl font-semibold text-[#0b263d] mt-6">Symptômes</h2>
            <div className="flex flex-wrap gap-4">
              <div>
                <input
                  type="checkbox"
                  name="symptomes"
                  value="Fièvre"
                  checked={formData.symptomes.includes('Fièvre')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Fièvre</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="symptomes"
                  value="Brûlures urinaires"
                  checked={formData.symptomes.includes('Brûlures urinaires')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Brûlures urinaires</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="symptomes"
                  value="Fréquence urinaire élevée"
                  checked={formData.symptomes.includes('Fréquence urinaire élevée')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Fréquence urinaire élevée</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="symptomes"
                  value="Douleur pelvienne"
                  checked={formData.symptomes.includes('Douleur pelvienne')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Douleur pelvienne</label>
              </div>
            </div>
          </div>

          {/* Douleur */}
          <div>
            <label className="block text-gray-700">Douleur (sur 10)</label>
            <input
              type="number"
              name="douleur"
              value={formData.douleur}
              onChange={handleChange}
              min="0"
              max="10"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Notez la douleur de 0 à 10"
            />
          </div>

          {/* Température */}
          <div>
            <label className="block text-gray-700">Température (°C)</label>
            <input
              type="number"
              name="temperature"
              value={formData.temperature}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Ex: 38.1"
            />
          </div>

          {/* Brûlure urinaire */}
          <div>
            <label className="block text-gray-700">Brûlure urinaire</label>
            <input
              type="checkbox"
              name="brulureUrinaire"
              checked={formData.brulureUrinaire}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Présente</span>
          </div>

          {/* Fréquence urinaire */}
          <div>
            <label className="block text-gray-700">Fréquence urinaire</label>
            <input
              type="number"
              name="fréquenceUrinaire"
              value={formData.fréquenceUrinaire}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Nombre de fois par jour"
            />
          </div>

          {/* Analyse de l'urine */}
          <div>
            <label className="block text-gray-700">Analyse de l'urine</label>
            <textarea
              name="analyseUrine"
              value={formData.analyseUrine}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              rows="3"
              placeholder="Détails sur l'analyse d'urine"
            />
          </div>

          {/* Examen physique */}
          <div>
            <label className="block text-gray-700">Examen physique</label>
            <textarea
              name="examenPhysique"
              value={formData.examenPhysique}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              rows="3"
              placeholder="Détails de l'examen physique"
            />
          </div>

          {/* Impression clinique */}
          <div>
            <label className="block text-gray-700">Impression clinique</label>
            <textarea
              name="impression"
              value={formData.impression}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              rows="3"
              placeholder="Ex: Infection urinaire probable"
            />
          </div>

          {/* Plan thérapeutique */}
          <div>
            <h2 className="text-xl font-semibold text-[#0b263d] mt-6">Plan thérapeutique</h2>
            <div className="flex flex-wrap gap-4">
              <div>
                <input
                  type="checkbox"
                  name="plan"
                  value="Antibiotiques"
                  checked={formData.plan.includes('Antibiotiques')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Antibiotiques</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="plan"
                  value="Hydratation"
                  checked={formData.plan.includes('Hydratation')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Hydratation</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="plan"
                  value="Examen complémentaire"
                  checked={formData.plan.includes('Examen complémentaire')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Examen complémentaire</label>
              </div>
            </div>
          </div>

          {/* Bouton de soumission */}
          <div className="mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default GabaritInfectionUrinaire;
