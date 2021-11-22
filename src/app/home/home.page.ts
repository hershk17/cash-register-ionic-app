import { Component } from '@angular/core';
import { DataService, Product } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  type: any = 'Type';
  quantity: any = 'Quantity';
  total: any = 'Total';

  currentSelection: Product = null;

  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  press(num: any) {
    if (this.currentSelection) {
      if (this.quantity === 'Quantity') {
        this.quantity = '';
      }
      if (num === -1) {
        this.quantity = this.quantity.substring(0, this.quantity.length - 1);
      } else {
        this.quantity += num;

        // if (this.quantity + num <= this.currentSelection.qty) {
          
        // }
      }
      this.updatePrice();
    }
  }

  productSelected(product: Product) {
    this.currentSelection = product;
    this.type = product.name;
    if (this.quantity === '' || this.quantity === 'Quantity') {
      this.quantity = 'Quantity';
      this.total = 'Total';
    } else {
      this.updatePrice();
    }
  }

  updatePrice() {
    if (this.currentSelection) {
      this.total =
        this.quantity === '' ? '' : this.quantity * this.currentSelection.price;
    }
  }

  getProducts(): Product[] {
    return this.data.getProducts();
  }
}
