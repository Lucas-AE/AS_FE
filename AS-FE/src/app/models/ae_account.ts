export class AE_Account {
  name: string;
  segment: string;
  sector: string;
  am: string;
  tm: string;
  hrProxy: string;
  nrOfPersons: number;
  links: Links;
  history: History;
  barometer: Barometer;
  logo: string;

  constructor(name: string, segment: string, sector: string, am: string, tm: string, hrProxy: string, nrOfPersons: number, links: Links, history: History, barometer: Barometer, logo: string) {
      this.name = name;
      this.segment = segment;
      this.sector = sector;
      this.am = am;
      this.tm = tm;
      this.hrProxy = hrProxy;
      this.nrOfPersons = nrOfPersons;
      this.links = links;
      this.history = history;
      this.barometer = barometer;
      this.logo = logo;
  }
}

export class Links {
  wiki: string;
  powerbi: string;
  beehive: string;
  targetprocess: string;

  constructor(wiki: string, powerbi: string, beehive: string, targetprocess: string) {
      this.wiki = wiki;
      this.powerbi = powerbi;
      this.beehive = beehive;
      this.targetprocess = targetprocess;
  }
}

export class History {
  lastReviewed: string;
  moments: Moment[];

  constructor(lastReviewed: string, moments: Moment[]) {
      this.lastReviewed = lastReviewed;
      this.moments = moments;
  }
}

export class Moment {
  description: string;
  date: string;

  constructor(description: string, date: string) {
      this.description = description;
      this.date = date;
  }
}

export class Barometer {
  partnership: string;
  portfolio: string;
  projects: string;
  people: string;
  profitability: string;
  potentialGrowth: string;

  constructor(partnership: string, portfolio: string, projects: string, people: string, profitability: string, potentialGrowth: string) {
      this.partnership = partnership;
      this.portfolio = portfolio;
      this.people = people;
      this.profitability = profitability;
      this.potentialGrowth = potentialGrowth;
  }
}