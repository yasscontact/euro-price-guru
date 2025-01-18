import SearchBar from "@/components/SearchBar";
import PriceComparison from "@/components/PriceComparison";
import PriceHistory from "@/components/PriceHistory";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BestSellers from "@/components/BestSellers";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <SearchBar />
          <BestSellers />
          
          {/* Mock product info - will be dynamic later */}
          <div className="mt-12 animate-fadeIn">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src="https://via.placeholder.com/300"
                  alt="Product"
                  className="w-full md:w-[300px] h-[300px] object-cover rounded-lg"
                />
                <div>
                  <h1 className="text-2xl font-bold text-amazon-dark mb-4">
                    Exemple de Produit Amazon
                  </h1>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>ASIN: B07PZR3PVB</span>
                    <span>•</span>
                    <span>Catégorie: Électronique</span>
                  </div>
                </div>
              </div>
            </div>

            <PriceComparison />
            <PriceHistory />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;