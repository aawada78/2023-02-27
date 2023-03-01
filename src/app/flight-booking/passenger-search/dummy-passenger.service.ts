import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Passenger } from './passenger';
import { PassengerService } from './passenger.service';

@Injectable()
export class DummyPassengerService implements PassengerService {
  private url = 'http://demo.angulararchitects.io/api-dummy/passenger';
  constructor(private http: HttpClient) {
    console.log('Dummy Passenger Service', this.url);
  }

  find(name: string, firstname: string): Observable<Passenger[]> {
    return of([
      { id: 2957, name: 'Smith', firstName: 'Emma', bonusMiles: 112504, passengerStatus: '😉', flightBookings: [] },
      { id: 2981, name: 'Smith', firstName: 'Mia', bonusMiles: 81694, passengerStatus: 'B', flightBookings: [] },
      { id: 3005, name: 'Smith', firstName: 'Hanna', bonusMiles: 440712, passengerStatus: 'A', flightBookings: [] }
    ]);
  }
}
