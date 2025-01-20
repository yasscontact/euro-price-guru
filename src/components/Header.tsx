import { ShoppingCart, Globe, Coins, Check } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
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

  const [selectedCountries, setSelectedCountries] = useState<string[]>(["FR"]);

  const toggleCountry = (countryCode: string) => {
    setSelectedCountries((current) => {
      if (current.includes(countryCode)) {
        // Don't allow deselecting if it's the last country
        if (current.length === 1) return current;
        return current.filter((code) => code !== countryCode);
      }
      return [...current, countryCode];
    });
  };

  return (
    <header className="bg-amazon-dark py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <ShoppingCart className="h-8 w-8 text-amazon-orange" />
          <span className="text-2xl font-bold text-white">EuroPriceGuru</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-gray-300" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-[140px] bg-transparent text-white border-gray-600">
                  Pays ({selectedCountries.length})
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px]">
                {countries.map((country) => (
                  <DropdownMenuCheckboxItem
                    key={country.code}
                    checked={selectedCountries.includes(country.code)}
                    onCheckedChange={() => toggleCountry(country.code)}
                  >
                    {country.name}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center gap-2">
            <Coins className="h-5 w-5 text-gray-300" />
            <Select defaultValue="EUR">
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

          <Select defaultValue="fr">
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
      </div>
    </header>
  );
};

export default Header;