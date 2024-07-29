import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekDayPipe'
})
export class WeekDayPipe implements PipeTransform {
  private weekDayMapping = {
    'Saturday': 'شنبه',
    'Sunday': 'یک‌شنبه',
    'Monday': 'دوشنبه',
    'Tuesday': 'سه‌شنبه',
    'Wednesday': 'چهارشنبه',
    'Thursday': 'پنج‌شنبه',
    'Friday': 'جمعه'
  };

  transform(value: string): string {
    return this.weekDayMapping[value as keyof typeof this.weekDayMapping] || value;
  }
}




