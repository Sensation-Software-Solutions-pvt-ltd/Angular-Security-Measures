import { Component, OnInit } from '@angular/core';
import { ILoginModel } from '../../Interfaces/account-models/account.interface';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SecurityCookieService } from '../../../../services/cookie-service/cookie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: ILoginModel;
  constructor(private _fb: FormBuilder,
    private _securityCookieService: SecurityCookieService,
    private _router: Router) {
    this.initialiseForm()
  }
  initialiseForm() {
    this.loginForm = this._fb.group({
      UserName: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required])
    }) as ILoginModel;
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this._v());
    }
    let token: string = "demo-token-data-123456789"
    this._securityCookieService.setToken(token, () => {
      this.openHomePage();
    });
  }
  openHomePage(data: any = {}) {
    this._router.navigate(["user/home"]);
  }
  ngOnInit(): void {

  }
  _v() {
    return this.loginForm.value;
  }
}
