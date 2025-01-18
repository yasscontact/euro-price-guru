import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer un ASIN ou une URL Amazon",
        variant: "destructive",
      });
      return;
    }
    // TODO: Implement search logic
    console.log("Searching for:", query);
  };

  return (
    <form onSubmit={handleSearch} className="search-container p-8 rounded-xl">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
        Comparez les prix Amazon en Europe
      </h2>
      <div className="relative">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Entrez un ASIN ou collez une URL Amazon..."
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
      <p className="text-white/80 text-sm mt-4 text-center">
        Exemple: B07PZR3PVB ou https://www.amazon.fr/dp/B07PZR3PVB
      </p>
    </form>
  );
};

export default SearchBar;