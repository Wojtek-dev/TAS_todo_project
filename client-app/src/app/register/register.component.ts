import { Component, OnInit } from '@angular/core';
import * as AccountServiceProxy from '../shared/service-proxies/Account';
import * as DashboardServiceProxy from '../shared/service-proxies/Dashboards';
import * as UserServiceProxy from '../shared/service-proxies/Users';
import RegisterModel = api.RegisterModel;
import NewDashboardModel = api.NewDashboardModel;
import UserModel = api.User;
import { RegisterOptions } from '../shared/service-proxies/Account';
import { Router } from '@angular/router';
import { PostOptions } from '../shared/service-proxies/Dashboards';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  nickname: string;
  email: string;
  password: string;
  confirmPassword: string;
  user: RegisterModel = {};
  listOfUsers: number;
  registerOptions: RegisterOptions = {};
  postOptions: PostOptions = {};
  dashboard: NewDashboardModel = {};
  flag:number = 0;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  validatePasswords():boolean{
    if(this.password == this.confirmPassword){
      return true;
    }
    else{
      return false;
    }
  }

  createFirstDashboard(){
    UserServiceProxy.GetId(this.nickname)
    .catch((error:Error) => {
      console.log(error);
    })
    .then((res: api.Response<any>) => {
      this.listOfUsers = res.data;
      DashboardServiceProxy.Post(this.listOfUsers, this.postOptions)
      .catch((error:Error) => { 
        console.log(error);
      })
      .then((res: api.Response<any>) => {
        this.router.navigate(['/signIn']);
      })
    })
  }

  register(){
  
    this.user.name = this.nickname;
    this.user.username = this.nickname;
    this.user.password = this.password;
    this.user.email = this.email;

    this.dashboard.dashboardName = 'Main';

    this.registerOptions.userModel = this.user;  
    this.postOptions.newDashboard = this.dashboard;

    AccountServiceProxy.Register(this.registerOptions)
    .catch((error: Error) => {
      console.log(error);
    })
    .then((res: api.Response<any>) => {
      this.createFirstDashboard();
    })
  }
  
  back(){
    if(this.flag == 1){
      this.createFirstDashboard();
    }
    else{
      this.router.navigate(['/signIn']);      
    }
  }

}
