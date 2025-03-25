"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaHospital } from 'react-icons/fa';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from "../lib/firebase";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState(""); // Pour afficher le nom de l'utilisateur
  const router = useRouter();
  // const auth = getAuth(); // Firebase Authentication

  // Vérifie l'authentification dès que le composant se charge
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUserName(user.displayName || "Utilisateur"); // Si displayName est défini, l'utiliser sinon "Utilisateur"
      } else {
        setIsAuthenticated(false);
        setUserName("");
      }
    });

    return () => unsubscribe(); // Nettoyage de l'abonnement lors du démontage du composant
  }, [auth]);

  // Fonction pour la déconnexion de l'utilisateur
  const handleLogout = async () => {
    try {
      await signOut(auth); // Se déconnecter via Firebase
      router.push('/login'); // Rediriger vers la page de connexion après la déconnexion
    } catch (error) {
      console.error("Erreur lors de la déconnexion", error);
    }
  };

  return (
    <nav className="bg-[#22577a] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo avec un lien */}
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src="/assets/notitia.png"
            alt="Logo"
            width={80}
            height={80}
            className="text-white rounded-lg"
          />
          <span className="text-white text-4xl font-semibold">Notitia</span>
        </Link>

        {/* Liens de navigation */}
        <div className="space-x-16">
          <Link href="/" className="text-white hover:text-yellow-400">Accueil</Link>
          <Link href="/about" className="text-white hover:text-yellow-400">À propos</Link>
          <Link href="/contact" className="text-white hover:text-yellow-400">Contact</Link>

          {/* Liens conditionnels pour les utilisateurs connectés */}
          {isAuthenticated ? (
            <>
              <span className="text-white font-semibold">{`Bonjour, ${userName}`}</span> {/* Affiche le nom de l'utilisateur */}
              <Link href="/personalisation" className="text-white hover:text-yellow-400">Personnaliser les gabarits</Link>
              <button
                onClick={handleLogout}
                className="text-white bg-[#79154c] p-4 rounded-lg hover:text-[#ffffff] hover:bg-[#e28743]"
              >
                Se déconnecter
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-white bg-[#79154c] p-4 rounded-lg hover:text-[#ffffff] hover:bg-[#e28743]">Se connecter</Link>
              <Link href="/signup" className="text-white bg-[#747915] p-4 rounded-lg hover:text-[#ffffff]">Créer un compte</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
