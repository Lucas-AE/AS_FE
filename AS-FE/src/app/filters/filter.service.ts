import { Injectable } from '@angular/core';
import { ISubject, IObserver } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FilterService implements ISubject {
  private observers: IObserver[] = [];

    onchange(selector: string, change: string) {
        this.observers.forEach(obs => {
            obs.notify(selector, change);
        });
    }

    subscribeToSubject(observer: IObserver) {
        this.observers.push(observer);
    }
}
