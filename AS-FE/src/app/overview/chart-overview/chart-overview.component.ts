import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { AE_Account } from '../../models/ae_account';

@Component({
  selector: 'app-chart-overview',
  templateUrl: './chart-overview.component.html',
  styleUrls: ['./chart-overview.component.css']
})
export class ChartOverviewComponent implements OnInit, AfterContentInit {

  selectedTab: string;

  @Input()
  accountList: AE_Account[] = [];

  constructor() {
  }

  ngOnInit() {
    this.selectedTab = 'partnership';
  }

  setSelectedTab(event: NgbTabChangeEvent) {
    this.selectedTab = event.nextId;
  }

  ngAfterContentInit(): void {
  }
}
