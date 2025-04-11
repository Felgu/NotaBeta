import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from "../lib/firebase";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState(""); 
  const [menuOpen, setMenuOpen] = useState(false);  // Etat pour ouvrir/fermer le menu déroulant
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUserName(user.displayName || "Utilisateur");
      } else {
        setIsAuthenticated(false);
        setUserName("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error("Erreur lors de la déconnexion", error);
    }
  };

  return (
    <nav className="bg-[#0f81ab] p-14 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-white text-4xl font-semibold hover:text-yellow-400">
          Notitia
        </span>
        <div className="space-x-16">
          {isAuthenticated ? (
            <>
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-white font-semibold"
                >
                  Bonjour, {userName}
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      Se déconnecter
                    </button>
                  </div>
                )}
              </div>
              <Link href="/personalisation" className="text-white hover:text-yellow-400 hover:text-xlg">Personnaliser les gabarits</Link>
            </>
          ) : (
            <>
              <Link href="/" className="text-2xl text-white hover:text-[#eca72c]">Accueil</Link>
              <Link href="/about" className="text-2xl text-white hover:text-yellow-400">À propos</Link>
              <Link href="/contact" className="text-2xl text-white hover:text-yellow-400">Contact</Link>
              <Link href="/login" className="text-2xl text-white bg-[#2198ED] p-4 rounded-lg hover:text-[#ffffff] hover:bg-[#e28743]">Se connecter</Link>
              <Link href="/signup" className="text-2xl text-white bg-[#1e479a] p-4 rounded-lg hover:text-[#ffffff] hover:bg-[#e28743]">Créer un compte</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
