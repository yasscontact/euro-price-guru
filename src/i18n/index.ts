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
      "howItWorksSearch": "Recherchez un produit : Commencez par saisir le nom du produit que vous recherchez dans la barre de recherche. Soyez aussi précis que possible pour obtenir les résultats les plus pertinents.",
      "howItWorksCompare": "Comparez les prix : Nous affichons les prix du produit sur les différents sites Amazon européens (Amazon.fr, Amazon.de, Amazon.it, Amazon.es, etc.). Les prix sont convertis dans une devise commune (ex: Euro) pour faciliter la comparaison. Les frais de livraison et les taxes éventuelles sont également pris en compte dans la mesure du possible.",
      "howItWorksChoose": "Choisissez le meilleur prix : Sélectionnez l'offre qui vous convient le mieux en fonction du prix total, des délais de livraison et des conditions de vente.",
      "howItWorksRedirect": "Redirection vers Amazon : En cliquant sur le lien du produit, vous serez redirigé vers la page correspondante sur le site Amazon du pays sélectionné. Vous pourrez finaliser votre achat directement sur Amazon.",
      "howItWorksRevenue": "Notre rémunération : Euro Price Guru utilise des liens d'affiliation Amazon. Cela signifie que nous recevons une petite commission si vous effectuez un achat après avoir cliqué sur l'un de nos liens. Ce système ne vous coûte rien de plus et nous permet de maintenir et d'améliorer notre service.",
      "howItWorksTipsTitle": "Conseils pour utiliser Euro Price Guru :",
      "howItWorksTips1": "Soyez précis dans vos recherches : Plus votre recherche est précise, plus les résultats seront pertinents.",
      "howItWorksTips2": "Vérifiez les frais de livraison : Les frais de livraison peuvent varier considérablement d'un pays à l'autre. Assurez-vous de les prendre en compte dans votre comparaison.",
      "howItWorksTips3": "Lisez les conditions de vente : Avant de finaliser votre achat, lisez attentivement les conditions de vente sur le site Amazon concerné.",
      "howItWorksTips4": "N'hésitez pas à nous contacter : Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter.",
      "howItWorksHighlightsTitle": "Points forts d'Euro Price Guru :",
      "howItWorksHighlights1": "Gain de temps : Comparez les prix sur plusieurs sites Amazon en quelques clics.",
      "howItWorksHighlights2": "Économies : Trouvez les meilleures offres et économisez sur vos achats.",
      "howItWorksHighlights3": "Simplicité : Une interface facile à utiliser pour une comparaison rapide et efficace.",
      "howItWorksHighlights4": "Transparence : Nous sommes clairs sur notre utilisation des liens d'affiliation."
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
      "howItWorksSearch": "Search for a product: Start by entering the name of the product you're looking for in the search bar. Be as specific as possible to get the most relevant results.",
      "howItWorksCompare": "Compare prices: We display product prices across different European Amazon sites (Amazon.fr, Amazon.de, Amazon.it, Amazon.es, etc.). Prices are converted to a common currency (e.g., Euro) for easy comparison. Shipping fees and potential taxes are also taken into account when possible.",
      "howItWorksChoose": "Choose the best price: Select the offer that suits you best based on total price, delivery times, and terms of sale.",
      "howItWorksRedirect": "Redirect to Amazon: By clicking on the product link, you will be redirected to the corresponding page on the selected country's Amazon site. You can complete your purchase directly on Amazon.",
      "howItWorksRevenue": "Our revenue: Euro Price Guru uses Amazon affiliate links. This means we receive a small commission if you make a purchase after clicking on one of our links. This system costs you nothing extra and allows us to maintain and improve our service.",
      "howItWorksTipsTitle": "Tips for using Euro Price Guru:",
      "howItWorksTips1": "Be specific in your searches: The more precise your search, the more relevant the results will be.",
      "howItWorksTips2": "Check shipping fees: Shipping fees can vary significantly from country to country. Make sure to take them into account in your comparison.",
      "howItWorksTips3": "Read the terms of sale: Before finalizing your purchase, carefully read the terms of sale on the relevant Amazon site.",
      "howItWorksTips4": "Don't hesitate to contact us: If you have any questions or suggestions, don't hesitate to contact us.",
      "howItWorksHighlightsTitle": "Euro Price Guru's strengths:",
      "howItWorksHighlights1": "Time-saving: Compare prices across multiple Amazon sites in just a few clicks.",
      "howItWorksHighlights2": "Savings: Find the best deals and save on your purchases.",
      "howItWorksHighlights3": "Simplicity: An easy-to-use interface for quick and efficient comparison.",
      "howItWorksHighlights4": "Transparency: We are clear about our use of affiliate links."
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
      "howItWorksSearch": "Produkt suchen: Beginnen Sie mit der Eingabe des gesuchten Produktnamens in die Suchleiste. Seien Sie so genau wie möglich, um die relevantesten Ergebnisse zu erhalten.",
      "howItWorksCompare": "Preise vergleichen: Wir zeigen Produktpreise auf verschiedenen europäischen Amazon-Seiten an (Amazon.fr, Amazon.de, Amazon.it, Amazon.es, etc.). Die Preise werden in eine gemeinsame Währung (z.B. Euro) umgerechnet, um den Vergleich zu erleichtern. Versandkosten und mögliche Steuern werden nach Möglichkeit ebenfalls berücksichtigt.",
      "howItWorksChoose": "Besten Preis wählen: Wählen Sie das für Sie beste Angebot basierend auf Gesamtpreis, Lieferzeiten und Verkaufsbedingungen.",
      "howItWorksRedirect": "Weiterleitung zu Amazon: Durch Klicken auf den Produktlink werden Sie zur entsprechenden Seite auf der Amazon-Seite des ausgewählten Landes weitergeleitet. Sie können Ihren Kauf direkt bei Amazon abschließen.",
      "howItWorksRevenue": "Unsere Einnahmen: Euro Price Guru verwendet Amazon-Affiliate-Links. Das bedeutet, wir erhalten eine kleine Provision, wenn Sie nach einem Klick auf einen unserer Links einen Kauf tätigen. Dieses System verursacht für Sie keine zusätzlichen Kosten und ermöglicht uns die Wartung und Verbesserung unseres Services.",
      "howItWorksTipsTitle": "Tipps zur Nutzung von Euro Price Guru:",
      "howItWorksTips1": "Seien Sie präzise bei der Suche: Je genauer Ihre Suche, desto relevanter die Ergebnisse.",
      "howItWorksTips2": "Versandkosten prüfen: Versandkosten können von Land zu Land stark variieren. Berücksichtigen Sie diese in Ihrem Vergleich.",
      "howItWorksTips3": "Verkaufsbedingungen lesen: Lesen Sie vor dem Kauf sorgfältig die Verkaufsbedingungen auf der jeweiligen Amazon-Seite.",
      "howItWorksTips4": "Kontaktieren Sie uns: Bei Fragen oder Anregungen zögern Sie nicht, uns zu kontaktieren.",
      "howItWorksHighlightsTitle": "Stärken von Euro Price Guru:",
      "howItWorksHighlights1": "Zeitsparend: Vergleichen Sie Preise auf mehreren Amazon-Seiten mit wenigen Klicks.",
      "howItWorksHighlights2": "Sparen: Finden Sie die besten Angebote und sparen Sie bei Ihren Einkäufen.",
      "howItWorksHighlights3": "Einfachheit: Eine benutzerfreundliche Oberfläche für schnelle und effiziente Vergleiche.",
      "howItWorksHighlights4": "Transparenz: Wir sind transparent bezüglich unserer Nutzung von Affiliate-Links."
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
      "howItWorksSearch": "Cerca un prodotto: Inizia inserendo il nome del prodotto che stai cercando nella barra di ricerca. Sii il più specifico possibile per ottenere i risultati più pertinenti.",
      "howItWorksCompare": "Confronta i prezzi: Mostriamo i prezzi dei prodotti sui diversi siti Amazon europei (Amazon.fr, Amazon.de, Amazon.it, Amazon.es, ecc.). I prezzi vengono convertiti in una valuta comune (es: Euro) per facilitare il confronto. Le spese di spedizione e le eventuali tasse vengono prese in considerazione quando possibile.",
      "howItWorksChoose": "Scegli il miglior prezzo: Seleziona l'offerta più adatta a te in base al prezzo totale, ai tempi di consegna e alle condizioni di vendita.",
      "howItWorksRedirect": "Reindirizzamento ad Amazon: Cliccando sul link del prodotto, verrai reindirizzato alla pagina corrispondente sul sito Amazon del paese selezionato. Potrai completare l'acquisto direttamente su Amazon.",
      "howItWorksRevenue": "I nostri guadagni: Euro Price Guru utilizza i link di affiliazione Amazon. Questo significa che riceviamo una piccola commissione se effettui un acquisto dopo aver cliccato su uno dei nostri link. Questo sistema non ti costa nulla in più e ci permette di mantenere e migliorare il nostro servizio.",
      "howItWorksTipsTitle": "Consigli per utilizzare Euro Price Guru:",
      "howItWorksTips1": "Sii specifico nelle tue ricerche: Più precisa è la tua ricerca, più pertinenti saranno i risultati.",
      "howItWorksTips2": "Controlla le spese di spedizione: Le spese di spedizione possono variare notevolmente da paese a paese. Assicurati di tenerle in considerazione nel tuo confronto.",
      "howItWorksTips3": "Leggi le condizioni di vendita: Prima di finalizzare l'acquisto, leggi attentamente le condizioni di vendita sul sito Amazon pertinente.",
      "howItWorksTips4": "Non esitare a contattarci: Se hai domande o suggerimenti, non esitare a contattarci.",
      "howItWorksHighlightsTitle": "Punti di forza di Euro Price Guru:",
      "howItWorksHighlights1": "Risparmio di tempo: Confronta i prezzi su più siti Amazon in pochi clic.",
      "howItWorksHighlights2": "Risparmi: Trova le migliori offerte e risparmia sui tuoi acquisti.",
      "howItWorksHighlights3": "Semplicità: Un'interfaccia facile da usare per un confronto rapido ed efficiente.",
      "howItWorksHighlights4": "Trasparenza: Siamo chiari sul nostro utilizzo dei link di affiliazione."
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
      "howItWorksIntro": "Euro Price Guru te ayuda a encontrar los mejores precios para productos Amazon en toda Europa. Así es como funciona:",
      "howItWorksSearch": "Busca un producto: Comienza introduciendo el nombre del producto que buscas en la barra de búsqueda. Sé lo más específico posible para obtener los resultados más relevantes.",
      "howItWorksCompare": "Compara precios: Mostramos los precios del producto en diferentes sitios de Amazon europeos (Amazon.fr, Amazon.de, Amazon.it, Amazon.es, etc.). Los precios se convierten a una moneda común (ej: Euro) para facilitar la comparación. Los gastos de envío e impuestos potenciales también se tienen en cuenta cuando es posible.",
      "howItWorksChoose": "Elige el mejor precio: Selecciona la oferta que mejor se adapte a ti según el precio total, los tiempos de entrega y las condiciones de venta.",
      "howItWorksRedirect": "Redirección a Amazon: Al hacer clic en el enlace del producto, serás redirigido a la página correspondiente en el sitio de Amazon del país seleccionado. Podrás completar tu compra directamente en Amazon.",
      "howItWorksRevenue": "Nuestros ingresos: Euro Price Guru utiliza enlaces de afiliados de Amazon. Esto significa que recibimos una pequeña comisión si realizas una compra después de hacer clic en uno de nuestros enlaces. Este sistema no te cuesta nada adicional y nos permite mantener y mejorar nuestro servicio.",
      "howItWorksTipsTitle": "Consejos para usar Euro Price Guru:",
      "howItWorksTips1": "Sé específico en tus búsquedas: Cuanto más precisa sea tu búsqueda, más relevantes serán los resultados.",
      "howItWorksTips2": "Verifica los gastos de envío: Los gastos de envío pueden variar significativamente de un país a otro. Asegúrate de tenerlos en cuenta en tu comparación.",
      "howItWorksTips3": "Lee las condiciones de venta: Antes de finalizar tu compra, lee atentamente las condiciones de venta en el sitio de Amazon correspondiente.",
      "howItWorksTips4": "No dudes en contactarnos: Si tienes preguntas o sugerencias, no dudes en contactarnos.",
      "howItWorksHighlightsTitle": "Puntos fuertes de Euro Price Guru:",
      "howItWorksHighlights1": "Ahorro de tiempo: Compara precios en múltiples sitios de Amazon con solo unos clics.",
      "howItWorksHighlights2": "Ahorros: Encuentra las mejores ofertas y ahorra en tus compras.",
      "howItWorksHighlights3": "Simplicidad: Una interfaz fácil de usar para una comparación rápida y eficiente.",
      "howItWorksHighlights4": "Transparencia: Somos claros sobre nuestro uso de enlaces de afiliados."
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