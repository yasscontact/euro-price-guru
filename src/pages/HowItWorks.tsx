import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header hideSelectors={true} showLanguageOnly={true} />
      <div className="flex-grow container mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-bold mb-6">{t("howItWorksTitle")}</h1>
        
        <p className="mb-6">
          {t("howItWorksIntro")}
        </p>

        <div className="space-y-6">
          <section>
            <p>{t("howItWorksSearch")}</p>
          </section>

          <section>
            <p>{t("howItWorksCompare")}</p>
          </section>

          <section>
            <p>{t("howItWorksChoose")}</p>
          </section>

          <section>
            <p>{t("howItWorksRedirect")}</p>
          </section>

          <section>
            <p>{t("howItWorksRevenue")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t("howItWorksTipsTitle")}</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t("howItWorksTips1")}</li>
              <li>{t("howItWorksTips2")}</li>
              <li>{t("howItWorksTips3")}</li>
              <li>{t("howItWorksTips4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t("howItWorksHighlightsTitle")}</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t("howItWorksHighlights1")}</li>
              <li>{t("howItWorksHighlights2")}</li>
              <li>{t("howItWorksHighlights3")}</li>
              <li>{t("howItWorksHighlights4")}</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;