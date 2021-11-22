import { Injectable } from '@angular/core';

export interface Product {
  name: any;
  qty: any;
  price: any;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public products: Product[] = [
    {
      name: 'Pants',
      qty: 20,
      price: 50.7
    },
    {
      name: 'Shoes',
      qty: 50,
      price: 90
    },
    {
      name: 'Hats',
      qty: 10,
      price: 20.5
    },
    {
      name: 'TShirts',
      qty: 10,
      price: 33.8
    },
    {
      name: 'Dresses',
      qty: 24,
      price: 140.3
    },
  ];

  constructor() { }

  public getProducts(): Product[] {
    return this.products;
  }

  public getProductById(id: number): Product {
    return this.products[id];
  }
}
