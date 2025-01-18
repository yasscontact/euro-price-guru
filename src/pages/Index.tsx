import SearchBar from "@/components/SearchBar";
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;