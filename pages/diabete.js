import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GabaritDiabete = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    glycemie: '',
    insuline: '',
    tension: '',
    observations: '',
    complications: ''
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
    // Tu peux ici gérer l'envoi des données ou la sauvegarde
    console.log(formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* <Navbar /> */}
      <div className="text-center py-12 bg-blue-100">
        <h1 className="text-4xl font-bold text-[#0b263d]">Suivi du Diabète</h1>
        <p className="text-lg text-gray-700 mt-4">Formulaire de suivi pour le diabète du patient</p>
      </div>

      {/* Formulaire de gabarit diabète */}
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

        {/* Glycémie */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Glycémie (mg/dL)</label>
          <input
            type="number"
            name="glycemie"
            value={formData.glycemie}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            placeholder="Glycémie du patient"
          />
        </div>

        {/* Insuline administrée */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Insuline administrée (unités)</label>
          <input
            type="number"
            name="insuline"
            value={formData.insuline}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            placeholder="Insuline administrée"
          />
        </div>

        {/* Tension artérielle */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Tension Artérielle (TA)</label>
          <input
            type="text"
            name="tension"
            value={formData.tension}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            placeholder="Tension artérielle"
          />
        </div>

        {/* Complications */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Complications observées</label>
          <textarea
            name="complications"
            value={formData.complications}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            rows="6"
            placeholder="Signes de complications observées"
          />
        </div>

        {/* Observations supplémentaires */}
        <div className="bg-[#173A47] p-4 rounded-lg text-xl">
          <label className="block text-gray-700 text-xl">Observations supplémentaires</label>
          <textarea
            name="observations"
            value={formData.observations}
            onChange={handleChange}
            className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
            rows="6"
            placeholder="Autres observations importantes"
          />
        </div>

        {/* Bouton de soumission */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-[#38a3a5] transition-colors"
          >
            Soumettre
          </button>
        </div>
      </form>

      {/* <Footer /> */}
    </div>
  );
};

export default GabaritDiabete;
