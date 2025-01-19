import { Euro } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import unicode from "country-flag-icons/unicode";

const mockBestSellers = [
  {
    id: 1,
    title: "PlayStation 5",
    image: "https://via.placeholder.com/200",
    minPrice: 449.99,
    maxPrice: 549.99,
    difference: 100,
    bestMarket: "DE",
    worstMarket: "FR",
  },
  {
    id: 2,
    title: "Apple AirPods Pro",
    image: "https://via.placeholder.com/200",
    minPrice: 219.99,
    maxPrice: 279.99,
    difference: 60,
    bestMarket: "ES",
    worstMarket: "IT",
  },
  {
    id: 3,
    title: "Nintendo Switch OLED",
    image: "https://via.placeholder.com/200",
    minPrice: 329.99,
    maxPrice: 369.99,
    difference: 40,
    bestMarket: "FR",
    worstMarket: "DE",
  },
];

const BestSellers = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-amazon-dark">
          Meilleures opportunités d'économies
        </h2>
        <div className="flex gap-2">
          <CarouselPrevious className="relative static translate-y-0 text-amazon-orange hover:text-amazon-orange/80" />
          <CarouselNext className="relative static translate-y-0 text-amazon-orange hover:text-amazon-orange/80" />
        </div>
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
                      Meilleur prix: {item.minPrice}€ {unicode(item.bestMarket)}
                    </p>
                    <p className="text-red-600 flex items-center gap-1">
                      Prix le plus élevé: {item.maxPrice}€ {unicode(item.worstMarket)}
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
      </Carousel>
    </div>
  );
};

export default BestSellers;