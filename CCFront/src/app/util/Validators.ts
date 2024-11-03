import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


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

