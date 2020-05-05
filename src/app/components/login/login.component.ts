import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserInfo } from 'src/app/types/user-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('srao'),
    password: new FormControl('')
  });
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let loggedUser: UserInfo = this.auth.login(this.loginForm.get('username').value, this.loginForm.get('password').value);
    if(loggedUser){
      this.router.navigate(['/main']);
    }
  }


}
