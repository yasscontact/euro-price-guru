import { useState } from "react";
import { Check, Globe, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { Checkbox } from "./ui/checkbox";
import unicode from "country-flag-icons/unicode";

export type Country = {
  code: string;
  name: string;
  currency: string;
  language: string;
};

export const AVAILABLE_COUNTRIES: Country[] = [
  { code: "DE", name: "Allemagne", currency: "EUR", language: "de" },
  { code: "GB", name: "Angleterre", currency: "GBP", language: "en" },
  { code: "FR", name: "France", currency: "EUR", language: "fr" },
  { code: "ES", name: "Espagne", currency: "EUR", language: "es" },
  { code: "IT", name: "Italie", currency: "EUR", language: "it" },
  { code: "SE", name: "Suède", currency: "SEK", language: "sv" },
  { code: "NL", name: "Pays-Bas", currency: "EUR", language: "nl" },
  { code: "PL", name: "Pologne", currency: "PLN", language: "pl" },
  { code: "BE", name: "Belgique", currency: "EUR", language: "fr" },
];

export const CountrySelector = () => {
  const [selectedCountries, setSelectedCountries] = useState<string[]>(["FR"]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Globe className="h-4 w-4" />
          <span>Pays</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Pays à comparer</h4>
            <p className="text-sm text-muted-foreground">
              Sélectionnez les pays pour lesquels vous souhaitez comparer les prix
            </p>
          </div>
          <div className="grid gap-2">
            {AVAILABLE_COUNTRIES.map((country) => (
              <div key={country.code} className="flex items-center space-x-2">
                <Checkbox
                  id={country.code}
                  checked={selectedCountries.includes(country.code)}
                  onCheckedChange={(checked) => {
                    setSelectedCountries(
                      checked
                        ? [...selectedCountries, country.code]
                        : selectedCountries.filter((c) => c !== country.code)
                    );
                  }}
                />
                <label
                  htmlFor={country.code}
                  className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  <span>{unicode(country.code)}</span>
                  <span>{country.name}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};