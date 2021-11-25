import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RestockPageRoutingModule } from './restock-routing.module';
import { RestockPage } from './restock.page';
import { ProductComponentModule } from 'src/app/components/product/product.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestockPageRoutingModule,
    ProductComponentModule,
  ],
  declarations: [RestockPage],
})
export class RestockPageModule {}
