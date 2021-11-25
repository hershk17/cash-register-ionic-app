import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService, Product } from 'src/app/services/data.service';

@Component({
  selector: 'app-restock',
  templateUrl: './restock.page.html',
  styleUrls: ['./restock.page.scss'],
})
export class RestockPage {
  currentSelection: Product = null;
  quantity: string;

  processing = false;

  constructor(
    private data: DataService,
    private alertController: AlertController
  ) {}

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

  getProducts(): Product[] {
    return this.data.getProducts();
  }

  productSelected(product: Product) {
    this.currentSelection = product;
  }

  async restockConfirmClicked() {
    if (!this.processing) {
      this.processing = true;

      const enteredQty: any = Number(this.quantity);
      if (!isNaN(enteredQty)) {
        if (enteredQty) {
          if (enteredQty > 0) {
            this.data.updateQty(
              this.currentSelection.id,
              this.currentSelection.qty + enteredQty
            );
            this.quantity = null;
            await this.presentAlert(
              'Success',
              this.currentSelection.name +
                ' restocked to ' +
                this.currentSelection.qty
            );
          } else {
            await this.presentAlert(
              'Error',
              'Quantity entered must be greater than 0.'
            );
          }
        } else {
          await this.presentAlert('Error', 'Please enter a Quantity.');
        }
      } else {
        await this.presentAlert('Error', 'Quantity entered must be a number.');
      }
      this.processing = false;
    }
  }

  cancelClicked() {
    window.history.back();
  }
}
