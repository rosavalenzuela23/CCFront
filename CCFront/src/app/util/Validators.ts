import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { getOnlyDate } from "./util-functions";


export function forbiddenString(stringRegex: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = stringRegex.test(control.value);
        return forbidden ? null : {forbiddenString: {value: control.value}};
    };
}

//Validador para campos en los que se coloquén solamente espacios sin escribir nada
export function noSpaces(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isValid = control.value && control.value.trim().length > 0;
      return isValid ? null : { noSpaces: { value: control.value } };
    };
}

export function noValidDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const dateSelected = new Date(control.value);
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 1); 
        const isValid = dateSelected <= currentDate;
        return isValid ? null : { noValidDate: { value: control.value } };
    };
}
