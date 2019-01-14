import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';
import { Router } from '@angular/router';
import * as UserServiceProxy from '../shared/service-proxies/Users';
import * as DashboardServiceProxy from '../shared/service-proxies/Dashboards';
import * as TaskServiceProxy from '../shared/service-proxies/Task';
import DashboardModel = api.Dashboard; 
import TaskModel = api.Task;
import NewTaskModel = api.NewTaskModel;
import { PostOptionsTask } from '../shared/service-proxies/Task';

@Component(
  {
    selector: 'app-table-todo',
    templateUrl: './table-todo.component.html',
    styleUrls: ['./table-todo.component.css']
  }
)
export class TableTodoComponent {

  name:string = "";
  slashCounter:number = 0;
  currentPath:string; 
  dashboards:Array<DashboardModel>;
  dashboard:DashboardModel = {}; 
  tasks:Array<TaskModel>;
  task:NewTaskModel = {};
  currentTasks:Array<TaskModel> = [];  
  nickname:string = "";
  userId:number;
  dashboardId:number;
  postTaskOptions: PostOptionsTask = {};  

  constructor(
    private router: Router     
  ) 
  {
    this.currentPath = this.router.url;
    this.makeName();
    this.getNickname();
  }

  getTasks(){
    TaskServiceProxy.Get(this.userId)
    .catch((error:Error) => {
      console.log(error);
    })
    .then((res: api.Response<any>) => {
      this.tasks = res.data;
      while(this.currentTasks.length != 0){
        this.currentTasks.pop();
      }
      for(let i=0; i<this.tasks.length; i++){
        if(this.tasks[i].dashboard.id == this.dashboardId && this.tasks[i].isDeleted == false){
          this.currentTasks.push(this.tasks[i]);
        }
      }
    })
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
        this.currentDashboard();
      })
    })
  }

  currentDashboard(){
    for(let i=0; i<this.dashboards.length; i++){
      if(this.name == this.dashboards[i].name){
        this.dashboardId = this.dashboards[i].id;
      }
    }
    this.getTasks();
  }

  getNickname(){
    this.slashCounter = 0;
    for(let i=0; i<this.currentPath.length; i++){
      if(this.slashCounter == 2 && this.currentPath[i] != '/'){
        this.nickname += this.currentPath[i];
      }
      if(this.currentPath[i] == '/'){
        this.slashCounter += 1;
      }
    }
    this.getDashboards();
  }

  makeName(){
    for(let i=0; i<this.currentPath.length; i++){
      if(this.slashCounter == 3){
        this.name += this.currentPath[i];
      }
      if(this.currentPath[i] == '/'){
        this.slashCounter += 1;
      }
    }
  }

  addTodo(newTask){
    if(newTask == ""){
      alert("You have to write something!");
    }
    else{
      this.task.context = newTask;
      this.task.dashboardId = this.dashboardId;
      this.postTaskOptions.task = this.task;
      TaskServiceProxy.Post(this.userId,this.postTaskOptions)
      .catch((error:Error) => {
        console.log(error);
      })
      .then((res: api.Response<any>) => {
        this.getTasks();
      })     
    }
  }

  deleteTodo(toDelete){
    for(let i=0; i<this.currentTasks.length; i++){
      if(toDelete.context == this.currentTasks[i].context && this.currentTasks[i].idStatus == '9'){
        TaskServiceProxy.Delete(this.currentTasks[i].id)
        .catch((error:Error) => {
          console.log(error);
        })
        .then((res: api.Response<any>) => {
          this.getTasks();
        })
      }
    }
  }

  doneTodo(toDone){
    for(let i=0; i<this.currentTasks.length; i++){
      if(toDone.context == this.currentTasks[i].context){
        TaskServiceProxy.ChangeStatus(this.currentTasks[i].id,9)
        .catch((error:Error) => {
          console.log(error);
        })
        .then((res: api.Response<any>) => {
          this.getTasks();
        })
      }
    }
  }

  logOut(){
    this.router.navigate(['/signIn']);
  }

  addDashboard(){
    this.router.navigate([this.router.url + '/newDashboard']);
  }

  switchDashboard(){
    this.router.navigate([this.router.url + '/switchDashboard']);
  }

}

