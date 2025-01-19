import { useState } from "react";
import { Euro, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { AVAILABLE_COUNTRIES } from "./CountrySelector";

const CURRENCIES = AVAILABLE_COUNTRIES.reduce<{ [key: string]: string }>(
  (acc, country) => {
    if (!acc[country.currency]) {
      acc[country.currency] = country.name;
    }
    return acc;
  },
  {}
);

export const CurrencySelector = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Euro className="h-4 w-4" />
          <span>Devise</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Devise</h4>
            <p className="text-sm text-muted-foreground">
              Sélectionnez la devise pour l'affichage des prix
            </p>
          </div>
          <RadioGroup
            value={selectedCurrency}
            onValueChange={setSelectedCurrency}
            className="grid gap-2"
          >
            {Object.entries(CURRENCIES).map(([code, name]) => (
              <div key={code} className="flex items-center space-x-2">
                <RadioGroupItem value={code} id={code} />
                <label htmlFor={code} className="text-sm">
                  {code} - {name}
                </label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </PopoverContent>
    </Popover>
  );
};