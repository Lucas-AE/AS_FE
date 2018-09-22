import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiService } from './interfaces';
import { AE_Account } from '../models/ae_account';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService implements IApiService {

  constructor() { }

  getAccounts(): Observable<AE_Account[]> {
    return null;
  }
}
