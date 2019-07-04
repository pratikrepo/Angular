import { AbstractControl } from "@angular/forms";
export function  PasswordValidator(control: AbstractControl):
{[key : string] : boolean}| null {
    const password=control.get('password');
    const confirmpassword=control.get('confirmPassword');
      if (password.pristine || confirmpassword.pristine){
          return null;
    }
 return password && confirmpassword && password.value  === confirmpassword.value ?
 null : {'misMatch' : true};
}