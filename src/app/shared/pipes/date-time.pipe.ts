import { Pipe, PipeTransform } from '@angular/core';
import moment from 'jalali-moment';

@Pipe({
  name: 'jalaliDateTimePipe'
})
export class JalaliDateTimePipe implements PipeTransform {
  transform(value: string): string {
    const m = moment(value, 'YYYY-MM-DDTHH:mm:ss.SSSSSSSZ').locale('fa');
    return m.format('YYYY/M/D HH:mm:ss');
    // return m.format('HH:mm:ss');
  }
}
