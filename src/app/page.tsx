import Image from "next/image";
import Products from "./products";
import AddProducts from "./add-products";
import { Suspense } from "react";

export interface Product {
  id: number;
  Produto: string;
  Fabricante: string;
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center">
      <div className="m-24">
        <Suspense fallback={<p>Carregando produtos..</p>}>
          <Products />
        </Suspense>
      </div>
      <div className="m-4">
        <AddProducts />
      </div>
    </main>
  );
}
