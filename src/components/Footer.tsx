import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-amazon-dark text-white mt-16 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">À propos</h3>
            <p className="text-gray-300">
              EuroPriceGuru vous aide à trouver les meilleurs prix sur Amazon à
              travers l'Europe.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-amazon-orange">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-amazon-orange">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-amazon-orange"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-amazon-orange"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-300 hover:text-amazon-orange"
                >
                  Conditions d'utilisation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2024 EuroPriceGuru. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;