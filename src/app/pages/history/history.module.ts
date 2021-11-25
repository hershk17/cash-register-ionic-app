import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HistoryPageRoutingModule } from './history-routing.module';
import { HistoryPage } from './history.page';
import { ProductComponentModule } from '../../components/product/product.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPageRoutingModule,
    ProductComponentModule
  ],
  declarations: [HistoryPage]
})
export class HistoryPageModule {}
