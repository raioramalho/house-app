import ApiProduct from "./api-produtos";
import { Product } from "./page";

const apiProduct = new ApiProduct();

export default async function Products() {

  const response = await apiProduct.getProducts();

  return (
    <>
        {response.map((product: Product) => (
          <div className="flex flex-col flex-wrap justify-center self-center mb-2" key={product.id}>
            <h2>Produto: {product.Produto}</h2>
            <p>Fabricante: {product.Fabricante}</p>
          </div>
        ))}
    </>
  );
}
