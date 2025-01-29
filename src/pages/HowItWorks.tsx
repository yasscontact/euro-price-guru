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

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-2">{t("step1Title")}</h2>
            <p>{t("step1Text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t("step2Title")}</h2>
            <p>{t("step2Text")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t("step3Title")}</h2>
            <p>{t("step3Text")}</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;