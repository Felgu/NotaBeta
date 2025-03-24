"use client";
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../lib/firebase';  // Importer firebase.js depuis lib
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  // Fonction pour gérer la soumission du formulaire d'inscription
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Créer un utilisateur avec email et mot de passe
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Ajouter des données supplémentaires dans Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        createdAt: new Date(),
      });

      // Rediriger l'utilisateur vers la page de connexion ou la page d'accueil
      router.push('/login');
    } catch (err) {
      setError(err.message);  // Gérer les erreurs (par exemple, email déjà pris)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSignUp} className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4">Créer un compte</h2>

        {error && <p className="text-red-500">{error}</p>}

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 text-[#00171f] text-lg border border-gray-300 rounded"
            placeholder="Entrez votre email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 text-[#00171f] text-lgborder border-gray-300 rounded"
            placeholder="Entrez votre mot de passe"
          />
        </div>

        <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded">Créer un compte</button>
      </form>
    </div>
  );
};

export default SignUp;
