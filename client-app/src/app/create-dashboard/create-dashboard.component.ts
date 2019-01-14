import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as DashboardServiceProxy from '../shared/service-proxies/Dashboards';
import * as UserServiceProxy from '../shared/service-proxies/Users';
import NewDashboardModel = api.NewDashboardModel;
import DashboardModel = api.Dashboard;
import { PostOptions } from '../shared/service-proxies/Dashboards';
import * as TaskServiceProxy from '../shared/service-proxies/Task';
import TaskModel = api.NewTaskModel;
import { PostOptionsTask } from '../shared/service-proxies/Task';

@Component({
  selector: 'app-create-dashboard',
  templateUrl: './create-dashboard.component.html',
  styleUrls: ['./create-dashboard.component.css']
})
export class CreateDashboardComponent implements OnInit {

  currentPath:string;
  newPath:string = "";
  userId:number;
  nickname:string = "";
  dashboard: NewDashboardModel = {}; 
  dashboards: Array<DashboardModel>; 
  postOptions:PostOptions = {};
  slashCounter = 0;
  name:string;
  firstTask:TaskModel = {};
  postTaskOptions: PostOptionsTask = {};

  constructor(
    private router: Router
  ) 
  {
    this.currentPath = this.router.url;    
  }

  ngOnInit() {
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

  createNewPath(){
    this.slashCounter = 0;
    for(let i=0; i<this.currentPath.length; i++){
      if(this.slashCounter < 3){
        this.newPath += this.currentPath[i];
      }
      if(this.slashCounter == 3){
        this.newPath += this.dashboard.dashboardName;
        this.slashCounter += 1;
      }
      if(this.currentPath[i] == '/'){
        this.slashCounter += 1;
      }
    }
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
        this.firstTask.context = "FirstTask";
        for(let i=0; i<this.dashboards.length; i++){
          if(this.dashboards[i].name == this.name){
            this.firstTask.dashboardId = this.dashboards[i].id;
          }
        }
        this.postTaskOptions.task = this.firstTask;
        TaskServiceProxy.Post(this.userId,this.postTaskOptions)
        .catch((error:Error) => {
          console.log(error);
        })
        .then((res: api.Response<any>) => {
          this.router.navigate([this.newPath]);          
        })
      })
    })
  }

  addDashboard(){
    this.getNickname();

    this.dashboard.dashboardName = this.name;
    this.postOptions.newDashboard = this.dashboard;

    UserServiceProxy.GetId(this.nickname)
    .catch((error:Error) => {
      console.log(error);
    })
    .then((res: api.Response<any>) => {
      this.userId = res.data;
      DashboardServiceProxy.Post(this.userId, this.postOptions)
      .catch((error:Error) => { 
        console.log(error);
      })
      .then((res: api.Response<any>) => {
        this.newPath = "";
        this.createNewPath();
        this.getDashboards();        
        
      })
    })
  }

  back(){
    for(let i=0; i<this.currentPath.length - 13; i++){
      this.newPath += this.currentPath[i];
    }

    this.router.navigate([this.newPath]);
  }
}