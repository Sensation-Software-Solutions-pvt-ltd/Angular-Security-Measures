import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityCookieService } from '../cookie-service/cookie.service';
@Injectable({
  providedIn: 'root'
})
export class OuterPagesGuard implements CanActivate {
  constructor(public _router: Router, private _securityCookieService: SecurityCookieService,) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const token = this._securityCookieService.getToken()
    if (token) {  
      this._router.navigate(["user/home"]);
      return false;
    }
    else {
      return true
    }
  
  }
}
