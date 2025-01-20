import { Euro } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

const mockBestSellers = [
  {
    id: 1,
    title: "PlayStation 5",
    image: "https://via.placeholder.com/200",
    minPrice: 449.99,
    maxPrice: 549.99,
    difference: 100,
    bestMarket: "Allemagne",
    worstMarket: "France",
  },
  {
    id: 2,
    title: "Apple AirPods Pro",
    image: "https://via.placeholder.com/200",
    minPrice: 219.99,
    maxPrice: 279.99,
    difference: 60,
    bestMarket: "Espagne",
    worstMarket: "Italie",
  },
  {
    id: 3,
    title: "Nintendo Switch OLED",
    image: "https://via.placeholder.com/200",
    minPrice: 329.99,
    maxPrice: 369.99,
    difference: 40,
    bestMarket: "France",
    worstMarket: "Allemagne",
  },
  {
    id: 4,
    title: "MacBook Air M2",
    image: "https://via.placeholder.com/200",
    minPrice: 1099.99,
    maxPrice: 1299.99,
    difference: 200,
    bestMarket: "Espagne",
    worstMarket: "France",
  },
  {
    id: 5,
    title: "Samsung Galaxy S23",
    image: "https://via.placeholder.com/200",
    minPrice: 799.99,
    maxPrice: 899.99,
    difference: 100,
    bestMarket: "Allemagne",
    worstMarket: "Italie",
  },
  {
    id: 6,
    title: "iPad Pro 12.9",
    image: "https://via.placeholder.com/200",
    minPrice: 999.99,
    maxPrice: 1199.99,
    difference: 200,
    bestMarket: "France",
    worstMarket: "Espagne",
  },
  {
    id: 7,
    title: "Xbox Series X",
    image: "https://via.placeholder.com/200",
    minPrice: 449.99,
    maxPrice: 499.99,
    difference: 50,
    bestMarket: "Allemagne",
    worstMarket: "France",
  },
  {
    id: 8,
    title: "Sony WH-1000XM4",
    image: "https://via.placeholder.com/200",
    minPrice: 279.99,
    maxPrice: 349.99,
    difference: 70,
    bestMarket: "Espagne",
    worstMarket: "Italie",
  },
];

const BestSellers = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-amazon-dark">
          Meilleures opportunités d'économies
        </h2>
        <ScrollArea className="h-[50px] w-[200px] rounded-md border p-2">
          <div className="text-sm">
            Faites défiler pour voir plus de produits et découvrir les meilleures offres du moment.
          </div>
        </ScrollArea>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {mockBestSellers.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <div className="space-y-2">
                    <p className="text-green-600 flex items-center gap-1">
                      <Euro className="h-4 w-4" />
                      Meilleur prix: {item.minPrice}€ ({item.bestMarket})
                    </p>
                    <p className="text-red-600">
                      Prix le plus élevé: {item.maxPrice}€ ({item.worstMarket})
                    </p>
                    <p className="font-semibold text-amazon-orange">
                      Économie potentielle: {item.difference}€
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default BestSellers;