import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { RouterModule } from '@angular/router';
import { CUSTOMER_ROUTES } from './customer.routing';
import { SharedModule } from '../shared/shared.module';
import { OutletComponent } from './outlet/outlet.component';
import { FlightsTableComponent } from './flights-table/flights-table.component';

@NgModule({
  declarations: [BookingHistoryComponent, OutletComponent, FlightsTableComponent],
  imports: [CommonModule, RouterModule.forChild(CUSTOMER_ROUTES), SharedModule]
})
export class CustomerModule {}
