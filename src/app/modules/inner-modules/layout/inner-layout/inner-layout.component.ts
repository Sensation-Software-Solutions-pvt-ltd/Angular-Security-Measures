import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../../services/shared-service/shared.service';

@Component({
  selector: 'app-inner-layout',
  templateUrl: './inner-layout.component.html',
  styleUrls: ['./inner-layout.component.css']
})
export class InnerLayoutComponent implements OnInit {

  isShowMenu = false;
  constructor(private _sharedService: SharedService) {
    this._sharedService.showHideMenuSubject$.subscribe((res:any) => {
      this.isShowMenu = (!this.isShowMenu);
    })

  }

  ngOnInit(): void {

  }

}
