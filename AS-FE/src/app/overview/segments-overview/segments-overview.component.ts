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
  definitions: string[] = ["Eerste opdracht bij nieuwe klant", "Geloof in evolutie naar delivery", "Strategisch partnership en intense lange termijn samenwerking",
   "Geen delivery potentieel maar AE kan werken op een innovatief project en reference case uitbouwen", "Geen delivery potentieel maar AE is actief omwille van tactische redenen (referentie klan,persoonlijk fit,benchoptimalisatie,relatie,..)", "Consultants worden gecontroleerd uitgefaseerd tvv andere klanten."];

  constructor() { }

}
