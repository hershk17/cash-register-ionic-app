import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage {
  name: string;
  quantity: number;
  price: number;

  constructor(private data: DataService) {}

  saveClicked() {
    this.data.addProduct(this.name, this.quantity, this.price);
    alert(this.name + ' added successfully');
    this.name = null;
    this.quantity = null;
    this.price = null;
  }

  cancelClicked() {
    window.history.back();
  }
}
