import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from './components/chart/chart.component';
import { TableComponent } from './components/table/table.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { CustomDatePipe } from './pipes/pipeCustomDate.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { CardTableComponent } from './components/card-table/card-table.component';
import { TransformDataTablePipe } from './pipes/transform-data-table.pipe';
import { AmountFormatPipePipe } from './pipes/amount-format-pipe.pipe';
import { MatDialogService } from './services/mat-dialog.service';
import { CurrencySymbolPipe } from './Utils/currency-simbol-pipe';
import { LastFourDigitsPipe } from './pipes/lastFourDigits.pipe';
import { CustomIconColorComponent } from './components/custom-icon-color/custom-icon-color.component';
import { FormsModule } from '@angular/forms';
import { LangSelectorComponent } from './components/langSelector/langSelector.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SafePipe } from './pipes/safe.pipe';
import { CustomDateHoursPipe } from './pipes/pipeCustomDateHours.pipe';
import { FirstLetterPipe } from './Utils/firstDigit-pipe';

@NgModule({
  declarations: [
    CustomDateHoursPipe,
    ChartComponent,
    TableComponent,
    PaginatorComponent,
    CustomDatePipe,
    CardTableComponent,
    TransformDataTablePipe,
    AmountFormatPipePipe,
    CurrencySymbolPipe,
    LastFourDigitsPipe,
    FirstLetterPipe,
    CustomIconColorComponent,
    LangSelectorComponent,
    LoaderComponent,
    SafePipe,
  ],
  imports: [CommonModule, MaterialModule, TranslateModule],
  providers: [TransformDataTablePipe, AmountFormatPipePipe, MatDialogService],
  exports: [
    MaterialModule,
    ChartComponent,
    TableComponent,
    PaginatorComponent,
    ReactiveFormsModule,
    CustomDatePipe,
    CardTableComponent,
    AmountFormatPipePipe,
    CurrencySymbolPipe,
    LastFourDigitsPipe,
    FirstLetterPipe,
    CustomIconColorComponent,
    FormsModule,
    LangSelectorComponent,
    LoaderComponent,
    SafePipe,
    CustomDateHoursPipe,
  ],
})
export class SharedModule {}
