import { Euro } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const mockBestSellers = [
  {
    id: 1,
    title: "Ampoule connectée TP-Link Tapo L530E",
    image: "/lovable-uploads/182fce56-6aae-42f3-835f-659d31edaaae.png",
    minPrice: 14.99,
    maxPrice: 24.99,
    difference: 10,
    bestMarket: "Allemagne",
    worstMarket: "France",
    link: "https://amzn.to/3PPMnme"
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
];

const BestSellers = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-amazon-dark">
          Meilleures opportunités d'économies
        </h2>
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
              <div 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 h-full cursor-pointer"
                onClick={() => item.link && window.open(item.link, '_blank')}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-contain"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <div className="space-y-2">
                    <p className="text-green-600 flex items-center gap-1">
                      <Euro className="h-4 w-4" />
                      Meilleur prix: {item.minPrice}€ ({item.bestMarket})
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