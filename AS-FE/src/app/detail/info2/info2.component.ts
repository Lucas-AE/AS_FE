import { Component, OnInit, Input } from '@angular/core';
import { AE_Account } from '../../models/ae_account';

@Component({
  selector: 'app-info2',
  templateUrl: './info2.component.html',
  styleUrls: ['./info2.component.css']
})
export class Info2Component implements OnInit {

  @Input()
  account: AE_Account;

  constructor() { }

  ngOnInit() {
  }

}
