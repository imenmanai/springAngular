import { TransfertService } from './service/local/transfert.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptorProviders } from './service/http-interceptor.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListRentComponent } from './list-rent/list-rent.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './form/form.component';
import { LocalListComponent } from './local-list/local-list.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthentificationComponent,
    ListRentComponent,
    MenuComponent,
    RegisterComponent,
    FormComponent,
    LocalListComponent,
    DetailComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule



  ],
  providers: [
    authInterceptorProviders,
    TransfertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
