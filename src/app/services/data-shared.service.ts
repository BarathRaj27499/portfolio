import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {

  constructor() { }

  private sideNavVisibility = new Subject<boolean>();
  private hamburgerBtnClick = new Subject<boolean>();
  sideNavVisibility$ = this.sideNavVisibility.asObservable();
  hamburgerBtnClick$ = this.hamburgerBtnClick.asObservable();

  setSideNavVisibility(data: boolean) {
    this.sideNavVisibility.next(data);
  }

  clickHamburgerButton(buttonClickFlag: boolean){
    this.hamburgerBtnClick.next(buttonClickFlag);
  }
}
