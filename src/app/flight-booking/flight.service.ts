// src/app/default-flight.service.ts

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { share, shareReplay } from 'rxjs/operators';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  // We will refactor this to an observable in a later exercise!
  flights: Flight[] = [];

  constructor(private http: HttpClient) {}

  load(from: string, to: string): void {
    // const find$ = this.find(from, to).pipe(share());
    const find$ = this.find(from, to).pipe(shareReplay({ bufferSize: 1, refCount: true }));

    find$.subscribe({
      next: (flights) => {
        this.flights = flights;
        console.log('1st subscriber');
      },
      error: (err) => {
        console.error('error', err);
      },
      complete: () => console.log('1st complete')
    });

    // setTimeout(() => {
    //   find$.subscribe({
    //     next: (flights) => {
    //       this.flights = flights;
    //       console.log('2nd subscriber');
    //     },
    //     error: (err) => {
    //       console.error('error', err);
    //     },
    //     complete: () => console.log('2nd complete')
    //   });

    //   find$.subscribe({
    //     next: (flights) => {
    //       this.flights = flights;
    //       console.log('3rd subscriber');
    //     },
    //     error: (err) => {
    //       console.error('error', err);
    //     },
    //     complete: () => console.log('3rd complete')
    //   });

    //   setTimeout(() => {
    //     find$.subscribe({
    //       next: (flights) => {
    //         this.flights = flights;
    //         console.log('4th subscriber');
    //       },
    //       error: (err) => {
    //         console.error('error', err);
    //       },
    //       complete: () => console.log('4th complete')
    //     });

    //     find$.subscribe({
    //       next: (flights) => {
    //         this.flights = flights;
    //         console.log('5th subscriber');
    //       },
    //       error: (err) => {
    //         console.error('error', err);
    //       },
    //       complete: () => console.log('5th complete')
    //     });
    //   }, 2000);
    // }, 2000);
  }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = new HttpParams().set('from', from).set('to', to);

    return this.http.get<Flight[]>(url, { headers, params });
  }

  findById(id: string): Observable<Flight> {
    const url = 'http://www.angular.at/api/flight';

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = new HttpParams().set('id', id);

    return this.http.get<Flight>(url, { headers, params });
  }

  delay(): void {
    // Old implementation -> not immutable
    // const date = new Date(this.flights[0].date);
    // date.setTime(date.getTime() + 1000 * 60 * 15);
    // this.flights[0].date = date.toISOString();

    // New implementation -> immutable
    const oldFlight = this.flights[0];
    const oldDate = new Date(oldFlight.date);

    const newDate = new Date(oldDate.getTime() + 15 * 1000 * 60);
    const newFlight = { ...oldFlight, date: newDate.toISOString() };
    // const newFlights = [newFlight, ...this.flights.slice(1)];
    // this.flights = newFlights;
    this.flights[0] = newFlight;
  }
}
