import { Component, OnInit, Input } from '@angular/core';
import { AE_Account } from '../../models/AE-account';

@Component({
  selector: 'app-segments-overview',
  templateUrl: './segments-overview.component.html',
  styleUrls: ['./segments-overview.component.css']
})
export class SegmentsOverviewComponent implements OnInit {

  @Input()
  accounts: AE_Account[];

  segments: string[] = ["Startup", "Scale-up", "Delivery", "Innovatief", "Tactisch", "Afbouw"];

  constructor() { }

  ngOnInit() { }
}
