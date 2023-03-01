import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DefaultPassengerService } from './default-passenger.service';
import { DummyPassengerService } from './dummy-passenger.service';
import { Passenger } from './passenger';

@Injectable({
  providedIn: 'root',
  useFactory: (http: HttpClient) => {
    if (environment.production) {
      return new DefaultPassengerService(http);
    } else {
      return new DummyPassengerService(http);
    }
  },
  deps: [HttpClient]
})
export abstract class PassengerService {
  abstract find(name: string, firstname: string): Observable<Passenger[]>;
}
