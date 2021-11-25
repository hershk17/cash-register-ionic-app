import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Purchase } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product: Purchase = null;

  constructor(private activatedRoute: ActivatedRoute, private data: DataService) {}

  ngOnInit() {
    this.product = this.data.getPurchaseById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }
}
