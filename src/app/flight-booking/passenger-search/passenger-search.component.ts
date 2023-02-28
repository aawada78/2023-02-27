import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Passenger } from './passenger';
import { PassengerService } from './passenger.service';

@Component({
  selector: 'app-passenger-search',
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.scss']
})
export class PassengerSearchComponent {
  firstname = '';
  name = 'Smith';
  passengerList$: Observable<Passenger[]> = of([]);
  selectedPassenger: Passenger | undefined;

  constructor(private passengerService: PassengerService) {}

  load(): void {
    this.passengerList$ = this.passengerService.find(this.name, this.firstname);
  }

  toggleSelection(p: Passenger) {
    this.selectedPassenger = p;
  }
}
