export class Account {
    name: string;
    segment: string;
    sector: string;
    am: string;
    tm: string;
    hrProxy: string;
    nrOfPersons: number;
    links: {
        wiki: string;
        powerbi: string;
        beehive: string;
        targetprocess: string;
    };
    history: {
        lastReviewed: Date;
        moments: [{
            description: string;
            date: Date;
        }];
    }
    barometer: {
        partnership: string;
        portfolio: string;
        projects: string;
        people: string;
        profitability: string;
        potentialGrowth: string;
    };
    logo: string;
}