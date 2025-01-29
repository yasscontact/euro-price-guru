import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Contact = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header hideSelectors={true} showLanguageOnly={true} />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">{t('contactTitle')}</h1>
        <p>
          {t('contactText')}{" "}
          <a href="mailto:yass.contact.1997@gmail.com" className="text-amazon-orange hover:underline">
            yass.contact.1997@gmail.com
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;