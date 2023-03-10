import { Routes } from '@angular/router';
import { BookingHistoryComponent } from './booking-history/booking-history.component';

export const CUSTOMER_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'booking-history',
    pathMatch: 'full'
  },
  {
    path: 'booking-history',
    component: BookingHistoryComponent
  }
];
