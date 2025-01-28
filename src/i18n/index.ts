import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      // Header
      "language": "Langue",
      
      // Footer
      "about": "À propos",
      "helpFindBestPrices": "EuroPriceGuru vous aide à trouver les meilleurs prix sur Amazon à travers l'Europe.",
      "usefulLinks": "Liens utiles",
      "home": "Accueil",
      "howItWorks": "Comment ça marche",
      "contact": "Contact",
      "legal": "Légal",
      "privacyPolicy": "Politique de confidentialité",
      "termsOfUse": "Conditions d'utilisation",
      "allRightsReserved": "Tous droits réservés",

      // Search
      "compareAmazonPrices": "Comparez les prix Amazon en Europe",
      "searchByKeyword": "Recherche par mots-clés",
      "searchByAsin": "Recherche par ASIN",
      "searchProduct": "Rechercher un produit...",
      "enterAsin": "Entrez un ASIN ou collez une URL Amazon...",
      "error": "Erreur",
      "enterSearchTerm": "Veuillez entrer un terme de recherche",
      "example": "Exemple",
      "exampleAsin": "Exemple: B07PZR3PVB ou https://www.amazon.fr/dp/B07PZR3PVB",
      "exampleKeywords": "Exemple: PlayStation 5, AirPods Pro",

      // Contact
      "contactTitle": "Contact",
      "contactText": "Pour nous contacter, merci de nous écrire par mail à l'adresse suivante :",

      // Privacy
      "privacyTitle": "Politique de confidentialité",
      "privacyIntro": "Chez Euro Price Guru, nous respectons votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.",
      "dataCollection": "Collecte d'informations",
      "dataCollectionText": "Nous collectons des informations telles que votre adresse IP, le type de navigateur, les pages visitées et les liens sur lesquels vous cliquez. Nous utilisons des cookies pour améliorer votre expérience utilisateur et à des fins statistiques. Nous utilisons également des liens d'affiliation Amazon, qui peuvent collecter des données sur votre navigation et vos achats.",
      "dataUse": "Utilisation des informations",
      "dataUseText": "Les informations collectées sont utilisées pour améliorer notre site web, analyser les tendances d'utilisation et personnaliser votre expérience. Les données collectées via les liens d'affiliation Amazon nous permettent de percevoir une commission sur les achats éligibles.",
      "dataSharing": "Partage d'informations",
      "dataSharingText": "Nous partageons des données avec Amazon dans le cadre du programme d'affiliation. Nous ne vendons ni ne louons vos informations personnelles à des tiers.",
      "dataProtection": "Protection des données",
      "dataProtectionText": "Nous prenons des mesures appropriées pour protéger vos données contre l'accès non autorisé, la divulgation ou la modification.",
      "userRights": "Droits des utilisateurs",
      "userRightsText": "Vous avez le droit d'accéder, de modifier et de supprimer vos données personnelles.",
      "policyChanges": "Modifications de la politique",
      "policyChangesText": "Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page.",
      "children": "Enfants",
      "childrenText": "Ce site web ne s'adresse pas aux enfants de moins de 13 ans.",

      // Terms
      "termsTitle": "Conditions d'utilisation",
      "termsIntro": "En utilisant Euro Price Guru, vous acceptez les conditions suivantes :",
      "termsService": "Service",
      "termsServiceText": "Euro Price Guru est un comparateur de prix qui vous aide à trouver les meilleurs prix sur Amazon en Europe. Nous utilisons des liens d'affiliation Amazon.",
      "termsAccuracy": "Exactitude des informations",
      "termsAccuracyText": "Nous nous efforçons de fournir des informations précises et à jour, mais nous ne pouvons garantir l'exactitude absolue des prix et des disponibilités.",
      "termsAffiliation": "Programme d'affiliation",
      "termsAffiliationText": "Notre site utilise des liens d'affiliation Amazon. Nous percevons une commission sur les achats effectués via ces liens, sans surcoût pour vous.",
      "termsLiability": "Limitation de responsabilité",
      "termsLiabilityText": "Nous ne sommes pas responsables des pertes ou dommages résultant de l'utilisation de notre service.",

      // How it works
      "howItWorksTitle": "Comment fonctionne Euro Price Guru ?",
      "howItWorksIntro": "Euro Price Guru vous aide à trouver les meilleurs prix pour les produits Amazon dans toute l'Europe. Voici comment :",
      "step1Title": "Recherchez un produit",
      "step1Text": "Entrez le nom du produit ou son ASIN (numéro d'identification Amazon)",
      "step2Title": "Comparez les prix",
      "step2Text": "Nous recherchons le produit sur tous les sites Amazon européens",
      "step3Title": "Économisez",
      "step3Text": "Choisissez le meilleur prix et achetez directement sur Amazon"
    }
  },
  en: {
    translation: {
      // Header
      "language": "Language",
      
      // Footer
      "about": "About",
      "helpFindBestPrices": "EuroPriceGuru helps you find the best prices on Amazon across Europe.",
      "usefulLinks": "Useful Links",
      "home": "Home",
      "howItWorks": "How it Works",
      "contact": "Contact",
      "legal": "Legal",
      "privacyPolicy": "Privacy Policy",
      "termsOfUse": "Terms of Use",
      "allRightsReserved": "All rights reserved",

      // Search
      "compareAmazonPrices": "Compare Amazon Prices in Europe",
      "searchByKeyword": "Search by keywords",
      "searchByAsin": "Search by ASIN",
      "searchProduct": "Search for a product...",
      "enterAsin": "Enter an ASIN or paste an Amazon URL...",
      "error": "Error",
      "enterSearchTerm": "Please enter a search term",
      "example": "Example",
      "exampleAsin": "Example: B07PZR3PVB or https://www.amazon.fr/dp/B07PZR3PVB",
      "exampleKeywords": "Example: PlayStation 5, AirPods Pro",

      // Contact
      "contactTitle": "Contact",
      "contactText": "To contact us, please write to us at the following email address:",

      // Privacy
      "privacyTitle": "Privacy Policy",
      "privacyIntro": "At Euro Price Guru, we respect your privacy. This privacy policy explains how we collect, use, and protect your personal information.",
      "dataCollection": "Data Collection",
      "dataCollectionText": "We collect information such as your IP address, browser type, visited pages, and clicked links. We use cookies to improve your user experience and for statistical purposes. We also use Amazon affiliate links, which may collect data about your browsing and purchases.",
      "dataUse": "Use of Information",
      "dataUseText": "The collected information is used to improve our website, analyze usage trends, and personalize your experience. Data collected through Amazon affiliate links allows us to earn a commission on eligible purchases.",
      "dataSharing": "Information Sharing",
      "dataSharingText": "We share data with Amazon as part of the affiliate program. We do not sell or rent your personal information to third parties.",
      "dataProtection": "Data Protection",
      "dataProtectionText": "We take appropriate measures to protect your data against unauthorized access, disclosure, or modification.",
      "userRights": "User Rights",
      "userRightsText": "You have the right to access, modify, and delete your personal data.",
      "policyChanges": "Policy Changes",
      "policyChangesText": "We reserve the right to modify this privacy policy at any time. Changes will be posted on this page.",
      "children": "Children",
      "childrenText": "This website is not intended for children under 13 years of age.",

      // Terms
      "termsTitle": "Terms of Use",
      "termsIntro": "By using Euro Price Guru, you agree to the following terms:",
      "termsService": "Service",
      "termsServiceText": "Euro Price Guru is a price comparison tool that helps you find the best prices on Amazon across Europe. We use Amazon affiliate links.",
      "termsAccuracy": "Information Accuracy",
      "termsAccuracyText": "We strive to provide accurate and up-to-date information, but we cannot guarantee absolute accuracy of prices and availability.",
      "termsAffiliation": "Affiliate Program",
      "termsAffiliationText": "Our site uses Amazon affiliate links. We earn a commission on purchases made through these links, at no additional cost to you.",
      "termsLiability": "Limitation of Liability",
      "termsLiabilityText": "We are not responsible for any losses or damages resulting from the use of our service.",

      // How it works
      "howItWorksTitle": "How does Euro Price Guru work?",
      "howItWorksIntro": "Euro Price Guru helps you find the best prices for Amazon products across Europe. Here's how:",
      "step1Title": "Search for a product",
      "step1Text": "Enter the product name or its ASIN (Amazon identification number)",
      "step2Title": "Compare prices",
      "step2Text": "We search for the product across all European Amazon sites",
      "step3Title": "Save money",
      "step3Text": "Choose the best price and buy directly from Amazon"
    }
  },
  de: {
    translation: {
      // Header
      "language": "Sprache",
      
      // Footer
      "about": "Über uns",
      "helpFindBestPrices": "EuroPriceGuru hilft Ihnen, die besten Preise auf Amazon in ganz Europa zu finden.",
      "usefulLinks": "Nützliche Links",
      "home": "Startseite",
      "howItWorks": "Wie es funktioniert",
      "contact": "Kontakt",
      "legal": "Rechtliches",
      "privacyPolicy": "Datenschutzerklärung",
      "termsOfUse": "Nutzungsbedingungen",
      "allRightsReserved": "Alle Rechte vorbehalten",

      // Search
      "compareAmazonPrices": "Vergleichen Sie Amazon-Preise in Europa",
      "searchByKeyword": "Suche nach Stichwörtern",
      "searchByAsin": "Suche nach ASIN",
      "searchProduct": "Produkt suchen...",
      "enterAsin": "ASIN eingeben oder Amazon-URL einfügen...",
      "error": "Fehler",
      "enterSearchTerm": "Bitte geben Sie einen Suchbegriff ein",
      "example": "Beispiel",
      "exampleAsin": "Beispiel: B07PZR3PVB oder https://www.amazon.de/dp/B07PZR3PVB",
      "exampleKeywords": "Beispiel: PlayStation 5, AirPods Pro",

      // Contact
      "contactTitle": "Kontakt",
      "contactText": "Um uns zu kontaktieren, schreiben Sie uns bitte an folgende E-Mail-Adresse:",

      // Privacy
      "privacyTitle": "Datenschutzerklärung",
      "privacyIntro": "Bei Euro Price Guru respektieren wir Ihre Privatsphäre. Diese Datenschutzerklärung erläutert, wie wir Ihre persönlichen Daten sammeln, verwenden und schützen.",
      "dataCollection": "Datenerfassung",
      "dataCollectionText": "Wir erfassen Informationen wie Ihre IP-Adresse, Browsertyp, besuchte Seiten und angeklickte Links. Wir verwenden Cookies zur Verbesserung Ihrer Benutzererfahrung und für statistische Zwecke. Wir verwenden auch Amazon-Affiliate-Links, die Daten über Ihr Surfverhalten und Ihre Einkäufe sammeln können.",
      "dataUse": "Verwendung der Informationen",
      "dataUseText": "Die gesammelten Informationen werden verwendet, um unsere Website zu verbessern, Nutzungstrends zu analysieren und Ihre Erfahrung zu personalisieren. Über Amazon-Affiliate-Links gesammelte Daten ermöglichen es uns, eine Provision für berechtigte Käufe zu erhalten.",
      "dataSharing": "Weitergabe von Informationen",
      "dataSharingText": "Wir teilen Daten mit Amazon im Rahmen des Partnerprogramms. Wir verkaufen oder vermieten Ihre persönlichen Daten nicht an Dritte.",
      "dataProtection": "Datenschutz",
      "dataProtectionText": "Wir ergreifen angemessene Maßnahmen zum Schutz Ihrer Daten vor unbefugtem Zugriff, Offenlegung oder Änderung.",
      "userRights": "Benutzerrechte",
      "userRightsText": "Sie haben das Recht, Ihre persönlichen Daten einzusehen, zu ändern und zu löschen.",
      "policyChanges": "Änderungen der Richtlinie",
      "policyChangesText": "Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Änderungen werden auf dieser Seite veröffentlicht.",
      "children": "Kinder",
      "childrenText": "Diese Website richtet sich nicht an Kinder unter 13 Jahren.",

      // Terms
      "termsTitle": "Nutzungsbedingungen",
      "termsIntro": "Durch die Nutzung von Euro Price Guru stimmen Sie den folgenden Bedingungen zu:",
      "termsService": "Service",
      "termsServiceText": "Euro Price Guru ist ein Preisvergleichstool, das Ihnen hilft, die besten Preise auf Amazon in Europa zu finden. Wir verwenden Amazon-Affiliate-Links.",
      "termsAccuracy": "Genauigkeit der Informationen",
      "termsAccuracyText": "Wir bemühen uns, genaue und aktuelle Informationen bereitzustellen, können jedoch keine absolute Genauigkeit der Preise und Verfügbarkeiten garantieren.",
      "termsAffiliation": "Partnerprogramm",
      "termsAffiliationText": "Unsere Website verwendet Amazon-Affiliate-Links. Wir erhalten eine Provision für Käufe über diese Links, ohne zusätzliche Kosten für Sie.",
      "termsLiability": "Haftungsbeschränkung",
      "termsLiabilityText": "Wir sind nicht verantwortlich für Verluste oder Schäden, die aus der Nutzung unseres Services entstehen.",

      // How it works
      "howItWorksTitle": "Wie funktioniert Euro Price Guru?",
      "howItWorksIntro": "Euro Price Guru hilft Ihnen, die besten Preise für Amazon-Produkte in ganz Europa zu finden. So funktioniert's:",
      "step1Title": "Produkt suchen",
      "step1Text": "Geben Sie den Produktnamen oder dessen ASIN (Amazon-Identifikationsnummer) ein",
      "step2Title": "Preise vergleichen",
      "step2Text": "Wir suchen das Produkt auf allen europäischen Amazon-Seiten",
      "step3Title": "Geld sparen",
      "step3Text": "Wählen Sie den besten Preis und kaufen Sie direkt bei Amazon"
    }
  },
  it: {
    translation: {
      // Header
      "language": "Lingua",
      
      // Footer
      "about": "Chi siamo",
      "helpFindBestPrices": "EuroPriceGuru ti aiuta a trovare i migliori prezzi su Amazon in tutta Europa.",
      "usefulLinks": "Link utili",
      "home": "Home",
      "howItWorks": "Come funziona",
      "contact": "Contatti",
      "legal": "Legale",
      "privacyPolicy": "Informativa sulla privacy",
      "termsOfUse": "Termini di utilizzo",
      "allRightsReserved": "Tutti i diritti riservati",

      // Search
      "compareAmazonPrices": "Confronta i prezzi Amazon in Europa",
      "searchByKeyword": "Cerca per parole chiave",
      "searchByAsin": "Cerca per ASIN",
      "searchProduct": "Cerca un prodotto...",
      "enterAsin": "Inserisci un ASIN o incolla un URL Amazon...",
      "error": "Errore",
      "enterSearchTerm": "Inserisci un termine di ricerca",
      "example": "Esempio",
      "exampleAsin": "Esempio: B07PZR3PVB o https://www.amazon.it/dp/B07PZR3PVB",
      "exampleKeywords": "Esempio: PlayStation 5, AirPods Pro",

      // Contact
      "contactTitle": "Contatti",
      "contactText": "Per contattarci, scrivici al seguente indirizzo email:",

      // Privacy
      "privacyTitle": "Informativa sulla privacy",
      "privacyIntro": "In Euro Price Guru, rispettiamo la tua privacy. Questa informativa sulla privacy spiega come raccogliamo, utilizziamo e proteggiamo le tue informazioni personali.",
      "dataCollection": "Raccolta dati",
      "dataCollectionText": "Raccogliamo informazioni come il tuo indirizzo IP, il tipo di browser, le pagine visitate e i link cliccati. Utilizziamo i cookie per migliorare la tua esperienza utente e per scopi statistici. Utilizziamo anche i link di affiliazione Amazon, che possono raccogliere dati sulla tua navigazione e i tuoi acquisti.",
      "dataUse": "Utilizzo delle informazioni",
      "dataUseText": "Le informazioni raccolte vengono utilizzate per migliorare il nostro sito web, analizzare le tendenze di utilizzo e personalizzare la tua esperienza. I dati raccolti tramite i link di affiliazione Amazon ci permettono di guadagnare una commissione sugli acquisti idonei.",
      "dataSharing": "Condivisione delle informazioni",
      "dataSharingText": "Condividiamo i dati con Amazon come parte del programma di affiliazione. Non vendiamo né affittiamo le tue informazioni personali a terzi.",
      "dataProtection": "Protezione dei dati",
      "dataProtectionText": "Adottiamo misure appropriate per proteggere i tuoi dati da accessi non autorizzati, divulgazione o modifica.",
      "userRights": "Diritti degli utenti",
      "userRightsText": "Hai il diritto di accedere, modificare ed eliminare i tuoi dati personali.",
      "policyChanges": "Modifiche alla policy",
      "policyChangesText": "Ci riserviamo il diritto di modificare questa informativa sulla privacy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina.",
      "children": "Bambini",
      "childrenText": "Questo sito web non è destinato ai bambini di età inferiore ai 13 anni.",

      // Terms
      "termsTitle": "Termini di utilizzo",
      "termsIntro": "Utilizzando Euro Price Guru, accetti i seguenti termini:",
      "termsService": "Servizio",
      "termsServiceText": "Euro Price Guru è uno strumento di confronto prezzi che ti aiuta a trovare i migliori prezzi su Amazon in Europa. Utilizziamo i link di affiliazione Amazon.",
      "termsAccuracy": "Accuratezza delle informazioni",
      "termsAccuracyText": "Ci impegniamo a fornire informazioni accurate e aggiornate, ma non possiamo garantire l'assoluta accuratezza dei prezzi e delle disponibilità.",
      "termsAffiliation": "Programma di affiliazione",
      "termsAffiliationText": "Il nostro sito utilizza i link di affiliazione Amazon. Guadagniamo una commissione sugli acquisti effettuati tramite questi link, senza costi aggiuntivi per te.",
      "termsLiability": "Limitazione di responsabilità",
      "termsLiabilityText": "Non siamo responsabili per eventuali perdite o danni derivanti dall'utilizzo del nostro servizio.",

      // How it works
      "howItWorksTitle": "Come funziona Euro Price Guru?",
      "howItWorksIntro": "Euro Price Guru ti aiuta a trovare i migliori prezzi per i prodotti Amazon in tutta Europa. Ecco come:",
      "step1Title": "Cerca un prodotto",
      "step1Text": "Inserisci il nome del prodotto o il suo ASIN (numero di identificazione Amazon)",
      "step2Title": "Confronta i prezzi",
      "step2Text": "Cerchiamo il prodotto su tutti i siti Amazon europei",
      "step3Title": "Risparmia",
      "step3Text": "Scegli il miglior prezzo e acquista direttamente su Amazon"
    }
  },
  es: {
    translation: {
      // Header
      "language": "Idioma",
      
      // Footer
      "about": "Acerca de",
      "helpFindBestPrices": "EuroPriceGuru te ayuda a encontrar los mejores precios en Amazon en toda Europa.",
      "usefulLinks": "Enlaces útiles",
      "home": "Inicio",
      "howItWorks": "Cómo funciona",
      "contact": "Contacto",
      "legal": "Legal",
      "privacyPolicy": "Política de privacidad",
      "termsOfUse": "Términos de uso",
      "allRightsReserved": "Todos los derechos reservados",

      // Search
      "compareAmazonPrices": "Compara precios de Amazon en Europa",
      "searchByKeyword": "Buscar por palabras clave",
      "searchByAsin": "Buscar por ASIN",
      "searchProduct": "Buscar un producto...",
      "enterAsin": "Introduce un ASIN o pega una URL de Amazon...",
      "error": "Error",
      "enterSearchTerm": "Por favor, introduce un término de búsqueda",
      "example": "Ejemplo",
      "exampleAsin": "Ejemplo: B07PZR3PVB o https://www.amazon.es/dp/B07PZR3PVB",
      "exampleKeywords": "Ejemplo: PlayStation 5, AirPods Pro",

      // Contact
      "contactTitle": "Contacto",
      "contactText": "Para contactarnos, por favor escríbenos al siguiente correo electrónico:",

      // Privacy
      "privacyTitle": "Política de privacidad",
      "privacyIntro": "En Euro Price Guru, respetamos tu privacidad. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos tu información personal.",
      "dataCollection": "Recopilación de datos",
      "dataCollectionText": "Recopilamos información como tu dirección IP, tipo de navegador, páginas visitadas y enlaces en los que haces clic. Utilizamos cookies para mejorar tu experiencia de usuario y con fines estadísticos. También utilizamos enlaces de afiliados de Amazon, que pueden recopilar datos sobre tu navegación y compras.",
      "dataUse": "Uso de la información",
      "dataUseText": "La información recopilada se utiliza para mejorar nuestro sitio web, analizar tendencias de uso y personalizar tu experiencia. Los datos recopilados a través de los enlaces de afiliados de Amazon nos permiten ganar una comisión por las compras elegibles.",
      "dataSharing": "Compartir información",
      "dataSharingText": "Compartimos datos con Amazon como parte del programa de afiliados. No vendemos ni alquilamos tu información personal a terceros.",
      "dataProtection": "Protección de datos",
      "dataProtectionText": "Tomamos medidas apropiadas para proteger tus datos contra el acceso no autorizado, la divulgación o la modificación.",
      "userRights": "Derechos del usuario",
      "userRightsText": "Tienes derecho a acceder, modificar y eliminar tus datos personales.",
      "policyChanges": "Cambios en la política",
      "policyChangesText": "Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios se publicarán en esta página.",
      "children": "Niños",
      "childrenText": "Este sitio web no está destinado a niños menores de 13 años.",

      // Terms
      "termsTitle": "Términos de uso",
      "termsIntro": "Al utilizar Euro Price Guru, aceptas los siguientes términos:",
      "termsService": "Servicio",
      "termsServiceText": "Euro Price Guru es una herramienta de comparación de precios que te ayuda a encontrar los mejores precios en Amazon en Europa. Utilizamos enlaces de afiliados de Amazon.",
      "termsAccuracy": "Precisión de la información",
      "termsAccuracyText": "Nos esforzamos por proporcionar información precisa y actualizada, pero no podemos garantizar la precisión absoluta de los precios y la disponibilidad.",
      "termsAffiliation": "Programa de afiliados",
      "termsAffiliationText": "Nuestro sitio utiliza enlaces de afiliados de Amazon. Ganamos una comisión por las compras realizadas a través de estos enlaces, sin costo adicional para ti.",
      "termsLiability": "Limitación de responsabilidad",
      "termsLiabilityText": "No somos responsables de ninguna pérdida o daño resultante del uso de nuestro servicio.",

      // How it works
      "howItWorksTitle": "¿Cómo funciona Euro Price Guru?",
      "howItWorksIntro": "Euro Price Guru te ayuda a encontrar los mejores precios para productos de Amazon en toda Europa. Así es como funciona:",
      "step1Title": "Busca un producto",
      "step1Text": "Introduce el nombre del producto o su ASIN (número de identificación de Amazon)",
      "step2Title": "Compara precios",
      "step2Text": "Buscamos el producto en todos los sitios de Amazon europeos",
      "step3Title": "Ahorra dinero",
      "step3Text": "Elige el mejor precio y compra directamente en Amazon"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr", // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;