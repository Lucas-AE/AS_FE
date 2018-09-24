import { AE_Account } from "../models/ae_account";

export function getAmountInSegment(accounts: AE_Account[], segment: string) {
    return getAccountsInSegment(accounts, segment).length;
}

export function getAccountsInSegment(accounts: AE_Account[], segment: string) {
    console.log('---- START ----');

    if (!accounts) {
        console.log('No accounts..');
        return accounts;
    }

    for(let account of accounts) {
        console.log(`${account.segment} -- ${segment}`);
    }

    return accounts.filter(e => e.segment.toLowerCase() === segment.toLowerCase());
}