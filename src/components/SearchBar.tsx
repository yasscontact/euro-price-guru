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

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState<"asin" | "keyword">("keyword");
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const { toast } = useToast();
  const { t } = useTranslation();

  // Simulated suggestions - in a real app, this would come from an API
  const getSuggestions = (input: string) => {
    const commonProducts = [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X",
      "Nintendo Switch",
      "AirPods Pro",
      "iPhone 15",
      "Samsung Galaxy S24",
      "MacBook Pro",
      "iPad Air",
      "Apple Watch"
    ];

    if (!input) return [];
    
    return commonProducts.filter(product => 
      product.toLowerCase().includes(input.toLowerCase())
    );
  };

  useEffect(() => {
    if (query && searchType === "keyword") {
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
        title: "Erreur",
        description: "Veuillez entrer un terme de recherche",
        variant: "destructive",
      });
      return;
    }
    // TODO: Implement search logic
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