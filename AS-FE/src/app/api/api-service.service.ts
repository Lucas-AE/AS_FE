import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiService } from '../interfaces';
import { AE_Account } from '../models/ae_account';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService implements IApiService {
  getFilterItems(selector: string): Observable<string[]> {
    throw new Error("Method not implemented.");
  }
  getAllSectors(): Observable<string[]> {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  getAccounts(): Observable<AE_Account[]> {
    return null;
  }

  getAccount(accountName: string): Observable<AE_Account> {
    return null;
  }
}
