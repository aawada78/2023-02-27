// src/app/flight-booking/flight-booking.module.ts

import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightBookingComponent } from './flight-booking.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { FormsModule } from '@angular/forms';
import { FlightResolver } from './flight-resolver';
import { PassengerService } from './passenger-search/passenger.service';
import { DefaultPassengerService } from './passenger-search/default-passenger.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { DummyPassengerService } from './passenger-search/dummy-passenger.service';

@NgModule({
  imports: [RouterModule.forChild(FLIGHT_BOOKING_ROUTES), FormsModule, SharedModule],
  declarations: [FlightSearchComponent, FlightCardComponent, PassengerSearchComponent, FlightBookingComponent, FlightEditComponent],
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
