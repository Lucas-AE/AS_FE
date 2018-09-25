import { Observable } from "rxjs";
import { AE_Account } from "./models/ae_account";

export interface IApiService {
    getAccounts(): Observable<AE_Account[]>;
    getAccount(accountName: string): Observable<AE_Account>;
    getFilterItems(selector: string): Observable<string[]>;
}

export interface IObserver {
    notify(selector:string, change: string);
}

export interface ISubject {
    onchange(selector: string, change: string);
    subscribeToSubject(observer: IObserver);
}
