import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'dateTime',
  standalone: true,
})
export class DateTimePipe implements PipeTransform {

  transform(value: DateTime, format: string = 'default'): string {
    switch (format) {
      case 'short':
        return value.toLocaleString(DateTime.DATE_SHORT);
      case 'simple':
        return value.toLocaleString(DateTime.TIME_SIMPLE);
      default:
        return value.toLocaleString(DateTime.DATETIME_SHORT);
    }
  }

}
