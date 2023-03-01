import { Component, DoCheck, inject } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { validateCity } from '../validation/city-validator';

export interface Address {
  street: string;
  // eslint-disable-next-line id-blacklist
  number: string | string[];
  zip: string;
  city: string;
  country: string;
}

export interface ExternalAddress extends Address {
  // eslint-disable-next-line id-blacklist
  number: string | string[];
}

@Component({
  selector: 'app-address-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="addressForm">
      <div class="form-group">
        <label>Street:</label>
        <input formControlName="street" class="form-control" />
      </div>
      <div class="form-group">
        <label>Number:</label>
        <input formControlName="number" class="form-control" />
      </div>
      <div class="form-group">
        <label>Zip code:</label>
        <input formControlName="zip" class="form-control" />
      </div>
      <div class="form-group">
        <label>City:</label>
        <input formControlName="city" class="form-control" />
        <div *ngIf="addressForm.controls.city.hasError('city')" class="alert alert-danger">
          You entered an invalid city name for the address.<br />
          Please enter one of the following:<br />
          {{ addressForm.controls.city.errors?.['city'].validCities.join(', ') }}
        </div>
      </div>
      <div class="form-group">
        <label>Country:</label>
        <input formControlName="country" class="form-control" />
      </div>

      <div class="form-group">
        <button (click)="updateAddress()" [disabled]="!addressForm.valid" class="btn btn-default">Update address</button>
      </div>
    </form>
  `
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class AddressControl implements ControlValueAccessor, DoCheck {
  addressForm = inject(NonNullableFormBuilder).group({
    street: [''],
    // eslint-disable-next-line id-blacklist
    number: [''],
    zip: [''],
    city: ['', [validateCity]],
    country: ['']
  });
  #ngControl = inject(NgControl);
  onChangeFn: ((address: ExternalAddress) => void) | undefined;
  onTouchedFn: (() => void) | undefined;
  untouched = true;

  constructor() {
    this.#ngControl.valueAccessor = this;
  }

  ngDoCheck(): void {
    if (this.untouched && this.addressForm.touched) {
      this.onTouchedFn?.();
      this.untouched = false;
    }
  }

  writeValue(address: Address): void {
    this.addressForm.patchValue({
      ...address,
      // eslint-disable-next-line id-blacklist
      number: typeof address.number === 'string' ? address.number : address.number.join('/')
    });
  }

  registerOnChange(fn: (address: Address) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    console.log(isDisabled);
    Object.values(this.addressForm.controls).forEach((control) => (isDisabled ? control.disable() : control.enable()));
  }

  updateAddress(): void {
    const externalAddress: ExternalAddress = {
      ...this.addressForm.getRawValue(),
      // eslint-disable-next-line id-blacklist
      number: this.addressForm.getRawValue().number.split('/')
    };
    this.onChangeFn?.(externalAddress);
  }
}
