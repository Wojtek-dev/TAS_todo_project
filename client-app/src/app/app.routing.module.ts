import {Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { RegisterComponent } from 'src/app/register/register.component';
import { RouterModule } from '@angular/router';
import { SignInComponent } from 'src/app/sign-in/sign-in.component';
import { TableTodoComponent } from 'src/app/table-todo/table-todo.component';
import { CreateDashboardComponent } from 'src/app/create-dashboard/create-dashboard.component';
import { SwitchDashboardComponent } from 'src/app/switch-dashboard/switch-dashboard.component';

const appRoutes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'signIn',
        component: SignInComponent
    },
    {
        path: 'table/:user/:dashboard',
        component: TableTodoComponent
    },
    {
        path: 'table/:user/:dashboard/newDashboard',
        component: CreateDashboardComponent
    },
    {
        path: 'table/:user/:dashboard/switchDashboard',
        component: SwitchDashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}