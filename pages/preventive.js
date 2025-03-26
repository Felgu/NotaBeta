"use client";  // Utilisation de la fonctionnalité client-side de Next.js

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GabaritSantePreventive = () => {
  // State pour tous les champs du formulaire
  const [formData, setFormData] = useState({
    poids: '',
    taille: '',
    tourDeTaille: '',
    imc: '',
    ta: '',
    fc: '',
    fr: '',
    spo2: '',
    temperature: '',
    oedeme: false,
    retourCapillaire: '',
    apparence: '',
    impression: 'Bonne santé',
    tests: [],
  });

  // Fonction pour mettre à jour les champs du formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Fonction pour soumettre le formulaire (peut être liée à une API ou une base de données)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données soumises:', formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* <Navbar /> */}
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-[#0b263d] text-center">Gabarit de Santé Préventive</h1>

        {/* Formulaire interactif */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Signe visible */}
          <div>
            <h2 className="text-xl font-semibold text-[#0b263d] mt-6">Apparence générale</h2>
            <input
              type="text"
              name="apparence"
              value={formData.apparence}
              onChange={handleChange}
              placeholder="Entrez l'apparence générale du patient"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Signes vitaux */}
          <h2 className="text-xl font-semibold text-[#0b263d] mt-6">Signes vitaux</h2>
          <div className="grid grid-cols-2 gap-7">
            <div>
              <label className="block text-gray-700"> Tension artérielle (TA) </label>
              <input
                type="text"
                name="ta"
                value={formData.ta}
                onChange={handleChange}
                placeholder="Ex: 120/80"
                className="w-full p-3 mt-20 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Fréquence cardiaque (FC)</label>
              <input
                type="number"
                name="fc"
                value={formData.fc}
                onChange={handleChange}
                placeholder="Bpm"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Fréquence respiratoire (FR)</label>
              <input
                type="number"
                name="fr"
                value={formData.fr}
                onChange={handleChange}
                placeholder="Cycles/min"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">SpO2 (%)</label>
              <input
                type="number"
                name="spo2"
                value={formData.spo2}
                onChange={handleChange}
                placeholder="Ex: 98%"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Température (°C)</label>
              <input
                type="number"
                name="temperature"
                value={formData.temperature}
                onChange={handleChange}
                placeholder="Ex: 37.2"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Mesures physiques */}
          <h2 className="text-xl font-semibold text-[#0b263d] mt-6">Mesures physiques</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Poids (kg)</label>
              <input
                type="number"
                name="poids"
                value={formData.poids}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Taille (cm)</label>
              <input
                type="number"
                name="taille"
                value={formData.taille}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">Tour de taille (cm)</label>
              <input
                type="number"
                name="tourDeTaille"
                value={formData.tourDeTaille}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700">IMC</label>
              <input
                type="text"
                name="imc"
                value={formData.imc}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Autres examens */}
          <div>
            <h2 className="text-xl font-semibold text-[#0b263d] mt-6">Examen clinique</h2>
            <label className="block text-gray-700">Œdème</label>
            <input
              type="checkbox"
              name="oedeme"
              checked={formData.oedeme}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Présence dœdème</span>
          </div>

          {/* Impression et tests */}
          <h2 className="text-xl font-semibold text-[#0b263d] mt-6">Impression et Plan</h2>
          <div>
            <label className="block text-gray-700">Impression</label>
            <textarea
              name="impression"
              value={formData.impression}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
              rows="3"
            />
          </div>

          {/* Tests recommandés */}
          <div className="mt-4">
            <label className="block text-gray-700">Tests recommandés</label>
            <select
              name="tests"
              multiple
              value={formData.tests}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg"
            >
              <option value="testFit">Test de forme physique</option>
              <option value="colonoscopie">Colonoscopie</option>
              <option value="cardio">Consultation en cardiologie</option>
              <option value="vaccination">Vaccination</option>
            </select>
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

export default GabaritSantePreventive;
