import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import ApiProduct from "../api/api-produtos";
import { Product } from "../app/page";

const apiProduct = new ApiProduct();

export default async function Products() {

  const response = await apiProduct.getProducts();

  return (
    <div className="p-4 mx-auto">
      <div className="border rounded-sm">
      <Table>
        <TableHeader>
          <TableHead>Produto</TableHead>
          <TableHead>Fabricante</TableHead>
        </TableHeader>
          <TableBody>
          {response.map((product: Product) => (
            <TableRow key={product.id}>
              <TableCell>{product.Produto}</TableCell>
              <TableCell>{product.Fabricante}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </div>
    </div>
  );
}
