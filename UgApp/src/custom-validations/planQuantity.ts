import { AbstractControl } from '@angular/forms';

// Custom Validation to resolve the next rule:
// Birthdate can not be greater than current date

export function planQuantityValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const planQuantity = control.get('cantidad');
    return planQuantity && planQuantity.value > 3 ? { misMatch: true } : null;
}
