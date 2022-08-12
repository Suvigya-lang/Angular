import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BootstrapExamplesComponent } from './bootstrap-examples/bootstrap-examples.component';
import { DetailsComponent } from './details/details.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: 'form', component: FormComponentComponent },
{path:'login',component: LoginComponent},
{path:'list',component: ListComponent},
{path:'details/:id',component:DetailsComponent},
{path:'components',component:BootstrapExamplesComponent},

{path:'',component: AppComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
