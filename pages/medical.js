"use client"; // Utilisation de la fonctionnalité client-side de Next.js

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GabaritSoins = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    dateOfBirth: '',
    dateSoins: '',
    soinsEffectues: '',
    observations: '',
    traitementsAdministres: '',
    signesVitaux: {
      temperature: '',
      pa: '',
      fc: '',
      fr: '',
      spo2: '',
    },
    actionInfirmiere: '',
    prochaineEvaluation: '',
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données soumises:', formData);
  };

  return (
    <div className="bg-[#173A47] min-h-screen">
      {/* <Navbar /> */}

      <div className="container bg-[#173A47] mx-auto px-6 py-12">
        <h1 className="text-4xl font-semibold text-[#0b263d] text-center mb-6">Gabarit Soins Infirmiers</h1>

        {/* Formulaire interactif */}
        <form onSubmit={handleSubmit} className="space-y-32 bg-[#46a2c3] p-6">
          {/* Nom du patient */}
          <div className='bg-[#173A47] text-xl space-y-8' >
            <label className="block text-gray-700 text-xl">Nom du patient</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
              placeholder="Nom du patient"
            />
          </div>

          {/* Date de naissance */}
          <div>
            <label className="block text-gray-700 text-xl">Date de naissance</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Date des soins */}
          <div>
            <label className="block text-gray-700 text-xl">Date des soins</label>
            <input
              type="date"
              name="dateSoins"
              value={formData.dateSoins}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Soins effectués */}
          <div>
            <label className="block text-gray-700 text-xl">Soins effectués</label>
            <textarea
              name="soinsEffectues"
              value={formData.soinsEffectues}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
              rows="7"
              placeholder="Détaillez les soins effectués (pansement, injection, etc.)"
            />
          </div>

          {/* Observations */}
          <div>
            <label className="block text-gray-700 text-xl">Observations</label>
            <textarea
              name="observations"
              value={formData.observations}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
              rows="7"
              placeholder="Observations spécifiques concernant l'état du patient"
            />
          </div>

          {/* Traitements administrés */}
          <div>
            <label className="block text-gray-700 text-xl">Traitements administrés</label>
            <textarea
              name="traitementsAdministres"
              value={formData.traitementsAdministres}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
              rows="7"
              placeholder="Détails des traitements administrés au patient (médicaments, doses, fréquence)"
            />
          </div>

          {/* Signes vitaux */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold text-[#0b263d]">Signes vitaux</h2>
            <div className="grid grid-cols-2 gap-6 mt-4">
              <div>
                <label className="block text-gray-700 text-xl">Température (°C)</label>
                <input
                  type="number"
                  name="temperature"
                  value={formData.signesVitaux.temperature}
                  onChange={handleChange}
                  className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 37.5"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-xl">Pression artérielle</label>
                <input
                  type="text"
                  name="pa"
                  value={formData.signesVitaux.pa}
                  onChange={handleChange}
                  className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 120/80"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-xl">Fréquence cardiaque</label>
                <input
                  type="number"
                  name="fc"
                  value={formData.signesVitaux.fc}
                  onChange={handleChange}
                  className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 80 bpm"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-xl">Fréquence respiratoire</label>
                <input
                  type="number"
                  name="fr"
                  value={formData.signesVitaux.fr}
                  onChange={handleChange}
                  className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 18/min"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-xl">SpO2 (%)</label>
                <input
                  type="number"
                  name="spo2"
                  value={formData.signesVitaux.spo2}
                  onChange={handleChange}
                  className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
                  placeholder="Ex: 98%"
                />
              </div>
            </div>
          </div>

          {/* Action infirmière */}
          <div>
            <label className="block text-gray-700 text-xl">Action infirmière</label>
            <textarea
              name="actionInfirmiere"
              value={formData.actionInfirmiere}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
              rows="7"
              placeholder="Actions spécifiques réalisées par l'infirmier (éducation, conseils, suivi)"
            />
          </div>

          {/* Prochaine évaluation */}
          <div>
            <label className="block text-gray-700 text-xl">Prochaine évaluation</label>
            <input
              type="date"
              name="prochaineEvaluation"
              value={formData.prochaineEvaluation}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Bouton de soumission */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-[#173A47] transition-colors"
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

export default GabaritSoins;
