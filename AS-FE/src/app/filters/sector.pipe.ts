import { Pipe, PipeTransform } from '@angular/core';
import { AE_Account } from '../models/ae_account';

@Pipe({
  name: 'sector'
})
export class SectorPipe implements PipeTransform {

  transform(items: AE_Account[], sector: string): AE_Account[] {
    if (!items || !sector || sector.toLowerCase() === "sector") {
      return items;
    }

    return items.filter( item => item.sector && item.sector.toLowerCase() === sector.toLowerCase() );
  }

}
