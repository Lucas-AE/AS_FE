import { Component, Input, OnInit } from '@angular/core';
import { BarometerStatePipe } from '../../filters/barometer-state.pipe';
import { AE_Account } from '../../models/ae_account';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  private _accountList: AE_Account[] = [];
  private _category: string;

  chartData: {name: string, value: number}[];
  colorScheme = {
    domain: ['#508104', '#db8200', '#b64201']
  };

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set accountList(list: AE_Account[]){
    this._accountList = list;
    this.setChartData();
  }

  get accountList(): AE_Account[] {
    return this._accountList;
  }

  @Input()
  set category(selectedCategory: string) {
    this._category = selectedCategory;
    this.setChartData();
  }

  get category(): string {
    return this._category;
  }

  setChartData(): void {
    const barometerFilter = new BarometerStatePipe();
    this.chartData = [
      {
        "name": "OK",
        "value": barometerFilter.transform(this.accountList, this.category, 'OK').length
      },
      {
        "name": "Middelmatig",
        "value": barometerFilter.transform(this.accountList, this.category, 'Middelmatig').length
      },
      {
        "name": "Niet OK",
        "value": barometerFilter.transform(this.accountList, this.category, 'Helemaal niet OK').length
      }
    ]
  }
}
