import { Product } from "../app/page";

export default class ApiProduct {
  public async getProducts(): Promise<Product[]> {

    console.log(`${ApiProduct.name}: executou - ${this.getProducts.name}`);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const request = await fetch("http://localhost:3001/produtos", {
      next: {
        products: ['get-products']
      }
    });
    const response = await request.json();
    return response;
  }

  public async postProduct(produto: Product): Promise<Product> {
    console.log(`${ApiProduct.name}: executou - ${this.postProduct.name}`);

    const request = await fetch("http://localhost:3001/produtos", {
      method: "POST",
      body: JSON.stringify(produto),
    });

    const response = await request.json();
    return response;
  }
}


