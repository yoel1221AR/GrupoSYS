import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

import { TableEvent, ActionActive } from './Itable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  type!: 'business' | 'employee' | 'provider';
  tableHeads: any;
  historySorts: any[] = [];
  keyColumns: string[] = [];
  @Input() propertyOrder: string[] = [];
  @Input() data: any = [];
  @Input() actions: string[] = [];
  @Input() keyTranslate!: string;
  @Input() tableStyle: string = '';
  @Output() sort: EventEmitter<TableEvent> = new EventEmitter<TableEvent>();
  @Output() action: EventEmitter<TableEvent> = new EventEmitter<TableEvent>();
  @Input() actionsIf: ActionActive[] = [];

  constructor(
    private translate: TranslateService,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && !changes['data'].firstChange) {
      this.tableHeads = this.setTableHeads();
    }
  }

  ngOnInit(): void {
    this.tableHeads = this.setTableHeads();
    this.onLangChange();
  }

  onLangChange() {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.tableHeads = this.setTableHeads();
    });
  }

  private setTableHeads(): any {
    let headerArray = [];
    let translationMap: { [key: string]: string } = {};
    // Iterate through the properties in the desired order
    for (const key of this.propertyOrder) {
      const translate = this.getTranslate(key);
      
      if (translate) {

        headerArray.push(key);
        translationMap[key] = translate;
      }
    }
    this.keyColumns = headerArray;
    return translationMap;
  }

  private getTranslate(key: string): string | undefined {
    const fullKey: string = this.keyTranslate + '.' + key.toUpperCase();
    const translate: string = this.translate.instant(fullKey);
    return translate == fullKey ? undefined : translate;
  }

  onAction(action: string, dataField: any) {
    this.action.emit({ event: action, dataField });
  }

  onSort(event: Event, key: string) {
    const elementSort = (event.target as HTMLElement).firstElementChild
      ?.firstElementChild;
    const classListSort = elementSort?.classList;
    const hasUp = classListSort?.contains('up');
    const hasDown = classListSort?.contains('down');
    this.resetOtherSorts(elementSort);
    this.historySorts.push(elementSort);
    if (!(hasUp || hasDown)) {
      classListSort?.add('down');
      this.sort.emit({ event: 'desc', key });
    } else if (hasDown) {
      classListSort?.remove('down');
      classListSort?.add('up');
      this.sort.emit({ event: 'asc', key });
    } else if (hasUp) {
      classListSort?.remove('down', 'up');
      this.sort.emit({ event: 'clean', key });
    }
  }

  private resetOtherSorts(element: Element | null | undefined) {
    this.historySorts.forEach((sortElement: any) => {
      sortElement != element
        ? sortElement.classList.remove('up', 'down')
        : null;
    });
  }

  isActionSensitive(action: string, state: string) {
    let isSensitive = this.actionsIf.find((actionActive: ActionActive) => {
      return actionActive.action == action;
    });
    if (isSensitive) {
      return this.actionsIf.find((actionActive: ActionActive) => {
        return actionActive.state == state;
      });
    }
    return false;
  }

  getTooltipText(action: string, dataField: { isReported: boolean }): string {
    const tooltips: Record<string, string> = {
      report: dataField.isReported
        ? this.translate.instant('IP.ACTIONS_TOOLTIP.REPORTED')
        : this.translate.instant('IP.ACTIONS_TOOLTIP.REPORT'),
      edit: this.translate.instant('IP.ACTIONS_TOOLTIP.EDIT'),
      delete: this.translate.instant('IP.ACTIONS_TOOLTIP.DELETE'),
      import: this.translate.instant('IP.ACTIONS_TOOLTIP.IMPORT'),
      pay: this.translate.instant('IP.ACTIONS_TOOLTIP.PAY'),
      info: this.translate.instant('IP.ACTIONS_TOOLTIP.INFO'),
      file: this.translate.instant('IP.ACTIONS_TOOLTIP.FILE'),
      search: this.translate.instant('IP.ACTIONS_TOOLTIP.SEARCH'),
      comment: this.translate.instant('IP.ACTIONS_TOOLTIP.COMMENT'),
    };

    return tooltips[action] || '';
  }

  checkAction(dataField: any, action: string): any {
    let extension = '';
    let pointerEvents = 'all';

    if (action === 'report') {
      // Reported bills can always be reported again
      if (dataField.typeStatus === 'REPORTED') {
        extension = 'ed';
      }
      // This is checked by the backend
      else if (!dataField.reportable) {
        extension = '-grey';
        pointerEvents = 'none';
      }
    }
    else if (
      action === 'delete' &&
      // Checks wether it is a rendition or invoice
      // (a bill, cause there are other deletable entities)
      (dataField.invoiceNumber || dataField.renditionNumber) &&
      // As an employee or provider, I can only delete the pending ones
      ((
        (
          this.type === 'employee' ||
          this.type === 'provider'
        ) &&
        dataField.typeStatus !== 'PENDING_APROVAL'
      // As an enterprise, only the paid ones
      ) || (
          this.type === 'business' &&
          dataField.typeStatus !== 'PAID'
        ))
    ) {
      extension = '-grey';
      pointerEvents = 'none'
    }
    else if (
      // I can only pay approved, reported or overdue bills
      action === 'pay' && ((
        dataField.typeStatus !== 'APPROVE' &&
        dataField.typeStatus !== 'REPORTED' &&
        dataField.typeStatus !== 'OVERDUE'
      ) ||
        // TODO after there's a renditions' delete endpoint
        dataField.renditionNumber)
    ) {
      extension = '-grey';
      pointerEvents = 'none'
    }

    return {
      icon: 'url(assets/img/table/' + action + extension + '.svg)',
      pointerEvents
    }
  }

  tableStyles: any = {
    invopay: {
      dataHead: {
        'background-color': '#F9FAFC',
        color: '#a9adba',
        'font-size': 'max(min(1vw, 0.75rem), 0.5rem)',
        'font-weight': '500',
        'border-top': '1px solid #f0f3f8',
        'border-bottom': '1px solid #f0f3f8',
        height: '2.5rem',
      },
      dataRow: {
        'background-color': '#FFFFFF',
        color: '#54617A',
        'font-size': 'max(min(1vw, 0.875rem), 0.7rem)',
        'font-weight': '400',
        'border-top': '1px solid #EFF3F9',
        'border-bottom': '1px solid #EFF3F9',
        height: '4.125rem',
      },
    },
  };
}
