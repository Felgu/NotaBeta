import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GabaritSuiviPediatrique = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    poids: '',
    taille: '',
    vaccinations: '',
    developpement: '',
    symptomes: '',
    etatGeneral: '',
    impressions: '',
    planSoins: ''
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
        <h1 className="text-4xl font-bold text-[#0b263d]">Suivi Pédiatrique</h1>
        <p className="text-lg text-gray-700 mt-4">Formulaire de suivi pour les enfants selon la tranche d'âge</p>
      </div>

      {/* Formulaire de suivi pédiatrique */}
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

        {/* Âge du patient */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Âge du patient</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            placeholder="Âge en années"
          />
        </div>

        {/* Poids */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Poids (kg)</label>
          <input
            type="number"
            name="poids"
            value={formData.poids}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            placeholder="Poids du patient"
          />
        </div>

        {/* Taille */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Taille (cm)</label>
          <input
            type="number"
            name="taille"
            value={formData.taille}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            placeholder="Taille du patient"
          />
        </div>

        {/* Vaccinations */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Vaccinations effectuées</label>
          <textarea
            name="vaccinations"
            value={formData.vaccinations}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            rows="3"
            placeholder="Liste des vaccinations effectuées"
          />
        </div>

        {/* Suivi du développement */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Suivi du développement</label>
          <textarea
            name="developpement"
            value={formData.developpement}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            rows="3"
            placeholder="Observations sur le développement de l'enfant"
          />
        </div>

        {/* Symptômes observés */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Symptômes observés</label>
          <textarea
            name="symptomes"
            value={formData.symptomes}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            rows="3"
            placeholder="Symptômes ou signes observés"
          />
        </div>

        {/* État général */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">État général</label>
          <textarea
            name="etatGeneral"
            value={formData.etatGeneral}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            rows="3"
            placeholder="État général de l'enfant"
          />
        </div>

        {/* Impression clinique */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Impression clinique</label>
          <textarea
            name="impressions"
            value={formData.impressions}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            rows="3"
            placeholder="Impression clinique générale"
          />
        </div>

        {/* Plan de soins */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Plan de soins</label>
          <textarea
            name="planSoins"
            value={formData.planSoins}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            rows="3"
            placeholder="Plan de soins à suivre"
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

export default GabaritSuiviPediatrique;
