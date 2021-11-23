import { Component } from '@angular/core';
import { DataService, Product } from 'src/app/services/data.service';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.page.html',
  styleUrls: ['./restock.page.scss'],
})
export class RestockPage {
  currentSelection: Product = null;
  quantity: string;

  constructor(private data: DataService) {}

  getProducts(): Product[] {
    return this.data.getProducts();
  }

  productSelected(product: Product) {
    this.currentSelection = product;
  }

  restockConfirmClicked() {
    console.log('x restocked by ' + this.quantity);
  }

  cancelClicked() {
    console.log('cancel clicked');
  }
}
