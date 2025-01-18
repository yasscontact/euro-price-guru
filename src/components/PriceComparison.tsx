import { Euro } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockData = [
  { country: "France", price: 99.99, shipping: 0, total: 99.99 },
  { country: "Allemagne", price: 95.99, shipping: 5.99, total: 101.98 },
  { country: "Italie", price: 102.99, shipping: 0, total: 102.99 },
  { country: "Espagne", price: 97.99, shipping: 3.99, total: 101.98 },
];

const PriceComparison = () => {
  return (
    <div className="price-card overflow-x-auto">
      <h3 className="text-xl font-bold mb-4 text-amazon-dark">
        Comparaison des prix
      </h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pays</TableHead>
            <TableHead>Prix produit</TableHead>
            <TableHead>Frais de port</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockData.map((item) => (
            <TableRow key={item.country}>
              <TableCell className="font-medium">{item.country}</TableCell>
              <TableCell>{item.price} €</TableCell>
              <TableCell>{item.shipping} €</TableCell>
              <TableCell className="font-bold">
                {item.total} €
                {item.total === Math.min(...mockData.map((d) => d.total)) && (
                  <span className="ml-2 inline-flex items-center text-green-600">
                    <Euro className="h-4 w-4" />
                    Meilleur prix
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PriceComparison;