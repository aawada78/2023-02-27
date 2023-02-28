import { Component, Input, OnInit } from '@angular/core';
import { Flight } from 'src/app/flight-booking/flight';

@Component({
  selector: 'app-flights-table',
  templateUrl: './flights-table.component.html',
  styleUrls: ['./flights-table.component.scss']
})
export class FlightsTableComponent implements OnInit {
  @Input() flights: Array<Flight> = [];

  constructor() {}

  ngOnInit(): void {}
}
