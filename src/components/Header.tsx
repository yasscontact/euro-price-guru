import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { CountrySelector } from "./CountrySelector";
import { LanguageSelector } from "./LanguageSelector";
import { CurrencySelector } from "./CurrencySelector";
import { FavoriteButton } from "./FavoriteButton";

const Header = () => {
  return (
    <header className="bg-amazon-dark py-4 px-6 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <ShoppingCart className="h-8 w-8 text-amazon-orange" />
          <span className="text-2xl font-bold text-white">EuroPriceGuru</span>
        </Link>
        <div className="flex items-center gap-4">
          <CountrySelector />
          <LanguageSelector />
          <CurrencySelector />
          <FavoriteButton />
        </div>
      </div>
    </header>
  );
};

export default Header;