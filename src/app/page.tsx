import Image from "next/image";
import Products from "../components/products";
import AddProducts from "../components/add-products";
import { Suspense } from "react";
import ProductsFallback from "@/components/products-fallback";

export interface Product {
  id: number;
  Produto: string;
  Fabricante: string;
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-center">
      <div className="m-24">
        <Suspense fallback={<ProductsFallback/>}>
          <Products />
        </Suspense>
      </div>
      <div className="m-4">
        <AddProducts />
      </div>
    </main>
  );
}
