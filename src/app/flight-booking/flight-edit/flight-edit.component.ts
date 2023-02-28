// src/app/flight-booking/flight-edit/flight-edit.component.ts

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CanDeactivateComponent } from 'src/app/shared/guards/flights.guard';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightEditComponent implements OnInit, CanDeactivateComponent {
  id = 0;
  showDetails = false;
  deactivate = false;
  flight!: Flight;

  constructor(private route: ActivatedRoute) {}
  canDeactivate(): Observable<boolean> {
    return of(this.deactivate);
  }

  ngOnInit(): void {
    this.route.params.subscribe((p) => {
      this.id = p.id;
      this.showDetails = p.showDetails;
    });

    this.route.data.subscribe({
      next: (data) => {
        this.flight = data.flight;
      }
    });
  }
}
