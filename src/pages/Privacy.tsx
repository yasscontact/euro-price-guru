import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Privacy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header hideSelectors={true} showLanguageOnly={true} />
      <div className="flex-grow container mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-bold mb-6">{t("privacyTitle")}</h1>
        
        <p className="mb-4">{t("privacyIntro")}</p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">{t("dataCollection")}</h2>
            <p>{t("dataCollectionText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t("dataUse")}</h2>
            <p>{t("dataUseText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t("dataSharing")}</h2>
            <p>{t("dataSharingText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t("dataProtection")}</h2>
            <p>{t("dataProtectionText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t("userRights")}</h2>
            <p>{t("userRightsText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t("policyChanges")}</h2>
            <p>{t("policyChangesText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">{t("children")}</h2>
            <p>{t("childrenText")}</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;