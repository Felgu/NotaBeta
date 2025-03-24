import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Personnalisation = () => {
  // Liste des gabarits disponibles pour la personnalisation
  const templates = [
    { id: 1, name: 'Gabarit de Soins', description: 'Suivi des soins quotidiens' },
    { id: 2, name: 'Gabarit Médical', description: 'Historique médical du patient' },
    { id: 3, name: 'Gabarit Chirurgical', description: 'Suivi des interventions chirurgicales' },
    // Ajouter les autres gabarits si nécessaire
  ];

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [fields, setFields] = useState([]);

  // Sélectionner un gabarit et charger ses champs
  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    // Ici, vous pourriez charger les champs du gabarit depuis une base de données ou un fichier JSON
    setFields([
      { id: 1, label: 'Nom du patient', value: '' },
      { id: 2, label: 'Poids (kg)', value: '' },
      // Ajoutez ici d'autres champs du gabarit sélectionné
    ]);
  };

  // Mettre à jour la valeur d'un champ
  const handleChange = (id, value) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, value } : field
    ));
  };

  // Ajouter un champ personnalisé
  const addField = () => {
    setFields([...fields, { id: Date.now(), label: 'Nouveau champ', value: '' }]);
  };

  // Supprimer un champ
  const removeField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  };

  // Sauvegarder le gabarit modifié
  const handleSave = () => {
    console.log('Gabarit sauvegardé:', fields);
    // Vous pouvez envoyer les modifications à une API ou les enregistrer dans une base de données
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Section de personnalisation */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-[#0b263d] text-center mb-8">Personnalisation des Gabarits</h2>

        {/* Liste des gabarits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="cursor-pointer p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 transform hover:bg-yellow-100"
              onClick={() => handleSelectTemplate(template)}
            >
              <h3 className="text-xl font-bold text-black">{template.name}</h3>
              <p className="text-gray-500 mt-2">{template.description}</p>
            </div>
          ))}
        </div>

        {/* Formulaire pour personnaliser le gabarit */}
        {selectedTemplate && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-[#0b263d]">Modifier le gabarit : {selectedTemplate.name}</h3>
            <form>
              {fields.map((field) => (
                <div key={field.id} className="mb-4">
                  <label className="block text-gray-700">{field.label}</label>
                  <input
                    type="text"
                    value={field.value}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className="w-full p-4 mt-2 border border-gray-300 rounded-lg"
                    placeholder={field.label}
                  />
                  <button
                    type="button"
                    onClick={() => removeField(field.id)}
                    className="text-red-500 mt-2"
                  >
                    Supprimer ce champ
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addField}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg mt-4"
              >
                Ajouter un champ
              </button>

              <button
                type="button"
                onClick={handleSave}
                className="px-6 py-3 bg-green-600 text-white rounded-lg mt-4"
              >
                Sauvegarder les modifications
              </button>
            </form>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Personnalisation;
