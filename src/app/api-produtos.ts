import { Product } from "./page";

export default class ApiProduct {
  public async getProducts(): Promise<Product[]> {

    console.log(`${ApiProduct.name}: executou - ${this.getProducts.name}`);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const request = await fetch("http://localhost:3001/produtos", {
      next: {
        products: ['get-products']
      }
    });
    const response = await request.json();
    return response;
  }
}


