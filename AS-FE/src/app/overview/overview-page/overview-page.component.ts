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

  filterSector: string;
  filterAm: string;
  filterTm: string;

  constructor(@Inject('IApiService') private apiService: IApiService,
              @Inject('FilterService') private filterService: FilterService) { }

  ngOnInit() {
    this.apiService.getAccounts().subscribe(e => this.accounts = e);
    this.filterService.subscribeToSubject(this);
  }

  notify(selector: string, change: string) {
    if (selector.toLowerCase() === 'Sector') {
      this.filterSector = change;
    } else if (selector.toLowerCase() === 'am') {
      this.filterAm = change;
    } else if (selector.toLowerCase() === 'tm') {
      this.filterTm = change;
    } else if (selector.toLowerCase() === 'all' && change.toLowerCase() === 'reset') {
      this.filterSector = '';
      this.filterAm = '';
      this.filterTm = '';
    }
  }
}
