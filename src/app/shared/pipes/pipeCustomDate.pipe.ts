import { Pipe, PipeTransform } from '@angular/core';
import { LangService } from '../services/lang.service';
import { Lang } from '../models/Lang';
import * as moment from 'moment';

@Pipe({
  name: 'customDate',
  pure: false,
})
export class CustomDatePipe implements PipeTransform {
  currentLanguage!: Lang;

  constructor(private langService: LangService) {
    this.langService.currentLanguage$.subscribe((currentLanguage) => {
      this.currentLanguage = currentLanguage;
    });
  }

  transform(date: string | Date, withOutDay?: boolean): string {
    let dateObject: Date;
    if (typeof date === 'string' && !date.includes('T')) {
      dateObject = moment(date).startOf('day').toDate();
    } else {
      dateObject = typeof date === 'string' ? new Date(date) : date;
    }

    const format = this.getDateFormatForLanguage(this.currentLanguage.code, withOutDay);

    if (withOutDay) {
      return this.formatMonthYear(dateObject, format);
    }

    const formattedDate = moment(dateObject).format(format);
    return formattedDate;
  }

  formatMonthYear(date: Date, format: string): string {
    if (!date) {
      return '';
    }
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = (date.getFullYear()).toString().slice(2);
    return format.replace('MM', month).replace('YY', year);
  }

  private getDateFormatForLanguage(language: string, withOutDay?: boolean): string {
    switch (language) {
      case 'es':
        return !withOutDay ? 'DD/MM/YYYY' : 'MM/YY';
      case 'pt':
        return !withOutDay ? 'DD/MM/YYYY' : 'MM/YY';
      case 'en':
        return !withOutDay ? 'MM/DD/YYYY' : 'MM/YY';
      default:
        return !withOutDay ? 'MM/DD/YYYY' : 'MM/YY';
    }
  }
}
