import { revalidateTag } from "next/cache";
import AddProductsButton from "./addproducts-button";

export default function AddProducts() {

  async function handleAddProduct(form: FormData) {
    'use server'

    let produto = {
      Produto: form.get('Produto'),
      Fabricante: form.get('Fabricante')
    }

    console.table([produto])

    if (!produto.Produto || !produto.Fabricante) {
      return
    }

    await new Promise(resolve => setTimeout(resolve, 1000))

    await fetch("http://localhost:3001/produtos", {
      method: "POST",
      body: JSON.stringify(produto),
    });

    revalidateTag('get-products')
  }

  return (
    <form id="create-product"
      className="flex flex-col"
      action={handleAddProduct}
      method="POST"
    >
      <input
        type="text"
        name="Produto"
        placeholder="produto"
        className="m-2 border-solid border-gray-500 rounded-sm p-1 text-black"
      />
      <input
        type="text"
        name="Fabricante"
        placeholder="fabricante"
        className="m-2 border-solid border-gray-500 rounded-sm p-1 text-black"
      />

      <AddProductsButton/>
    </form>
  );
}
