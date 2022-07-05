import { AbstractControl, FormGroup } from "@angular/forms";

export interface LoginModel {
  UserName: string,
  Password: string,
  RememberMe: boolean,
}

export interface ILoginModel extends FormGroup {
  value: LoginModel;
  controls: {
    UserName: AbstractControl,
    Password: AbstractControl,
    RememberMe: AbstractControl,
  };
}
