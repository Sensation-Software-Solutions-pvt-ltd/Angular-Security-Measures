import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SecurityCookieService {

  constructor(public _cookieService: CookieService) {


  }
  setToken(token: string, callback:any) {
    this._cookieService.set('token', token);
    if (callback) {
      callback()
    }
  }
  getToken() :string{
    return this._cookieService.get('token');
  }
  clearTokenCookies() {
    this._cookieService.deleteAll();
  }
}
