import { Component, OnInit, Inject } from '@angular/core';
import { IApiService } from '../../api/interfaces';
import { map } from 'rxjs/operators';
import { AE_Account } from '../../models/AE-account';


@Component({
  selector: 'app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.css']
})
export class OverviewPageComponent implements OnInit {

  constructor(@Inject('IApiService') private apiService: IApiService) { }

  ngOnInit() {
    this.apiService.getAccounts().subscribe(e => console.log(e));
  }
}
