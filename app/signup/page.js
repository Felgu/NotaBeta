"use client";
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../../lib/firebase';  // Importer firebase.js depuis lib
import { doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState(''); // Nouveau champ prénom
  const [lastName, setLastName] = useState(''); // Nouveau champ nom
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Mettre à jour le profil avec le nom et prénom
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`, // Mettre le displayName avec le prénom et nom
      });

      // Ajouter des données supplémentaires dans Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        firstName,
        lastName,
        createdAt: new Date(),
      });

      // Rediriger l'utilisateur vers la page de connexion
      router.push('/login');
    } catch (err) {
      setError(err.message);  // Gérer les erreurs (par exemple, email déjà pris)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3cbbb1]">
      <form onSubmit={handleSignUp} className="bg-white p-6 rounded-lg shadow-lg w-180">
        <h2 className="text-2xl font-bold text-[#2a1e5c] mb-4">Créer un compte</h2>

        {error && <p className="text-red-500">{error}</p>}

        <div className="mb-4 text-lg ">
          <label className="block text-gray-700 rounded-lg" htmlFor="firstName">Prénom</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="w-full p-2 text-[#00171f] text-lg border border-gray-300 rounded"
            placeholder="Entrez votre prénom"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="lastName">Nom</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="w-full p-2 text-[#00171f] text-lg border border-gray-300 rounded"
            placeholder="Entrez votre nom"
          />
        </div>

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
            className="w-full p-2 text-[#00171f] text-lg border border-gray-300 rounded"
            placeholder="Entrez votre mot de passe"
          />
        </div>

        <button type="submit" className="w-full p-2 bg-[#3c57ba] text-white text-xl rounded hover:bg-[#BA703C]">Créer</button>
      </form>
    </div>
  );
};

export default SignUp;
