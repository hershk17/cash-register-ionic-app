import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  form: FormGroup;

  processing = false;

  constructor(
    private data: DataService,
    private alertController: AlertController
  ) {}

  async saveClicked() {
    if (!this.processing) {
      this.processing = true;
      if (this.form.invalid) {
        let msg = 'Please fill the following fields: ';
        let hasPreviousError = false;
        if (this.form.get('name').errors) {
          msg += 'Name';
          hasPreviousError = true;
        }
        if (this.form.get('quantity').errors) {
          if (hasPreviousError) {
            msg += ', ';
          }
          hasPreviousError = true;
          msg += 'Quantity';
        }
        if (this.form.get('price').errors) {
          if (hasPreviousError) {
            msg += ', ';
          }
          hasPreviousError = true;
          msg += 'Price';
        }
        await this.presentAlert('Error', msg);
      } else {
        this.data.addProduct(
          this.form.get('name').value,
          this.form.get('quantity').value,
          this.form.get('price').value
        );
        await this.presentAlert(
          'Success',
          this.form.get('name').value + ' added successfully!'
        );
        this.form.get('name').reset();
        this.form.get('quantity').reset();
        this.form.get('price').reset();
      }
      this.processing = false;
    }
  }

  cancelClicked() {
    window.history.back();
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      }),
      quantity: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(10)],
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(10)],
      }),
    });
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
}
