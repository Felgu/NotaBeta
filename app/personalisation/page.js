"use client";
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar1';
import Footer from '../../components/Footer';
import { db, auth } from '../../lib/firebase';  // Assure-toi que tu as correctement initialisé Firestore et l'authentification Firebase
import { doc, setDoc, getDoc, collection, addDoc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';

const Personnalisation = () => {
  const [user, setUser] = useState(null);
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [fields, setFields] = useState([]);
  const [newTemplateName, setNewTemplateName] = useState("");
  const router = useRouter();

  // Vérification de l'utilisateur connecté
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser); // Utilisateur connecté
        fetchTemplates(currentUser.uid);
      } else {
        router.push('/login'); // Rediriger vers la page de login si non connecté
      }
    });
  }, []);

  // Récupérer les gabarits de l'utilisateur
  const fetchTemplates = async (userId) => {
    const templatesRef = collection(db, 'users', userId, 'templates');
    const querySnapshot = await getDocs(templatesRef);
    const templatesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setTemplates(templatesList);
  };

  // Sélectionner un gabarit et charger ses champs
  const handleSelectTemplate = async (templateId) => {
    const templateRef = doc(db, 'users', user.uid, 'templates', templateId);
    const docSnap = await getDoc(templateRef);
    if (docSnap.exists()) {
      setSelectedTemplate(docSnap.data());
      setFields(docSnap.data().fields);
    }
  };

  // Ajouter un champ personnalisé
  const addField = () => {
    setFields([...fields, { id: Date.now(), label: 'Nouveau champ', value: '' }]);
  };

  // Mettre à jour la valeur d'un champ
  const handleChange = (id, value) => {
    setFields(fields.map(field => field.id === id ? { ...field, value } : field));
  };

  // Supprimer un champ
  const removeField = (id) => {
    setFields(fields.filter(field => field.id !== id));
  };

  // Créer un nouveau gabarit
  const handleCreateTemplate = async () => {
    if (newTemplateName.trim() === "") return;
    
    const newTemplate = {
      name: newTemplateName,
      fields: [] // Tu peux ajouter des champs par défaut si nécessaire
    };

    const docRef = await addDoc(collection(db, 'users', user.uid, 'templates'), newTemplate);
    setTemplates([...templates, { id: docRef.id, ...newTemplate }]);
    setNewTemplateName("");  // Réinitialiser le champ de création
  };

  // Sauvegarder un gabarit modifié
  const handleSaveTemplate = async () => {
    const templateRef = doc(db, 'users', user.uid, 'templates', selectedTemplate.id);
    await updateDoc(templateRef, {
      name: selectedTemplate.name,
      fields: fields
    });
    alert("Gabarit sauvegardé avec succès");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-[#0b263d] text-center mb-8">Personnalisation des Gabarits</h2>

        {/* Formulaire pour créer un nouveau gabarit */}
        <div className="mb-8">
          <input
            type="text"
            value={newTemplateName}
            onChange={(e) => setNewTemplateName(e.target.value)}
            placeholder="Nom du nouveau gabarit"
            className="p-4 border border-gray-300 text-[#01070C] text-lg rounded-lg w-full"
          />
          <button
            onClick={handleCreateTemplate}
            className="mt-4 px-6 py-3 bg-[#022F53] text-white rounded-lg"
          >
            Créer un nouveau gabarit
          </button>
        </div>

        {/* Liste des gabarits existants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {templates.map((template) => (
            <div
              key={template.id}
              className="cursor-pointer p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 transform hover:bg-yellow-100"
              onClick={() => handleSelectTemplate(template.id)}
            >
              <h3 className="text-xl font-bold text-black">{template.name}</h3>
              <p className="text-gray-500 mt-2">{template.description}</p>
            </div>
          ))}
        </div>

        {/* Section pour modifier un gabarit sélectionné */}
        {selectedTemplate && (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-[#0b263d]">Modifier le gabarit : {selectedTemplate.name}</h3>
            <form>
              {fields.map((field) => (
                <div key={field.id} className="mb-4">
                  <label className="block text-[#052F51]">{field.label}</label>
                  <input
                    type="text"
                    value={field.value}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className="w-full p-4 mt-2 text-[#08243B] border border-gray-300 rounded-lg"
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
                className="px-6 py-3 bg-blue-600 text-white rounded-lg mt-4"
              >
                Ajouter un champ
              </button>

              <button
                type="button"
                onClick={handleSaveTemplate}
                className="px-6 py-3 bg-[#097F48] text-white rounded-lg mt-4"
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
