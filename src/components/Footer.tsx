import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-amazon-dark text-white mt-16 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.about.title')}</h3>
            <p className="text-gray-300">
              {t('footer.about.description')}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.usefulLinks.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-amazon-orange">
                  {t('footer.usefulLinks.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-amazon-orange">
                  {t('footer.usefulLinks.howItWorks')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-amazon-orange">
                  {t('footer.usefulLinks.contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.legal.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-amazon-orange">
                  {t('footer.legal.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-amazon-orange">
                  {t('footer.legal.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;