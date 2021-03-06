import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, Purchase } from '../../services/data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Input() purchase: Purchase;
  @Input() detailedInfo: boolean;
  @Output() selected: any = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
