"use client"; // Utilisation de la fonctionnalité client-side de Next.js

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GabaritChirurgical = () => {
  // State pour les champs du formulaire
  const [formData, setFormData] = useState({
    typeChirurgie: '',
    dateChirurgie: '',
    anesthesie: '',
    douleurPostOp: '',
    signesVitaux: {
      temperature: '',
      pa: '',
      fc: '',
      fr: '',
      spo2: '',
    },
    complications: [],
    soinsPostOp: '',
    recommandations: '',
  });

  // Fonction pour mettre à jour les champs du formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name in formData.signesVitaux) {
      setFormData({
        ...formData,
        signesVitaux: {
          ...formData.signesVitaux,
          [name]: type === 'checkbox' ? checked : value,
        },
      });
    } else {
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
      {/* <Navbar /> */}
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#0b263d] text-center">Gabarit Chirurgical</h1>

        {/* Formulaire interactif */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Type de chirurgie */}
          <div>
            <label className="block text-gray-700">Type de Chirurgie</label>
            <input
              type="text"
              name="typeChirurgie"
              value={formData.typeChirurgie}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Ex: Chirurgie abdominale"
            />
          </div>

          {/* Date de chirurgie */}
          <div>
            <label className="block text-gray-700">Date de Chirurgie</label>
            <input
              type="date"
              name="dateChirurgie"
              value={formData.dateChirurgie}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Anesthésie */}
          <div>
            <label className="block text-gray-700">Anesthésie utilisée</label>
            <input
              type="text"
              name="anesthesie"
              value={formData.anesthesie}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Ex: Anesthésie générale"
            />
          </div>

          {/* Douleur post-opératoire */}
          <div>
            <label className="block text-gray-700">Douleur post-opératoire (sur 10)</label>
            <input
              type="number"
              name="douleurPostOp"
              value={formData.douleurPostOp}
              onChange={handleChange}
              min="0"
              max="10"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              placeholder="Notez la douleur de 0 à 10"
            />
          </div>

          {/* Signes vitaux */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-[#0b263d]">Signes vitaux</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-gray-700">Température (°C)</label>
                <input
                  type="number"
                  name="temperature"
                  value={formData.signesVitaux.temperature}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 37.5"
                />
              </div>

              <div>
                <label className="block text-gray-700">Pression artérielle</label>
                <input
                  type="text"
                  name="pa"
                  value={formData.signesVitaux.pa}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 120/80"
                />
              </div>

              <div>
                <label className="block text-gray-700">Fréquence cardiaque</label>
                <input
                  type="number"
                  name="fc"
                  value={formData.signesVitaux.fc}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 80 bpm"
                />
              </div>

              <div>
                <label className="block text-gray-700">Fréquence respiratoire</label>
                <input
                  type="number"
                  name="fr"
                  value={formData.signesVitaux.fr}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 18/min"
                />
              </div>

              <div>
                <label className="block text-gray-700">SpO2 (%)</label>
                <input
                  type="number"
                  name="spo2"
                  value={formData.signesVitaux.spo2}
                  onChange={handleChange}
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 98%"
                />
              </div>
            </div>
          </div>

          {/* Complications */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-[#0b263d]">Complications</h2>
            <div className="flex flex-wrap gap-4">
              <div>
                <input
                  type="checkbox"
                  name="complications"
                  value="Infection"
                  checked={formData.complications.includes('Infection')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Infection</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="complications"
                  value="Hémorragie"
                  checked={formData.complications.includes('Hémorragie')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Hémorragie</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="complications"
                  value="Trouble respiratoire"
                  checked={formData.complications.includes('Trouble respiratoire')}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Trouble respiratoire</label>
              </div>
            </div>
          </div>

          {/* Soins post-opératoires */}
          <div>
            <label className="block text-gray-700">Soins post-opératoires</label>
            <textarea
              name="soinsPostOp"
              value={formData.soinsPostOp}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Ex: Surveillance de la plaie, administration des analgésiques, suivi des signes vitaux"
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
              placeholder="Ex: Repos, suivi médical dans les 48 heures"
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

      {/* <Footer /> */}
    </div>
  );
};

export default GabaritChirurgical;
