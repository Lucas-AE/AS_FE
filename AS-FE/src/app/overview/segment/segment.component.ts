import { Component, OnInit, Input, Inject } from '@angular/core';
import { AE_Account } from '../../models/AE-account';
import { IApiService } from '../../api/interfaces';
import { getAccountsInSegment } from '../../libs/account-operations';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  accounts: AE_Account[];

  constructor(@Inject('IApiService') private apiService: IApiService) { }

  ngOnInit() {
    this.accounts = getAccountsInSegment(this.accounts, this.name);
  }
}