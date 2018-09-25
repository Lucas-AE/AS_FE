import { Component, Inject, OnInit } from '@angular/core';
import { FilterService } from '../../filters/filter.service';
import { IApiService, IObserver } from '../../interfaces';
import { AE_Account } from '../../models/ae_account';


@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit, IObserver {

  accounts: AE_Account[];
  filter: string;

  constructor(@Inject('IApiService') private apiService: IApiService,
              @Inject('FilterService') private filterService: FilterService) { }

  ngOnInit() {
    this.apiService.getAccounts().subscribe(e => this.accounts = e);
    this.filterService.subscribeToSubject(this);
  }

  notify(selector: string, change: string) {
    if (selector === 'Sector') {
      this.filter = change;
    }
  }
}
