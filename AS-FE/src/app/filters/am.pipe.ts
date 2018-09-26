import { Pipe, PipeTransform } from '@angular/core';
import { AE_Account } from '../models/ae_account';

@Pipe({
  name: 'am'
})
export class AmPipe implements PipeTransform {

  transform(items: AE_Account[], am: string): AE_Account[] {
    if (!items || !am || am.toLowerCase() === "am") {
      return items;
    }

    return items.filter( item => item.am && item.am.toLowerCase() === am.toLowerCase() );
  }

}
