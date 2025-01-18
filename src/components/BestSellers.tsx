import { Euro } from "lucide-react";

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
];

const BestSellers = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-amazon-dark mb-6">
        Meilleures opportunités d'économies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockBestSellers.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
          >
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
        ))}
      </div>
    </div>
  );
};

export default BestSellers;