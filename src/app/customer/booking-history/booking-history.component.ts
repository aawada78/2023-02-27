import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/flight-booking/flight';
import { OutletComponent } from '../outlet/outlet.component';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {
  flights: Flight[] = [
    { id: 1, from: 'Hamburg', to: 'Berlin', date: '2025-02-01T17:00+01:00' },
    { id: 2, from: 'Hamburg', to: 'Frankfurt', date: '2025-02-01T17:30+01:00' },
    { id: 3, from: 'Hamburg', to: 'Mallorca', date: '2025-02-01T17:45+01:00' }
  ];

  flights2: Flight[] = [
    { id: 4, from: 'Hamburg', to: 'Berlin', date: '2025-02-01T17:00+01:00' },
    { id: 5, from: 'Hamburg', to: 'Frankfurt', date: '2025-02-01T17:30+01:00' },
    { id: 6, from: 'Hamburg', to: 'Mallorca', date: '2025-02-01T17:45+01:00' }
  ];

  flights3: Flight[] = [
    { id: 7, from: 'Hamburg', to: 'Berlin', date: '2025-02-01T17:00+01:00' },
    { id: 8, from: 'Hamburg', to: 'Frankfurt', date: '2025-02-01T17:30+01:00' },
    { id: 9, from: 'Hamburg', to: 'Mallorca', date: '2025-02-01T17:45+01:00' }
  ];

  bla = {
    $implicit: 'Leute',
    content: 'Do this and that!!!',
    helplink: 'https://www.google.de'
  };

  outletComponent = OutletComponent;

  constructor() {}

  ngOnInit(): void {}

  delete() {
    console.log('Deleted!!!');
  }
}
