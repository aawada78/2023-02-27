// src/app/flight-booking/flight-booking.routes.ts

import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';

// Diesen Import hinzufügen
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { AuthGuard } from '../shared/guards/auth.guard';
import { FlightBookingComponent } from './flight-booking.component';
import { CanDeactivateComponentGuard } from '../shared/guards/flights.guard';
import { FlightResolver } from './flight-resolver';

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    component: FlightBookingComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'flight-search',
        component: FlightSearchComponent
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent
      },
      {
        path: 'flight-edit/:id',
        component: FlightEditComponent,
        canDeactivate: [CanDeactivateComponentGuard],
        resolve: {
          flight: FlightResolver
        }
      }
    ]
  }
];
