import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header hideSelectors={true} showLanguageOnly={true} />
      <div className="flex-grow container mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-bold mb-6">Comment fonctionne Euro Price Guru ?</h1>
        
        <p className="mb-6">
          Euro Price Guru vous aide à trouver les meilleurs prix pour les produits Amazon dans toute l'Europe. Voici comment :
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-2">Recherchez un produit</h2>
            <p>
              Commencez par saisir le nom du produit que vous recherchez dans la barre de recherche. Soyez aussi précis que possible pour obtenir les résultats les plus pertinents.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Comparez les prix</h2>
            <p>
              Nous affichons les prix du produit sur les différents sites Amazon européens (Amazon.fr, Amazon.de, Amazon.it, Amazon.es, etc.). Les prix sont convertis dans une devise commune (ex: Euro) pour faciliter la comparaison. Les frais de livraison et les taxes éventuelles sont également pris en compte dans la mesure du possible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Choisissez le meilleur prix</h2>
            <p>
              Sélectionnez l'offre qui vous convient le mieux en fonction du prix total, des délais de livraison et des conditions de vente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Redirection vers Amazon</h2>
            <p>
              En cliquant sur le lien du produit, vous serez redirigé vers la page correspondante sur le site Amazon du pays sélectionné. Vous pourrez finaliser votre achat directement sur Amazon.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Notre rémunération</h2>
            <p>
              Euro Price Guru utilise des liens d'affiliation Amazon. Cela signifie que nous recevons une petite commission si vous effectuez un achat après avoir cliqué sur l'un de nos liens. Ce système ne vous coûte rien de plus et nous permet de maintenir et d'améliorer notre service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Conseils pour utiliser Euro Price Guru</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Soyez précis dans vos recherches : Plus votre recherche est précise, plus les résultats seront pertinents.</li>
              <li>Vérifiez les frais de livraison : Les frais de livraison peuvent varier considérablement d'un pays à l'autre. Assurez-vous de les prendre en compte dans votre comparaison.</li>
              <li>Lisez les conditions de vente : Avant de finaliser votre achat, lisez attentivement les conditions de vente sur le site Amazon concerné.</li>
              <li>N'hésitez pas à nous contacter : Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Points forts d'Euro Price Guru</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Gain de temps : Comparez les prix sur plusieurs sites Amazon en quelques clics.</li>
              <li>Économies : Trouvez les meilleures offres et économisez sur vos achats.</li>
              <li>Simplicité : Une interface facile à utiliser pour une comparaison rapide et efficace.</li>
              <li>Transparence : Nous sommes clairs sur notre utilisation des liens d'affiliation.</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;