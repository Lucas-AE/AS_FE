import { Component, OnInit, Inject } from '@angular/core';
import { IApiService } from '../../interfaces';
import { AE_Account } from '../../models/ae_account';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  accounts: AE_Account[];
  kbc_account: AE_Account;

  constructor(@Inject('IApiService') private apiService: IApiService) { }

  ngOnInit() {
    this.apiService.getAccounts().subscribe(e => this.accounts = e);
    this.kbc_account = this.accounts.find(a => a.name == "KBC");
  }

}
