import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityCookieService } from '../../../../services/cookie-service/cookie.service';
import { SharedService } from '../../../../services/shared-service/shared.service';

@Component({
  selector: 'app-inner-header',
  templateUrl: './inner-header.component.html',
  styleUrls: ['./inner-header.component.css']
})
export class InnerHeaderComponent implements OnInit {

  constructor(private _sharedService: SharedService,
    private _securityCookieService: SecurityCookieService,
    private _router: Router  ) { }

  ngOnInit(): void {
  }
  showHideMenu() {
    this._sharedService.showHideMenu();
  }
  logOut() {
    debugger
    this._securityCookieService.clearTokenCookies();
    setTimeout(()=>{                     
      this._router.navigate(["login"]);
  }, 500);                                                                                                                                                                                                                                                                                                           
  

  }

}
