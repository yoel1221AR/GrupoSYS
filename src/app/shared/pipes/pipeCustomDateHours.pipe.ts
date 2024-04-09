import { Pipe, PipeTransform } from '@angular/core';
import { LangService } from '../services/lang.service';
import { Lang } from '../models/Lang';

@Pipe({
  name: 'customDateHours',
})
export class CustomDateHoursPipe implements PipeTransform {
  currentLanguage!: Lang;

  constructor(private langService: LangService) {
    this.langService.currentLanguage$.subscribe((currentLanguage) => {
      this.currentLanguage = currentLanguage;
    });
  }

  transform(date: string|Date): string {
    const dateObject = typeof date === 'string' ? new Date(date) : date;
    const format = this.getDateFormatForLanguage(this.currentLanguage.code);
    return this.formatDate(dateObject, format);
  }

  formatDate(date: Date | string, format: string): string {
    const transformedToDate = new Date(date);
    const month = (transformedToDate.getMonth() + 1)
      .toString()
      .padStart(2, '0');
    const day = transformedToDate.getDate().toString().padStart(2, '0');
    const year = transformedToDate.getFullYear().toString();
    let hours = transformedToDate.getHours().toString().padStart(2, '0');
    const minutes = transformedToDate.getMinutes().toString().padStart(2, '0');

    const ampm = hours >= '12' ? 'pm' : 'am';

    if (format.includes('a')) {
      hours = (parseInt(hours, 10) % 12 || 12).toString().padStart(2, '0');
    }

    return format
      .replace('dd', day)
      .replace('MM', month)
      .replace('yyyy', year)
      .replace('hh', hours)
      .replace('mm', minutes)
      .replace('a', ampm)
      .replace(/\b(\/)\b/g, '/');
  }

  private getDateFormatForLanguage(language: string): string {
    switch (language) {
      case 'es':
        return 'dd/MM/yyyy - hh:mm hs';
      case 'pt':
        return 'dd/MM/yyyy - hh:mm hs';
      case 'en':
        return 'MM/dd/yyyy - hh:mm hrs';
      default:
        return 'MM/dd/yyyy - hh:mm a';
    }
  }

  // transform(date: string): any {
  //   if (this.currentLanguage.code === 'es') {
  //     return this.formatDateToSpanish(date);
  //   } else if (this.currentLanguage.code === 'en') {
  //     return this.formatDateToEnglish(date);
  //   } else if (this.currentLanguage.code === 'pt') {
  //     return this.formatDateToPortuguese(date);
  //   }
  //   return this.formatDateToEnglish(date);
  // }

  // formatDateToSpanish(date: string | Date): string {
  //   const spanishMonths: string[] = [
  //     'enero',
  //     'febrero',
  //     'marzo',
  //     'abril',
  //     'mayo',
  //     'junio',
  //     'julio',
  //     'agosto',
  //     'septiembre',
  //     'octubre',
  //     'noviembre',
  //     'diciembre',
  //   ];

  //   const jsDate = new Date(date);
  //   const day = jsDate.getDate();
  //   const month = spanishMonths[jsDate.getMonth()];
  //   const year = jsDate.getFullYear();
  //   const hours = jsDate.getHours();
  //   const minutes = jsDate.getMinutes();

  //   return `${day} ${month} ${year} ${hours.toString().padStart(2, '0')}:${minutes
  //     .toString()
  //     .padStart(2, '0')}`;
  // }

  // formatDateToEnglish(date: string | Date): string {
  //   const jsDate = new Date(date);
  //   const day = jsDate.getDate();
  //   const month = jsDate.toLocaleString('en-US', { month: 'long' });
  //   const year = jsDate.getFullYear();
  //   const hours = jsDate.getHours();
  //   const minutes = jsDate.getMinutes();

  //   return `${day} ${month} ${year} at ${hours.toString().padStart(2, '0')}:${minutes
  //     .toString()
  //     .padStart(2, '0')}`;
  // }

  // formatDateToPortuguese(date: string | Date): string {
  //   const portugueseMonths: string[] = [
  //     'janeiro',
  //     'fevereiro',
  //     'março',
  //     'abril',
  //     'maio',
  //     'junho',
  //     'julho',
  //     'agostho',
  //     'setembro',
  //     'outubro',
  //     'novembro',
  //     'dezembro',
  //   ];

  //   const jsDate = new Date(date);
  //   const day = jsDate.getDate();
  //   const month = portugueseMonths[jsDate.getMonth()];
  //   const year = jsDate.getFullYear();
  //   const hours = jsDate.getHours();
  //   const minutes = jsDate.getMinutes();

  //   return `${day} ${month} ${year} ${hours.toString().padStart(2, '0')}:${minutes
  //     .toString()
  //     .padStart(2, '0')}`;
  // }
}
