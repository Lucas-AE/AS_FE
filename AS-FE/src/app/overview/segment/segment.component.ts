import { Component, OnInit, Input, Inject } from '@angular/core';
import { AE_Account } from '../../models/ae_account';
import { IApiService, IObserver } from '../../interfaces';
import { getAccountsInSegment } from '../../libs/account-operations';
import { FilterService } from '../../filters/filter.service';

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

  constructor() { }

  ngOnInit() { }
}