import { AE_Account } from "../models/AE-account";

export function getAmountInSegment(accounts: AE_Account[], segment: string) {
    return accounts.filter(e => e.segment === segment).length;
}