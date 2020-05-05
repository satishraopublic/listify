import { Injectable } from '@angular/core';
import { UserInfo } from '../types/user-info';
import { UserData } from '../types/user-data';
import { AppstateService } from './appstate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  USERS: UserData[] = [
     { userName: 'srao', password: 'password', firstName:'Satish', lastName:'Rao', isAdmin:true},
     { userName: 'hrao', password: 'password', firstName:'Hemalatha', lastName:'Rao', isAdmin:true},
     { userName: 'admin', password: 'password01!', firstName:'Administrator', lastName:'Administrator', isAdmin:true},
     { userName: 'arao', password: 'password', firstName:'Aditya', lastName:'Rao', isAdmin:false},
     { userName: 'irao', password: 'password', firstName:'Isha', lastName:'Rao', isAdmin:false},
    ]
  constructor(private appState:AppstateService) { }

  login(username:string, password:string): UserInfo | null{
    let currentUser: UserInfo;
    let loggedUser:UserData;
    let foundUser = this.USERS.filter(user => user.userName == username && password == password);
    if(foundUser && foundUser.length > 0){
      loggedUser = foundUser[0];
      currentUser = { userName: loggedUser.userName, firstName: loggedUser.firstName, lastName: loggedUser.lastName, isAdmin: loggedUser.isAdmin};
      this.appState.StoreCurrentUser(currentUser);
      return currentUser;
    }
    return null;
  }

  logout(){
      this.appState.RemoveCurrentUser();
  }

}
