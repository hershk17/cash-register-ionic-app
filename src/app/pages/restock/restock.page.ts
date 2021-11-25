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
    this.data.updateQty(
      this.currentSelection.id,
      this.currentSelection.qty + Number(this.quantity)
    );
    this.quantity = null;
  }

  cancelClicked() {
    window.history.back();
  }
}
