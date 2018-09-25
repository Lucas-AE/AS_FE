import { Component, Input, OnInit } from '@angular/core';
import { BarometerStatePipe } from '../../filters/barometer-state.pipe';
import { AE_Account } from '../../models/ae_account';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input()
  accountList: AE_Account[] = [];
  chartData: {name: string, value: number}[];
  colorScheme = {
    domain: ['#F79E0F', '#000000', '#AAAAAA']
  };

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set category(selectedCategory: string) {
    const barometerFilter = new BarometerStatePipe();
    this.chartData = [
      {
        "name": "OK",
        "value": barometerFilter.transform(this.accountList, selectedCategory, 'OK').length
      },
      {
        "name": "Middelmatig",
        "value": barometerFilter.transform(this.accountList, selectedCategory, 'Middelmatig').length
      },
      {
        "name": "Niet OK",
        "value": barometerFilter.transform(this.accountList, selectedCategory, 'Helemaal niet OK').length
      }
    ]
  }


}
