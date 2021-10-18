import { AbstractControl } from '@angular/forms';

// Custom Validation to resolve the next rule:
// First password should be equals to second one

export function passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password1 = control.get('clave1');
    const password2 = control.get('clave2');
    return password1.value !== password2.value ? { misMatch: true } : null;
}