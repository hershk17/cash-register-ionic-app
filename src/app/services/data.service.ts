import { Injectable } from '@angular/core';

export interface Product {
  prop1: string;
  prop2: string;
  prop3: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public products: Product[] = [
    {
      prop1: 'temp',
      prop2: 'temp',
      prop3: 'temp'
    }
  ];

  constructor() { }

  public getProducts(): Product[] {
    return this.products;
  }

  public getProductById(id: number): Product {
    return this.products[id];
  }
}
