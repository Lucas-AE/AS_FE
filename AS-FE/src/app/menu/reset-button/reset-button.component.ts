import { Component, OnInit, Inject } from '@angular/core';
import { FilterService } from '../../filters/filter.service';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.css']
})
export class ResetButtonComponent implements OnInit {

  constructor(@Inject('FilterService') private filterService: FilterService) { }

  ngOnInit() {
  }

  onClick() {
    console.log('Click');
    this.filterService.onchange('All', 'Reset');
  }

}
