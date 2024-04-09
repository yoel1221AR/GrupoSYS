import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'transformDataTable'
})
export class TransformDataTablePipe implements PipeTransform {

  constructor(private datePipe : DatePipe, private translate: TranslateService){}

  transform(data: any, key : string, keyTranslate : string): unknown {
    if(key.includes("Date")){
      return this.datePipe.transform(data, 'dd/MM/yy')
    }
    else if(key.includes("invoiceNumber") || key.includes("renditionNumber")){
      return '# ' + data;
    }
    else if(this.isAmount(data) && !key.includes("id") ){
      return '$ ' + data;
    }
    else{
      const dataTranslate = this.getTranslate(data+'',keyTranslate);
      return dataTranslate ? dataTranslate : data;
    }
  }

  private isDate(data : any) : boolean{
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const date = new Date(data);
    return !isNaN(date.getTime()) && isNaN(data) && dateRegex.test(data);
  }

  private isAmount(data : any) : boolean{
    return !isNaN(data) && typeof(data) != "string";
  }

  private getTranslate(key : string, keyTranslate : string) : string | undefined{
    const fullKey : string = keyTranslate + '.' + key.toUpperCase();
    const translate : string = this.translate.instant(fullKey);
    return translate == fullKey ? undefined : translate;
  }


}
