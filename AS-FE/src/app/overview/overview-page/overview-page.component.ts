import { Component, OnInit, Inject } from '@angular/core';
import { IApiService } from '../../interfaces';
import { AE_Account } from '../../models/ae_account';


@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {

  accounts: AE_Account[];

  constructor(@Inject('IApiService') private apiService: IApiService) { }

  ngOnInit() {
    this.apiService.getAccounts().subscribe(e => this.accounts = e);
  }
}
