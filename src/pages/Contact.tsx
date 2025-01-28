import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header hideSelectors={true} />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Contact</h1>
        <p>
          Pour nous contacter, merci de nous écrire par mail à l'adresse suivante :{" "}
          <a href="mailto:yass.contact.1997@gmail.com" className="text-amazon-orange hover:underline">
            yass.contact.1997@gmail.com
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;