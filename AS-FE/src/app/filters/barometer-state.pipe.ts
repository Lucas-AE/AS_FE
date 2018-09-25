import { Pipe, PipeTransform } from '@angular/core';
import { AE_Account } from '../models/ae_account';

@Pipe({
  name: 'barometerState'
})
export class BarometerStatePipe implements PipeTransform {

  transform(accountList: AE_Account[], barometerField: string, barometerFieldState): any {
    return accountList.filter(account => account.barometer[barometerField] === barometerFieldState);
  }

}
