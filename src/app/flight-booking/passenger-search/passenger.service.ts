import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Passenger } from './passenger';

@Injectable({ providedIn: 'root' })
export class PassengerService {
  constructor(private http: HttpClient) {}

  find(name: string, firstname: string): Observable<Passenger[]> {
    const url = 'http://demo.angulararchitects.io/api/passenger';

    const params = new HttpParams().set('name', name).set('firstname', firstname);
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Passenger[]>(url, { params, headers });
  }
}
