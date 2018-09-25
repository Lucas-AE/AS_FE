import { Component, Input, OnInit } from '@angular/core';
import { AE_Account } from '../../models/ae_account';

@Component({
  selector: 'app-chart-info',
  templateUrl: './chart-info.component.html',
  styleUrls: ['./chart-info.component.css']
})
export class ChartInfoComponent implements OnInit {

  @Input()
  category: string;
  @Input()
  accountList: AE_Account[] = [];

  constructor() { }

  ngOnInit() {
  }

}
