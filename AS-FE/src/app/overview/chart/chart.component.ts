import { Component, Input, OnInit } from '@angular/core';
import { AE_Account } from '../../models/ae_account';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input()
  category: string;
  @Input()
  accountList: AE_Account[] = [];

  constructor() { }

  ngOnInit() {
  }

}
