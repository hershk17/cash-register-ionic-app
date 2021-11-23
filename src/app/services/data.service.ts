import { Injectable } from '@angular/core';
import { ProductComponent } from '../components/product/product.component';

export interface Product {
  id: number;
  name: string;
  qty: number;
  price: number;
}

export interface Purchase extends Product {
  purchaseQty: number;
  purchaseDate: string;
  purchaseTotal: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public products: Product[] = [
    {
      id: 0,
      name: 'Pants',
      qty: 20,
      price: 50.7,
    },
    {
      id: 1,
      name: 'Shoes',
      qty: 50,
      price: 90,
    },
    {
      id: 2,
      name: 'Hats',
      qty: 10,
      price: 20.5,
    },
    {
      id: 3,
      name: 'TShirts',
      qty: 10,
      price: 33.8,
    },
    {
      id: 4,
      name: 'Dresses',
      qty: 24,
      price: 140.3,
    },
  ];

  public purchased: Purchase[] = [];

  constructor() {}

  public getProducts(): Product[] {
    return this.products;
  }

  public updateQty(id: number, qty: number): void {
    for (const product of this.products) {
      if (product.id === id) {
        product.qty = qty;
      }
    }
  }

  public getPurchases(): Purchase[] {
    return this.purchased;
  }

  public getPurchaseById(id: number): Purchase {
    for (const p of this.purchased) {
      if (p.id === id) {
        return p;
      }
    }
  }

  public addPurchase(
    product: Product,
    qty: number,
    date: string,
    total: number
  ): void {
    this.purchased.push({
      id: product.id,
      name: product.name,
      qty: product.qty,
      price: product.price,
      purchaseQty: qty,
      purchaseDate: date,
      purchaseTotal: total,
    });
  }

  public addProduct(name: string, qty: number, price: number) {
    this.products.push({ id: this.products.length, name, qty, price });
  }
}
