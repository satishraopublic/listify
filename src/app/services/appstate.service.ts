import { Injectable } from '@angular/core';
import { UserInfo } from '../types/user-info';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppstateService {
  TOKEN = 'token';
  stateChanged: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }

  StoreCurrentUser(currentUser: UserInfo) {
    localStorage.setItem(this.TOKEN, JSON.stringify(currentUser));
    this.stateChanged.next(true);
  }

  RemoveCurrentUser(){
    localStorage.removeItem(this.TOKEN);
    this.stateChanged.next(false);
  }

  GetCurrentUserInfo(): UserInfo | null{
    let cuser = localStorage.getItem(this.TOKEN);
    if(cuser){
      return JSON.parse(cuser);
    }
    return null;
  }

}
