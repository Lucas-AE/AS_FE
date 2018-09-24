import { Pipe, PipeTransform } from '@angular/core';
import { AE_Account } from '../models/ae_account';

@Pipe({
  name: 'segment'
})
export class SegmentPipe implements PipeTransform {

  transform(items: AE_Account[], segment: string): AE_Account[] {
    if (!items || !segment) {
      return items;
    }

    return items.filter( item => item.segment && item.segment.toLowerCase() === segment.toLowerCase() );
  }

}
