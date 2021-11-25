import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
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

  processing = false;

  constructor(
    private data: DataService,
    private alertController: AlertController
  ) {}

  getProducts(): Product[] {
    return this.data.getProducts();
  }

  async presentAlert(title: string, msg: string) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: [
        {
          text: 'OK',
        },
      ],
    });
    await alert.present();
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

  async buyButtonClicked() {
    if (!this.processing) {
      this.processing = true;
      if (this.currentSelection) {
        if (this.quantity !== '' && this.quantity !== 'Quantity') {
          if (this.quantity <= this.currentSelection.qty) {
            this.data.updateQty(
              this.currentSelection.id,
              this.currentSelection.qty - this.quantity
            );
            this.data.addPurchase(
              this.currentSelection,
              this.quantity,
              new Date().toLocaleString(),
              this.total
            );
            await this.presentAlert(
              'Success',
              'You purchased ' +
                this.quantity +
                ' ' +
                this.type +
                ' for ' +
                this.total
            );
          } else {
            await this.presentAlert(
              'Error',
              'Quantity entered (' +
                this.quantity +
                ') is greater than quantity available (' +
                this.currentSelection.qty +
                ').'
            );
          }
        } else {
          await this.presentAlert('Error', 'Please enter a Quantity.');
        }
      } else {
        await this.presentAlert(
          'Error',
          'Please select a Product to Purchase.'
        );
      }
      this.processing = false;
    }
  }
}
