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
    bestMarket: "France",
    worstMarket: "France",
    link: "https://amzn.to/3PPMnme"
  },
  {
    id: 2,
    title: "Batterie Externe 26800mAh",
    image: "/lovable-uploads/4c092d2e-1ac5-4e3d-927a-368765a44aac.png",
    minPrice: 18.99,
    maxPrice: 29.99,
    difference: 11,
    bestMarket: "France",
    worstMarket: "France",
    link: "https://amzn.to/42BLIfM"
  },
  {
    id: 3,
    title: "Trousse de Toilette",
    image: "/lovable-uploads/178423b1-a7dc-436a-b342-a6483cc76fd2.png",
    minPrice: 8.99,
    maxPrice: 15.99,
    difference: 7,
    bestMarket: "France",
    worstMarket: "France",
    link: "https://amzn.to/4jpCKZ8"
  }
];

const BestSellers = () => {
  return (
    <div className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-amazon-dark">
            Meilleures opportunités d'économies
          </h2>
          <p className="text-xs italic mt-1">
            En tant que Partenaire Amazon, je réalise un bénéfice sur les achats remplissant les conditions requises
          </p>
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
                      Prix: {item.minPrice}€ ({item.bestMarket})
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