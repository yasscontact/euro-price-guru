import { Star } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export const FavoriteButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Star className="h-5 w-5 text-amazon-orange" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Produits favoris</SheetTitle>
          <SheetDescription>
            Liste des produits que vous suivez
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground">
            Vous n'avez pas encore de produits favoris
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};