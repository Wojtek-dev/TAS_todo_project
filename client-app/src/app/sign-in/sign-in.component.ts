import { Component, OnInit } from '@angular/core';
import * as AccountServiceProxy from '../shared/service-proxies/Account';
import { Router } from '@angular/router';
import LoginModel = api.LoginModel;
import { LoginOptions } from '../shared/service-proxies/Account';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  login: string;
  password: string;
  loginModel: LoginModel = {};
  loginOptions: LoginOptions = {};

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  verifyLogin(){

    this.loginModel.username = this.login;
    this.loginModel.password = this.password;

    this.loginOptions.loginModel = this.loginModel;

    AccountServiceProxy.Login(this.loginOptions)
    .catch((error: Error) => {
      console.log(error);
    })
    .then((res: api.Response<any>) => {
      this.router.navigate(['/table', this.loginModel.username, 'Main'])
    })
  }

}
