import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { FinsuiteRoutingModule } from './finsuite-routing.module';
import { ViewsComponent } from './views/views-general/views.component';
import { CarouselModule } from 'primeng/carousel';
import { MatTreeModule } from '@angular/material/tree';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Store, StoreModule } from '@ngrx/store';
import { SkeletonModule } from 'primeng/skeleton';
import { CurrencySymbolPipe } from '../shared/Utils/currency-simbol-pipe';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ChartModule } from 'primeng/chart';
import { CustomDateHoursPipe } from '../shared/pipes/pipeCustomDateHours.pipe';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { CustomDatePipe } from '../shared/pipes/pipeCustomDate.pipe';
import { GalleriaModule } from 'primeng/galleria';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogConfig,
} from '@angular/material/dialog';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ModalComponent } from './components/modal/modal.component';
import { CardComponent } from './components/card/card.component';
import { ColumnsComponent } from './components/columns/columns.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ServiceComponent } from './components/service/service.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { CompanyComponent } from './components/company/company.component';
import { ClientsComponent } from './components/clients/clients.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ViewsComponent,
    SidebarComponent,
    ModalComponent,
    CardComponent,
    ColumnsComponent,
    AccordionComponent,
    ServiceComponent,
    HomeComponent,
    ContactComponent,
    CompanyComponent,
    ClientsComponent,
  ],
  imports: [
    MatSnackBarModule,
    MatBottomSheetModule,
    FinsuiteRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule,
    GalleriaModule,
    FormsModule,
    CarouselModule,
    MatCheckboxModule,
    SkeletonModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    ChartModule,
    MatTreeModule,
    MatTooltipModule,
  ],
  providers: [
    CustomDateHoursPipe,
    CustomDatePipe,
    TranslateService,
    CurrencySymbolPipe,
    Store,
  ],
})
export class FinsuiteModule {}
