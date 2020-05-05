import { Component, OnInit } from '@angular/core';
import { AppstateService } from 'src/app/services/appstate.service';
import { UserInfo } from 'src/app/types/user-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  currentUser:UserInfo;
  IsLoggedIn:boolean;
  constructor(private appState : AppstateService, private router: Router) { 
  appState.stateChanged.subscribe(value => this.IsLoggedIn = value);

  }

  ngOnInit(): void {
    this.VerifyUser();
  }

  GoToLoginScreen(){
    this.router.navigate(['\login']);
  }

  SignOut(){
    this.appState.RemoveCurrentUser();
    this.router.navigate(['\login']);
  }



  VerifyUser(){
    this.currentUser = this.appState.GetCurrentUserInfo();
    if(this.currentUser){
      this.IsLoggedIn=true;
    }
    else{
      this.IsLoggedIn=false;
    }
  }

}
