import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as UserServiceProxy from '../shared/service-proxies/Users';
import * as DashboardServiceProxy from '../shared/service-proxies/Dashboards';
import DashboardModel = api.Dashboard; 

@Component({
  selector: 'app-switch-dashboard',
  templateUrl: './switch-dashboard.component.html',
  styleUrls: ['./switch-dashboard.component.css']
})
export class SwitchDashboardComponent implements OnInit {

  currentPath:string;
  newPath:string = "";
  slashCounter:number = 0;
  nickname:string = "";
  userId:number;
  dashboards:Array<DashboardModel>;

  constructor(
    private router: Router
  ) 
  {
    this.currentPath = this.router.url;
    this.getNickname();
    this.getDashboards();
  }

  ngOnInit() {
  }

  getDashboards(){
    UserServiceProxy.GetId(this.nickname)
    .catch((error:Error) => {
      console.log(error);
    })
    .then((res: api.Response<any>) => {
      this.userId = res.data;
      DashboardServiceProxy.Get1(this.userId)
      .catch((error:Error) => {
        console.log(error);
      })
      .then((res: api.Response<any>) => {
        this.dashboards = res.data;
      })
    })
  }

  getNickname(){
    for(let i=0; i<this.currentPath.length; i++){
      if(this.slashCounter == 2){
        this.nickname += this.currentPath[i];
      }
      if(this.currentPath[i] == '/'){
        this.slashCounter += 1;
      }
    }
  }

  chooseDashboard(dashboard){
    this.slashCounter = 0;
    for(let i=0; i<this.currentPath.length; i++){
      if(this.slashCounter < 3){
        this.newPath += this.currentPath[i];
      }
      if(this.slashCounter == 3){
        this.newPath += dashboard.name;
        this.slashCounter += 1;
      }
      if(this.currentPath[i] == '/'){
        this.slashCounter += 1;
      }
    }
    this.router.navigate([this.newPath]);
  }

  deleteDashboard(dashboard){
    DashboardServiceProxy.Delete(dashboard.id)
    .catch((error:Error) => {
      console.log(error);
    })
    .then((res: api.Response<any>) => {
      alert("Dashboard deleted correctly");
      this.back();
    })
  }

  back(){
    this.currentPath = this.router.url;

    for(let i=0; i<this.currentPath.length - 16; i++){
      this.newPath += this.currentPath[i];
    }

    this.router.navigate([this.newPath]);
  }

}
