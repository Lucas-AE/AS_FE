import { Pipe, PipeTransform } from '@angular/core';
import { AE_Account } from '../models/ae_account';

@Pipe({
  name: 'tm'
})
export class TmPipe implements PipeTransform {

  transform(items: AE_Account[], tm: string): AE_Account[] {
    if (!items || !tm || tm.toLowerCase() === "tm") {
      return items;
    }

    return items.filter( item => item.tm && item.tm.toLowerCase() === tm.toLowerCase() );
  }

}
