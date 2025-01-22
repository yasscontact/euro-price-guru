import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      search: {
        placeholder: "Search for a product...",
        asinPlaceholder: "Enter an ASIN or paste an Amazon URL...",
        byKeyword: "Search by keywords",
        byAsin: "Search by ASIN",
        example: "Example: PlayStation 5, AirPods Pro",
        asinExample: "Example: B07PZR3PVB or https://www.amazon.fr/dp/B07PZR3PVB"
      },
      header: {
        title: "EuroPriceGuru",
        countries: "Countries",
        currency: "Currency",
        language: "Language"
      },
      footer: {
        about: {
          title: "About",
          description: "EuroPriceGuru helps you find the best Amazon prices across Europe."
        },
        usefulLinks: {
          title: "Useful Links",
          home: "Home",
          howItWorks: "How it works",
          contact: "Contact"
        },
        legal: {
          title: "Legal",
          privacy: "Privacy Policy",
          terms: "Terms of Use"
        },
        copyright: "© 2024 EuroPriceGuru. All rights reserved."
      },
      bestSellers: {
        title: "Best Savings Opportunities",
        bestPrice: "Best price",
        highestPrice: "Highest price",
        potentialSavings: "Potential savings"
      }
    }
  },
  fr: {
    translation: {
      search: {
        placeholder: "Rechercher un produit...",
        asinPlaceholder: "Entrez un ASIN ou collez une URL Amazon...",
        byKeyword: "Recherche par mots-clés",
        byAsin: "Recherche par ASIN",
        example: "Exemple: PlayStation 5, AirPods Pro",
        asinExample: "Exemple: B07PZR3PVB ou https://www.amazon.fr/dp/B07PZR3PVB"
      },
      header: {
        title: "EuroPriceGuru",
        countries: "Pays",
        currency: "Devise",
        language: "Langue"
      },
      footer: {
        about: {
          title: "À propos",
          description: "EuroPriceGuru vous aide à trouver les meilleurs prix Amazon en Europe."
        },
        usefulLinks: {
          title: "Liens utiles",
          home: "Accueil",
          howItWorks: "Comment ça marche",
          contact: "Contact"
        },
        legal: {
          title: "Légal",
          privacy: "Politique de confidentialité",
          terms: "Conditions d'utilisation"
        },
        copyright: "© 2024 EuroPriceGuru. Tous droits réservés."
      },
      bestSellers: {
        title: "Meilleures opportunités d'économies",
        bestPrice: "Meilleur prix",
        highestPrice: "Prix le plus élevé",
        potentialSavings: "Économie potentielle"
      }
    }
  },
  de: {
    translation: {
      search: {
        placeholder: "Produkt suchen...",
        asinPlaceholder: "ASIN eingeben oder Amazon-URL einfügen...",
        byKeyword: "Nach Stichwörtern suchen",
        byAsin: "Nach ASIN suchen",
        example: "Beispiel: PlayStation 5, AirPods Pro",
        asinExample: "Beispiel: B07PZR3PVB oder https://www.amazon.de/dp/B07PZR3PVB"
      },
      header: {
        title: "EuroPriceGuru",
        countries: "Länder",
        currency: "Währung",
        language: "Sprache"
      },
      footer: {
        about: {
          title: "Über uns",
          description: "EuroPriceGuru hilft Ihnen, die besten Amazon-Preise in Europa zu finden."
        },
        usefulLinks: {
          title: "Nützliche Links",
          home: "Startseite",
          howItWorks: "Wie es funktioniert",
          contact: "Kontakt"
        },
        legal: {
          title: "Rechtliches",
          privacy: "Datenschutzrichtlinie",
          terms: "Nutzungsbedingungen"
        },
        copyright: "© 2024 EuroPriceGuru. Alle Rechte vorbehalten."
      },
      bestSellers: {
        title: "Beste Sparmöglichkeiten",
        bestPrice: "Bester Preis",
        highestPrice: "Höchster Preis",
        potentialSavings: "Mögliche Ersparnis"
      }
    }
  },
  it: {
    translation: {
      search: {
        placeholder: "Cerca un prodotto...",
        asinPlaceholder: "Inserisci un ASIN o incolla un URL Amazon...",
        byKeyword: "Cerca per parole chiave",
        byAsin: "Cerca per ASIN",
        example: "Esempio: PlayStation 5, AirPods Pro",
        asinExample: "Esempio: B07PZR3PVB o https://www.amazon.it/dp/B07PZR3PVB"
      },
      header: {
        title: "EuroPriceGuru",
        countries: "Paesi",
        currency: "Valuta",
        language: "Lingua"
      },
      footer: {
        about: {
          title: "Chi siamo",
          description: "EuroPriceGuru ti aiuta a trovare i migliori prezzi Amazon in Europa."
        },
        usefulLinks: {
          title: "Link utili",
          home: "Home",
          howItWorks: "Come funziona",
          contact: "Contatti"
        },
        legal: {
          title: "Legale",
          privacy: "Informativa sulla privacy",
          terms: "Termini di utilizzo"
        },
        copyright: "© 2024 EuroPriceGuru. Tutti i diritti riservati."
      },
      bestSellers: {
        title: "Migliori opportunità di risparmio",
        bestPrice: "Miglior prezzo",
        highestPrice: "Prezzo più alto",
        potentialSavings: "Risparmio potenziale"
      }
    }
  },
  es: {
    translation: {
      search: {
        placeholder: "Buscar un producto...",
        asinPlaceholder: "Introduce un ASIN o pega una URL de Amazon...",
        byKeyword: "Búsqueda por palabras clave",
        byAsin: "Búsqueda por ASIN",
        example: "Ejemplo: PlayStation 5, AirPods Pro",
        asinExample: "Ejemplo: B07PZR3PVB o https://www.amazon.es/dp/B07PZR3PVB"
      },
      header: {
        title: "EuroPriceGuru",
        countries: "Países",
        currency: "Moneda",
        language: "Idioma"
      },
      footer: {
        about: {
          title: "Acerca de",
          description: "EuroPriceGuru te ayuda a encontrar los mejores precios de Amazon en Europa."
        },
        usefulLinks: {
          title: "Enlaces útiles",
          home: "Inicio",
          howItWorks: "Cómo funciona",
          contact: "Contacto"
        },
        legal: {
          title: "Legal",
          privacy: "Política de privacidad",
          terms: "Términos de uso"
        },
        copyright: "© 2024 EuroPriceGuru. Todos los derechos reservados."
      },
      bestSellers: {
        title: "Mejores oportunidades de ahorro",
        bestPrice: "Mejor precio",
        highestPrice: "Precio más alto",
        potentialSavings: "Ahorro potencial"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;