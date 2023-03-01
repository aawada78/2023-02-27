import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Passenger } from './passenger';
import { PassengerService } from './passenger.service';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function passengerValidator(c: AbstractControl): ValidationErrors {
  if (c.value && c.value.length > 2) {
    return {};
  }

  return {
    passenger: {
      currentValue: c.value,
      message: 'Passenger name should have a minlength of 3 charachters!'
    }
  };
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function passengerValidatorWithParams(passengers: string[]): ValidatorFn {
  return (c: AbstractControl) => {
    if (c.value && passengers.indexOf(c.value) >= 0) {
      return {};
    }

    return {
      passengerWithParams: {
        currentValue: c.value,
        message: 'Passenger name is not Valid!'
      }
    };
  };
}

@Component({
  selector: 'app-passenger-search',
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.scss']
})
export class PassengerSearchComponent {
  // firstname = '';
  // name = 'Smith';
  passengerList$: Observable<Passenger[]> = of([]);
  selectedPassenger: Passenger | undefined;
  firstNameControl: FormControl<string>;
  nameControl: FormControl<string>;

  searchForm: FormGroup;

  constructor(private passengerService: PassengerService, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      name: ['Smith', [passengerValidator, passengerValidatorWithParams(['Smith', 'Awada'])]],
      firstname: ['']
    });

    this.nameControl = this.searchForm.controls?.name as FormControl;
    this.firstNameControl = this.searchForm.controls?.firstname as FormControl;

    this.nameControl.valueChanges.subscribe({
      next: (value) => console.log('name', value)
    });
    this.firstNameControl.valueChanges.subscribe({
      next: (value) => console.log('firstname', value)
    });
  }

  load(): void {
    console.log(this.searchForm.value);
    console.log(this.searchForm.value);
    console.log(this.searchForm.value);
    this.passengerList$ = this.passengerService.find(this.nameControl.value, this.firstNameControl.value);
  }

  toggleSelection(p: Passenger) {
    this.selectedPassenger = p;
  }
}
