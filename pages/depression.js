import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GabaritDepression = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    symptoms: '',
    depressionScale: '',
    anxietyScale: '',
    medication: '',
    therapy: '',
    familyHistory: '',
    personalHistory: '',
    clinicalImpression: '',
    carePlan: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez ici gérer l'envoi des données ou la sauvegarde
    console.log(formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="text-center py-12 bg-blue-100">
        <h1 className="text-4xl font-bold text-[#0b263d]">Suivi Psychologique - Dépression et Anxiété</h1>
        <p className="text-lg text-gray-700 mt-4">Formulaire pour évaluer la dépression et l'anxiété du patient</p>
      </div>

      {/* Formulaire de suivi dépression/anxiété */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-[#46a2c3] p-6 rounded-lg">
        {/* Nom du patient */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
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

        {/* Symptômes observés */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Symptômes observés</label>
          <textarea
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            rows="3"
            placeholder="Décrire les symptômes physiques et mentaux observés"
          />
        </div>

        {/* Échelle de dépression */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Échelle de dépression (HAM-D)</label>
          <input
            type="number"
            name="depressionScale"
            value={formData.depressionScale}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            placeholder="Score de l'échelle de dépression"
          />
        </div>

        {/* Échelle d'anxiété */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Échelle d'anxiété (BAI)</label>
          <input
            type="number"
            name="anxietyScale"
            value={formData.anxietyScale}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            placeholder="Score de l'échelle d'anxiété"
          />
        </div>

        {/* Médicaments en cours */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Médicaments en cours</label>
          <textarea
            name="medication"
            value={formData.medication}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            rows="3"
            placeholder="Médicaments que le patient prend actuellement"
          />
        </div>

        {/* Thérapies en cours */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Thérapies en cours</label>
          <textarea
            name="therapy"
            value={formData.therapy}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            rows="3"
            placeholder="Thérapies que le patient suit actuellement (par exemple, thérapie cognitivo-comportementale)"
          />
        </div>

        {/* Antécédents familiaux */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Antécédents familiaux de troubles psychologiques</label>
          <textarea
            name="familyHistory"
            value={formData.familyHistory}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            rows="3"
            placeholder="Antécédents familiaux de dépression, anxiété ou autres troubles psychiatriques"
          />
        </div>

        {/* Antécédents personnels */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Antécédents personnels</label>
          <textarea
            name="personalHistory"
            value={formData.personalHistory}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            rows="3"
            placeholder="Antécédents personnels de dépression, anxiété, ou autres troubles psychiatriques"
          />
        </div>

        {/* Impression clinique */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Impression clinique</label>
          <textarea
            name="clinicalImpression"
            value={formData.clinicalImpression}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            rows="3"
            placeholder="Impression clinique sur l'état mental du patient"
          />
        </div>

        {/* Plan de soins */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Plan de soins</label>
          <textarea
            name="carePlan"
            value={formData.carePlan}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            rows="3"
            placeholder="Plan de soins, suivi et traitement"
          />
        </div>

        {/* Bouton de soumission */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Soumettre
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default GabaritDepression;
