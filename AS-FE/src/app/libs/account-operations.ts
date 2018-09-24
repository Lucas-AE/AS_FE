import { AE_Account } from "../models/ae_account";

export function getAmountInSegment(accounts: AE_Account[], segment: string) {
    return getAccountsInSegment(accounts, segment).length;
}

export function getAccountsInSegment(accounts: AE_Account[], segment: string) {
    if (!accounts) {
        return accounts;
    }

    return accounts.filter(e => e.segment.toLowerCase() === segment.toLowerCase());
}

export function getSectors() {
    
}