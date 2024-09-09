import { Pipe, PipeTransform } from '@angular/core';
import moment from 'jalali-moment';

@Pipe({
  name: 'userTimePipe'
})
export class UserTimePipePipe implements PipeTransform {

  transform(value: string): string {
    const m = moment(value, 'YYYY-MM-DDTHH:mm:ss.SSSSSSSZ').locale('fa');
    return m.format('HH:mm:ss'); // فقط زمان 
  }

}
