import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-bold mb-6">Politique de confidentialité</h1>
        
        <p className="mb-4">
          Chez Euro Price Guru, nous respectons votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">Collecte d'informations</h2>
            <p>
              Nous collectons des informations telles que votre adresse IP, le type de navigateur, les pages visitées et les liens sur lesquels vous cliquez. Nous utilisons des cookies pour améliorer votre expérience utilisateur et à des fins statistiques. Nous utilisons également des liens d'affiliation Amazon, qui peuvent collecter des données sur votre navigation et vos achats.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Utilisation des informations</h2>
            <p>
              Les informations collectées sont utilisées pour améliorer notre site web, analyser les tendances d'utilisation et personnaliser votre expérience. Les données collectées via les liens d'affiliation Amazon nous permettent de percevoir une commission sur les achats éligibles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Partage d'informations</h2>
            <p>
              Nous partageons des données avec Amazon dans le cadre du programme d'affiliation. Nous ne vendons ni ne louons vos informations personnelles à des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Protection des données</h2>
            <p>
              Nous prenons des mesures appropriées pour protéger vos données contre l'accès non autorisé, la divulgation ou la modification.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Droits des utilisateurs</h2>
            <p>
              Vous avez le droit d'accéder, de modifier et de supprimer vos données personnelles. Pour exercer ces droits, veuillez nous contacter à{" "}
              <a href="mailto:yass.contact.1997@gmail.com" className="text-amazon-orange hover:underline">
                yass.contact.1997@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Modifications de la politique</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p>
              Pour toute question, veuillez nous contacter à{" "}
              <a href="mailto:yass.contact.1997@gmail.com" className="text-amazon-orange hover:underline">
                yass.contact.1997@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Enfants</h2>
            <p>
              Ce site web ne s'adresse pas aux enfants de moins de 13 ans.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;