import { Component } from '@angular/core';
import { DataService, Product } from '../../services/data.service';

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

  getProducts(): Product[] {
    return this.data.getProducts();
  }

  press(num: any) {
    if (this.currentSelection) {
      if (this.quantity === 'Quantity') {
        this.quantity = '';
      }
      if (num === -1) {
        this.quantity = this.quantity.substring(0, this.quantity.length - 1);
      } else if (this.quantity + num <= 9999) {
        this.quantity += num;
      } else {
        this.quantity = '9999';
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
        this.quantity === ''
          ? ''
          : (this.quantity * this.currentSelection.price).toFixed(2);
    }
  }

  resetSelections() {
    this.currentSelection = null;
    this.type = 'Type';
    this.quantity = 'Quantity';
    this.total = 'Total';
  }

  buyButtonClicked() {
    if (this.currentSelection) {
      if (this.quantity !== '' && this.quantity !== 'Quantity') {
        if (this.quantity <= this.currentSelection.qty) {
          this.data.updateQty(
            this.currentSelection.id,
            this.currentSelection.qty - this.quantity
          );
          alert(
            'You purchased ' +
              this.quantity +
              ' ' +
              this.type +
              ' for ' +
              this.total
          );
          this.data.addPurchase(
            this.currentSelection,
            this.quantity,
            (new Date()).toLocaleString(),
            this.total
          );
          this.resetSelections();
        } else {
          alert('Quantity entered is greater than quantity available.');
        }
      } else {
        alert('Please enter a quantity.');
      }
    } else {
      alert('Please select a product.');
    }
  }
}
