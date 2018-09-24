import { Component, OnInit, Input, Inject } from '@angular/core';
import { AE_Account } from '../../models/ae_account';
import { FilterService } from '../../filters/filter.service';
import { IObserver, ISubject } from '../../interfaces';

@Component({
  selector: 'app-segments-overview',
  templateUrl: './segments-overview.component.html',
  styleUrls: ['./segments-overview.component.css']
})
export class SegmentsOverviewComponent implements OnInit, IObserver {

  @Input()
  accounts: AE_Account[];

  filter: string;

  segments: string[] = ["Startup", "Scale-up", "Delivery", "Innovatief", "Tactisch", "Afbouw"];

  constructor(@Inject('FilterService') private filterService: FilterService) { }

  ngOnInit() {
    this.filterService.subscribeToSubject(this);
  }

  notify(selector: string, change: string) {
    if (selector === 'Sector') {
      this.filter = change;
    }
  }
}
