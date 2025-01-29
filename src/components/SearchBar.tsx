import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState<"asin" | "keyword">("keyword");
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) {
      toast({
        title: t("error"),
        description: t("enterSearchTerm"),
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
        {t("compareAmazonPrices")}
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
            {t("searchByKeyword")}
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="searchType"
              checked={searchType === "asin"}
              onChange={() => setSearchType("asin")}
              className="text-amazon-orange focus:ring-amazon-orange"
            />
            {t("searchByAsin")}
          </label>
        </div>
        <div className="relative">
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              searchType === "keyword"
                ? t("searchProduct")
                : t("enterAsin")
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
        <p className="text-white/80 text-sm text-center">
          {searchType === "asin" ? t("exampleAsin") : t("exampleKeywords")}
        </p>
      </div>
    </form>
  );
};

export default SearchBar;