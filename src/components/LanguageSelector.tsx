import { useState } from "react";
import { Languages, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { AVAILABLE_COUNTRIES } from "./CountrySelector";

const LANGUAGES = AVAILABLE_COUNTRIES.reduce<{ [key: string]: string }>(
  (acc, country) => {
    if (!acc[country.language]) {
      acc[country.language] = country.name;
    }
    return acc;
  },
  {}
);

export const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("fr");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <Languages className="h-4 w-4" />
          <span>Langue</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Langue</h4>
            <p className="text-sm text-muted-foreground">
              Sélectionnez la langue du site
            </p>
          </div>
          <RadioGroup
            value={selectedLanguage}
            onValueChange={setSelectedLanguage}
            className="grid gap-2"
          >
            {Object.entries(LANGUAGES).map(([code, name]) => (
              <div key={code} className="flex items-center space-x-2">
                <RadioGroupItem value={code} id={code} />
                <label htmlFor={code} className="text-sm">
                  {name}
                </label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </PopoverContent>
    </Popover>
  );
};