import { Observable } from "rxjs";
import { AE_Account } from "../models/AE-account";

export interface IApiService {
    getAccounts(): Observable<AE_Account[]>;
}
