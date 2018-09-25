import { Component, OnInit, Input } from '@angular/core';
import { AE_Account } from '../../models/ae_account';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input()
  account: AE_Account;

  constructor() { }

  ngOnInit() {
  }

}
