import { Component, OnInit, Input } from '@angular/core';
import { AE_Account } from '../../models/ae_account';

@Component({
  selector: 'app-barometer',
  templateUrl: './barometer.component.html',
  styleUrls: ['./barometer.component.css']
})
export class BarometerComponent implements OnInit {

  @Input()
  account: AE_Account;
  chartData: {name: string, value: number}[];
  colorScheme = {
    domain: ['#FB8B24', '#EAC435', '#650D1B','#0E1428', '#FFA987', '#7B9E89']
  };

  constructor() { }

  ngOnInit() {
    /**
    console.log(this.account);
    **/
    this.chartData = [
      {
        name: "Partnership",
        value: this.mapToChartData(this.account.barometer.partnership)
      },
      {
        name: "Portfolio",
        value: this.mapToChartData(this.account.barometer.portfolio)
      },
      {
        name: "Projects",
        value: this.mapToChartData(this.account.barometer.projects)
      },
      {
        name: "People",
        value: this.mapToChartData(this.account.barometer.people)
      },
      {
        name: "Profitability",
        value: this.mapToChartData(this.account.barometer.profitability)
      },
      {
        name: "Potential Growth",
        value: this.mapToChartData(this.account.barometer.potentialGrowth)
      }
    ]
  }

  mapToChartData(status: string): number {
    const scores = [
      {key: "OK", score: 3},
      {key: "Middelmatig", score: 2},
      {key: "Helemaal niet OK", score: 1}
    ]

    return scores.find(x => x.key === status).score;
  }

}
