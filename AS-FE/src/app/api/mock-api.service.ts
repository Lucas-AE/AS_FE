import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IApiService } from './interfaces';
import { accounts } from '../../data/db';
import { AE_Account, Links, Barometer, History, Moment } from '../models/ae_account';

@Injectable()
export class MockApiService implements IApiService {

  constructor() { }

  getAccounts(): Observable<AE_Account[]> {
    let output: AE_Account[] = [];
    accounts.map(e => {
      let links = new Links(e.links.wiki, e.links.powerbi, e.links.beehive, e.links.targetprocess);
      let barometer = new Barometer(e.barometer.partnership, e.barometer.portfolio, e.barometer.projects, e.barometer.people, e.barometer.profitability, e.barometer.potentialGrowth);

      let moments: Moment[] = [];
      if (e.history.moments) {
        e.history.moments.map(e => moments.push(new Moment(e.description, e.date)));
      }
      let history = new History(e.history.lastReviewed, moments);
      output.push(new AE_Account(e.name, e.segment, e.sector, e.am, e.tm, e.hrProxy, e.nrOfPersons, links, history, barometer, e.logo));
    });
    return of(output);
  }
}
