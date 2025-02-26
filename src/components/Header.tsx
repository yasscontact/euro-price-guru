import { ShoppingCart, Globe, Coins } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCurrency } from "@/contexts/CurrencyContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HeaderProps {
  hideSelectors?: boolean;
  showLanguageOnly?: boolean;
}

const Header = ({ hideSelectors = false, showLanguageOnly = false }: HeaderProps) => {
  const { i18n } = useTranslation();
  const { currency, setCurrency } = useCurrency();

  const countries = [
    { code: "FR", name: "France" },
    { code: "DE", name: "Germany" },
    { code: "IT", name: "Italy" },
    { code: "ES", name: "Spain" },
    { code: "UK", name: "United Kingdom" }
  ];

  const currencies = [
    { code: "EUR", symbol: "€" },
    { code: "USD", symbol: "$" },
    { code: "GBP", symbol: "£" }
  ];

  const languages = [
    { code: "fr", name: "Français" },
    { code: "en", name: "English" },
    { code: "de", name: "Deutsch" },
    { code: "it", name: "Italiano" },
    { code: "es", name: "Español" }
  ];

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <header className="bg-amazon-dark py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <ShoppingCart className="h-8 w-8 text-amazon-orange" />
          <span className="text-2xl font-bold text-white">EuroPriceGuru</span>
        </Link>

        {!hideSelectors && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-gray-300" />
              <Select defaultValue="FR">
                <SelectTrigger className="w-[140px] bg-transparent text-white border-gray-600">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Coins className="h-5 w-5 text-gray-300" />
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger className="w-[100px] bg-transparent text-white border-gray-600">
                  <SelectValue placeholder="Currency" />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      {currency.code} ({currency.symbol})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Select defaultValue={i18n.language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[120px] bg-transparent text-white border-gray-600">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((language) => (
                  <SelectItem key={language.code} value={language.code}>
                    {language.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {showLanguageOnly && (
          <div className="flex items-center gap-4">
            <Select defaultValue={i18n.language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[120px] bg-transparent text-white border-gray-600">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((language) => (
                  <SelectItem key={language.code} value={language.code}>
                    {language.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;