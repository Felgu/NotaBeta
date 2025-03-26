"use client"; // Utilisation de la fonctionnalité client-side de Next.js

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GabaritCephalee = () => {
  // State pour les champs du formulaire
  const [formData, setFormData] = useState({
    patientName: '',
    dateOfBirth: '',
    typeCephalee: '',
    dateDebut: '',
    duree: '',
    intensite: '',
    facteursDeclenchants: [],
    localisation: '',
    symptomesAssocies: [],
    traitementAdministre: '',
    evolution: '',
    recommandations: '',
  });

  // Fonction pour mettre à jour les champs du formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name in formData) {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données soumises:', formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#0b263d] text-center">Gabarit Céphalée</h1>

        {/* Formulaire interactif */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Nom du patient */}
          <div>
            <label className="block text-gray-700">Nom du patient</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Nom du patient"
            />
          </div>

          {/* Date de naissance */}
          <div>
            <label className="block text-gray-700">Date de naissance</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Type de céphalée */}
          <div>
            <label className="block text-gray-700">Type de céphalée</label>
            <input
              type="text"
              name="typeCephalee"
              value={formData.typeCephalee}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Ex: Migraines, céphalée tensionnelle"
            />
          </div>

          {/* Date de début */}
          <div>
            <label className="block text-gray-700">Date de début</label>
            <input
              type="date"
              name="dateDebut"
              value={formData.dateDebut}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Durée de la céphalée */}
          <div>
            <label className="block text-gray-700">Durée</label>
            <input
              type="text"
              name="duree"
              value={formData.duree}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Ex: 2 heures, 3 jours"
            />
          </div>

          {/* Intensité de la céphalée */}
          <div>
            <label className="block text-gray-700">Intensité (sur 10)</label>
            <input
              type="number"
              name="intensite"
              value={formData.intensite}
              onChange={handleChange}
              min="0"
              max="10"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Sur une échelle de 0 à 10"
            />
          </div>

          {/* Facteurs déclenchants */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-[#0b263d]">Facteurs déclenchants</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <div>
                <input
                  type="checkbox"
                  name="facteursDeclenchants"
                  value="Stress"
                  checked={formData.facteursDeclenchants.includes('Stress')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Stress</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="facteursDeclenchants"
                  value="Lumière"
                  checked={formData.facteursDeclenchants.includes('Lumière')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Lumière vive</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="facteursDeclenchants"
                  value="Manque de sommeil"
                  checked={formData.facteursDeclenchants.includes('Manque de sommeil')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Manque de sommeil</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="facteursDeclenchants"
                  value="Alimentation"
                  checked={formData.facteursDeclenchants.includes('Alimentation')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Alimentation</label>
              </div>
            </div>
          </div>

          {/* Localisation de la céphalée */}
          <div>
            <label className="block text-gray-700">Localisation de la céphalée</label>
            <input
              type="text"
              name="localisation"
              value={formData.localisation}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Ex: Frontale, occipitale"
            />
          </div>

          {/* Symptômes associés */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-[#0b263d]">Symptômes associés</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <div>
                <input
                  type="checkbox"
                  name="symptomesAssocies"
                  value="Nausées"
                  checked={formData.symptomesAssocies.includes('Nausées')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Nausées</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="symptomesAssocies"
                  value="Vomissements"
                  checked={formData.symptomesAssocies.includes('Vomissements')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Vomissements</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="symptomesAssocies"
                  value="Sensibilité au bruit"
                  checked={formData.symptomesAssocies.includes('Sensibilité au bruit')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Sensibilité au bruit</label>
              </div>
            </div>
          </div>

          {/* Traitement administré */}
          <div>
            <label className="block text-gray-700">Traitement administré</label>
            <textarea
              name="traitementAdministre"
              value={formData.traitementAdministre}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Médicaments administrés, doses et fréquence"
            />
          </div>

          {/* Evolution */}
          <div>
            <label className="block text-gray-700">Évolution</label>
            <textarea
              name="evolution"
              value={formData.evolution}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Ex: Amélioration, aggravation, état stable"
            />
          </div>

          {/* Recommandations */}
          <div>
            <label className="block text-gray-700">Recommandations</label>
            <textarea
              name="recommandations"
              value={formData.recommandations}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Recommandations pour le patient"
            />
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

      <Footer />
    </div>
  );
};

export default GabaritCephalee;
