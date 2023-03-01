import { NgIf } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { passengerValidator } from 'src/app/flight-booking/passenger-search/passenger-search.component';

type PersonForm = FormGroup<{
  firstname: FormControl<string>;
  lastname: FormControl<string>;
}>;

@Component({
  selector: 'app-person-subform',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  template: `
    <form [formGroup]="personForm">
      <div class="form-group">
        <label>Firstname:</label>
        <input formControlName="firstname" class="form-control" />
        <div *ngIf="personForm.controls.firstname.hasError('city')" class="alert alert-danger">
          You entered a too short name.<br />
          Please enter one of the following:<br />
          {{ personForm.controls.firstname.errors?.['city'].validCities.join(', ') }}
        </div>
      </div>
      <div class="form-group">
        <label>Lastname:</label>
        <input formControlName="lastname" class="form-control" />
      </div>

      <div class="form-group">
        <button (click)="logValue()" class="btn btn-default">Log value</button>
      </div>
    </form>
  `
})
export class PersonSubformComponent implements OnInit {
  @Input() formGroupName = '';

  #formBuilder = inject(FormBuilder);
  #parentForm = inject(FormGroupDirective, { optional: true });
  personForm!: PersonForm;

  ngOnInit() {
    this.personForm = (this.#parentForm?.control?.get(this.formGroupName) as PersonForm) || this.#formBuilder.group({});
    this.personForm.addControl('firstname', new FormControl('', { nonNullable: true }));
    this.personForm.addControl('lastname', new FormControl('', { nonNullable: true }));

    const firstNameControl = this.personForm.controls.firstname;
    firstNameControl.validator = passengerValidator;
  }

  logValue(): void {
    console.log(this.personForm.value);
  }
}
