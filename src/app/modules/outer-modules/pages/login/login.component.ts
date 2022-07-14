import { Component, OnInit } from '@angular/core';
import { ILoginModel } from '../../Interfaces/account-models/account.interface';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SecurityCookieService } from '../../../../services/cookie-service/cookie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
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
    debugger
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
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


  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
}
