import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private showHideMenuSubject = new Subject();
  showHideMenuSubject$ = this.showHideMenuSubject.asObservable()

  constructor() { }

  showHideMenu() {
    this.showHideMenuSubject.next(null);
  }

 

}
