import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function forbiddenString(stringRegex: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = stringRegex.test(control.value);
        return forbidden ? null : {forbiddenString: {value: control.value}};
    };
}