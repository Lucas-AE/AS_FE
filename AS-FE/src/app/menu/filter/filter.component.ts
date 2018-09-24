import { Component, OnInit, Input, Inject } from '@angular/core';
import { IApiService, IObserver } from '../../interfaces';
import { FilterService } from '../../filters/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input()
  selector: string;

  selected: string;

  options: string[];

  constructor(@Inject('IApiService') private apiService: IApiService,
    @Inject('FilterService') private filterService: FilterService) { }

  ngOnInit() {
    this.apiService.getFilterItems(this.selector).subscribe(e => this.options = e);
    this.selected = this.selector;
  }

  change(option: string) {
    this.selected = option;
    this.filterService.onchange(this.selector, option);
  }
}
