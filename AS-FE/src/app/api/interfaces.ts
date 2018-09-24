import { Observable } from "rxjs";
import { AE_Account } from "../models/ae_account";

export interface IApiService {
    getAccounts(): Observable<AE_Account[]>;
}
