import { Component, OnInit, Inject } from '@angular/core';
import { IApiService } from '../../interfaces';
import { AE_Account } from '../../models/ae_account';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  account: AE_Account;

  constructor(@Inject('IApiService') private apiService: IApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    let accountName = this.route.snapshot.params['account_name'];
    console.log(accountName)
    this.apiService.getAccount(accountName).subscribe(e => this.account = e);
  }
}
