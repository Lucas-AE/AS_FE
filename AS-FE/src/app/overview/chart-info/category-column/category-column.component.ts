import { Component, Input, OnInit } from '@angular/core';
import { AE_Account } from '../../../models/ae_account';

@Component({
  selector: 'app-category-column',
  templateUrl: './category-column.component.html',
  styleUrls: ['./category-column.component.css']
})
export class CategoryColumnComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  state: string;
  @Input()
  category: string;
  @Input()
  accountList: AE_Account[];

  constructor() { }

  ngOnInit() {
  }

}
