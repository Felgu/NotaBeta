import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Terms = () => {
  return (
    <div className="bg-[#d0dbe4] min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Section des conditions d'utilisation */}
      <div className="container mx-auto px-4 py-12 text-center text-[#0d2e49]">
        <h1 className="text-4xl font-bold text-[#0d2e49]">Conditions d`utilisation</h1>

        <div className="mt-8 text-left">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p className="text-lg text-gray-600 mt-4">
            Les présentes Conditions d`utilisation régissent l`accès et l`utilisation de l`application Notitia.
            En accédant ou en utilisant Notitia, vous acceptez ces conditions.
          </p>

          <h2 className="text-2xl font-semibold mt-8">1. Acceptation des conditions</h2>
          <p className="text-lg text-gray-600 mt-4">
            En utilisant Notitia, vous acceptez de respecter ces conditions et tous les règlements applicables.
            Si vous n`êtes pas d`accord avec ces conditions, vous devez cesser d`utiliser l`application.
          </p>

          <h2 className="text-2xl font-semibold mt-8">2. Modifications des conditions</h2>
          <p className="text-lg text-gray-600 mt-4">
            Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entreront en vigueur
            dès leur publication sur cette page. Il est de votre responsabilité de consulter régulièrement cette page.
          </p>

          <h2 className="text-2xl font-semibold mt-8">3. Utilisation de l`application</h2>
          <p className="text-lg text-gray-600 mt-4">
            Vous acceptez d`utiliser Notitia uniquement à des fins légales et conformément aux lois en vigueur.
            Vous vous engagez à ne pas utiliser l`application d`une manière qui pourrait endommager, désactiver, ou altérer
            les services de Notitia.
          </p>

          <h2 className="text-2xl font-semibold mt-8">4. Responsabilité</h2>
          <p className="text-lg text-gray-600 mt-4">
            Notitia ne peut être tenue responsable des erreurs ou des omissions dans le contenu. Nous nous efforçons de
            fournir un service fiable, mais nous ne garantissons pas l`exactitude ou la disponibilité continue de l`application.
          </p>

          <h2 className="text-2xl font-semibold mt-8">5. Confidentialité</h2>
          <p className="text-lg text-gray-600 mt-4">
            Pour en savoir plus sur la manière dont nous collectons, utilisons et protégeons vos informations, veuillez consulter
            notre politique de confidentialité.
          </p>

          <h2 className="text-2xl font-semibold mt-8">6. Contact</h2>
          <p className="text-lg text-gray-600 mt-4">
            Si vous avez des questions concernant ces conditions d`utilisation, veuillez nous contacter via notre page de
            <a href="/contact" className="text-primary hover:underline"> contact</a>.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Terms;
