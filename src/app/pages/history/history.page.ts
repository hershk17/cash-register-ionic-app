import { Component } from '@angular/core';
import { DataService, Purchase } from '../../services/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage {

  constructor(private data: DataService) { }

  getPurchases(): Purchase[] {
    return this.data.getPurchases();
  }
}
