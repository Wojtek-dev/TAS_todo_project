import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { TableTodoComponent } from './table-todo/table-todo.component';
import { TableInputComponent } from './table-input/table-input.component';
import { TableItemComponent } from './table-item/table-item.component';
import { CreateDashboardComponent } from './create-dashboard/create-dashboard.component';
import { SwitchDashboardComponent } from './switch-dashboard/switch-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    TableTodoComponent,
    TableInputComponent,
    TableItemComponent,
    CreateDashboardComponent,
    SwitchDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
