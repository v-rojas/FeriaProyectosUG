import { AbstractControl } from '@angular/forms';

// Custom Validation to resolve the next rule:
// Birthdate can not be greater than current date

export function birthDateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const today = currentDate();
    const birthDate = control.get('fechaNacimiento');
    return birthDate && birthDate.value > today ? { misMatch: true } : null;
}


function currentDate() {
    const dateObj = new Date();
    const month = fillzero(2, dateObj.getMonth() + 1);
    const day = fillzero(2, dateObj.getDate());
    const year = fillzero(4, dateObj.getFullYear());
    const newDate = year + '-' + month + '-' + day;
    return newDate;
}

function fillzero(size: number, numero: number) {
    let s = String(numero);
    while (s.length < (size || 2)) { s = '0' + s; }
    return s;
}
