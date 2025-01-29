import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header hideSelectors={true} showLanguageOnly={true} />
      <div className="flex-grow container mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-bold mb-6">{t("termsTitle")}</h1>
        
        <p className="mb-4">{t("termsIntro")}</p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">{t("termsService")}</h2>
            <p>{t("termsServiceText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t("termsAccuracy")}</h2>
            <p>{t("termsAccuracyText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t("termsAffiliation")}</h2>
            <p>{t("termsAffiliationText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t("termsLiability")}</h2>
            <p>{t("termsLiabilityText")}</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;