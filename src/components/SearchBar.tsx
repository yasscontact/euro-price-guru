import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Liste étendue de produits pour les suggestions
const allProducts = [
  // Smartphones
  "iPhone 15", "iPhone 15 Pro", "iPhone 15 Pro Max", "iPhone 14", "iPhone 14 Pro",
  "Samsung Galaxy S24", "Samsung Galaxy S24 Ultra", "Samsung Galaxy S23", 
  "Samsung Galaxy A54", "Google Pixel 8", "Google Pixel 8 Pro",
  "OnePlus 12", "Xiaomi 14 Pro", "Nothing Phone 2",
  
  // Consoles & Gaming
  "PlayStation 5", "PlayStation 5 Digital", "PlayStation 4", "PlayStation 4 Pro",
  "Xbox Series X", "Xbox Series S", "Nintendo Switch", "Nintendo Switch OLED",
  "Nintendo Switch Lite", "Steam Deck", "ROG Ally",
  
  // Audio
  "AirPods Pro", "AirPods Max", "AirPods 3", "Sony WH-1000XM5", 
  "Sony WF-1000XM5", "Bose QuietComfort Ultra", "Bose QuietComfort Earbuds II",
  "Samsung Galaxy Buds 2 Pro", "Jabra Elite 10", "Sennheiser Momentum 4",
  
  // Ordinateurs & Tablettes
  "MacBook Pro 14", "MacBook Pro 16", "MacBook Air M2", "MacBook Air M3",
  "iPad Pro 12.9", "iPad Pro 11", "iPad Air", "iPad Mini",
  "Surface Pro 9", "Surface Laptop 5", "Dell XPS 13", "Dell XPS 15",
  "Lenovo ThinkPad X1", "ASUS ROG Zephyrus",
  
  // Montres connectées
  "Apple Watch Series 9", "Apple Watch Ultra 2", "Samsung Galaxy Watch 6",
  "Samsung Galaxy Watch 6 Classic", "Google Pixel Watch 2",
  "Garmin Fenix 7", "Garmin Epix Pro", "Fitbit Sense 2"
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState<"asin" | "keyword">("keyword");
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { toast } = useToast();
  const { t } = useTranslation();

  const getSuggestions = (input: string) => {
    if (!input || input.length < 2) return [];
    
    const normalizedInput = input.toLowerCase().trim();
    return allProducts.filter(product => 
      product.toLowerCase().includes(normalizedInput)
    );
  };

  // Mise à jour des suggestions en temps réel
  useEffect(() => {
    if (searchType === "keyword") {
      const newSuggestions = getSuggestions(query);
      setSuggestions(newSuggestions);
      setOpen(newSuggestions.length > 0);
    } else {
      setSuggestions([]);
      setOpen(false);
    }
  }, [query, searchType]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      toast({
        title: t('search.error'),
        description: t('search.errorDescription'),
        variant: "destructive",
      });
      return;
    }
    console.log("Searching for:", query, "Type:", searchType);
  };

  return (
    <form onSubmit={handleSearch} className="search-container p-8 rounded-xl">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        {t('search.title')}
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-4 text-white">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="searchType"
              checked={searchType === "keyword"}
              onChange={() => setSearchType("keyword")}
              className="text-amazon-orange focus:ring-amazon-orange"
            />
            {t('search.byKeyword')}
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="searchType"
              checked={searchType === "asin"}
              onChange={() => setSearchType("asin")}
              className="text-amazon-orange focus:ring-amazon-orange"
            />
            {t('search.byAsin')}
          </label>
        </div>
        <div className="relative">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <div className="relative">
                <Input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={
                    searchType === "keyword"
                      ? t('search.placeholder')
                      : t('search.asinPlaceholder')
                  }
                  className="search-input pr-12"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-amazon-orange hover:bg-amazon-light"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </PopoverTrigger>
            {suggestions.length > 0 && (
              <PopoverContent className="p-0 w-[400px]" align="start">
                <Command>
                  <CommandList>
                    <CommandGroup>
                      {suggestions.map((suggestion) => (
                        <CommandItem
                          key={suggestion}
                          onSelect={() => {
                            setQuery(suggestion);
                            setOpen(false);
                          }}
                        >
                          {suggestion}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            )}
          </Popover>
        </div>
        <p className="text-white/80 text-sm text-center">
          {searchType === "asin" ? t('search.asinExample') : t('search.example')}
        </p>
      </div>
    </form>
  );
};

export default SearchBar;