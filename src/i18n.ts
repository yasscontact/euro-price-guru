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