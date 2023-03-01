// src/app/flight-booking/flight-booking.module.ts

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightBookingComponent } from './flight-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightResolver } from './flight-resolver';

@NgModule({
  imports: [RouterModule.forChild(FLIGHT_BOOKING_ROUTES), FormsModule, ReactiveFormsModule, SharedModule],
  declarations: [FlightSearchComponent, FlightCardComponent, PassengerSearchComponent, FlightBookingComponent],
  exports: [FlightSearchComponent],
  providers: [
    FlightResolver
    // {
    //   provide: PassengerService,
    //   useClass: DefaultPassengerService
    // }
    // {
    //   provide: PassengerService,
    //   useFactory: (http: HttpClient) => {
    //     if (environment.production) {
    //       return new DefaultPassengerService(http);
    //     } else {
    //       return new DummyPassengerService(http);
    //     }
    //   },
    //   deps: [HttpClient]
    // }
  ]
})
export class FlightBookingModule {}
