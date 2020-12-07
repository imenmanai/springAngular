import { UpdateComponent } from './update/update.component';
import { DetailComponent } from './detail/detail.component';
import { LocalListComponent } from './local-list/local-list.component';
import { FormComponent } from './form/form.component';
import { RegisterComponent } from './register/register.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
{path:'home',component: HomeComponent},
{path:'login',component: AuthentificationComponent},
{path:'register',component: RegisterComponent},
{path:'ajouter',component:FormComponent},
{path:'listUser',component:LocalListComponent},
{path:'home/detail/:id',component:DetailComponent},
{path:'listUser/update/:id',component:UpdateComponent},
{path:'home/:type',component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
