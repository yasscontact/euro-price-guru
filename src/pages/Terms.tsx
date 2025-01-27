const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Conditions d'utilisation</h1>
      
      <p className="mb-4">
        Bienvenue sur Euro Price Guru, un site web qui vous permet de comparer les prix des produits Amazon dans différents pays européens. En utilisant notre site, vous acceptez les conditions d'utilisation suivantes :
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Description du service</h2>
          <p>
            Euro Price Guru fournit des informations sur les prix des produits disponibles sur les différents sites Amazon européens. Nous ne vendons pas de produits directement. Notre service repose sur des données accessibles publiquement et des liens d'affiliation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Utilisation acceptable</h2>
          <p>
            Vous pouvez utiliser ce site web uniquement à des fins personnelles et non commerciales. Il est interdit d'utiliser des robots, des scrapers ou tout autre moyen automatisé pour accéder aux données du site. Toute utilisation illégale ou frauduleuse est strictement interdite.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
          <p>
            Le contenu original de ce site web, incluant le code source, le design et les textes, est la propriété d'Euro Price Guru et est protégé par les lois sur le droit d'auteur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Exclusion de responsabilité</h2>
          <p>
            Nous nous efforçons de fournir des informations précises et à jour, mais nous ne garantissons pas l'exactitude, l'exhaustivité ou la fiabilité des données. Nous ne sommes pas responsables des erreurs, des omissions ou des changements de prix effectués par Amazon. L'utilisation de ce site web est à vos propres risques.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Liens externes</h2>
          <p>
            Ce site web contient des liens vers des sites web externes, notamment les sites Amazon européens. Nous ne sommes pas responsables du contenu de ces sites externes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Modification des conditions</h2>
          <p>
            Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Les modifications seront publiées sur cette page.
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
      </div>
    </div>
  );
};

export default Terms;