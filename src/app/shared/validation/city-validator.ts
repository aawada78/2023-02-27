import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function validateCity(control: AbstractControl): ValidationErrors | null {
  const validCities: string[] = ['Graz', 'Hamburg', 'Barcelona'];

  if (control?.value && !validCities.includes(control.value)) {
    return {
      city: {
        validCities,
        actualCity: control.value
      }
    };
  }

  return null;
}

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function validateCityWithParams(validCities: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control?.value && !validCities.includes(control.value)) {
      return {
        city: {
          validCities,
          actualCity: control.value
        }
      };
    }

    return null;
  };
}
