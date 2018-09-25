import { Component, Input } from '@angular/core';
import { AE_Account } from '../../models/ae_account';

@Component({
  selector: 'app-segments-overview',
  templateUrl: './segments-overview.component.html',
  styleUrls: ['./segments-overview.component.css']
})
export class SegmentsOverviewComponent {

  @Input()
  accounts: AE_Account[];

  segments: string[] = ["Startup", "Scale-up", "Delivery", "Innovatief", "Tactisch", "Afbouw"];

  constructor() { }

}
