import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  selected: string = "Sector";
  options: string[] = ["Finance", "Utilities", "West", "East"];

  constructor() { }

  ngOnInit() {
  }

  change(option: string) {
    this.selected = option;
  }
}
