import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './employee/employee.component';
import { AdminComponent } from './admin/admin.component';
import { VendorComponent } from './vendor/vendor.component';
import { HttpClientModule } from '@angular/common/http';
import { VieworderrequestComponent } from './vieworderrequest/vieworderrequest.component';
import { VieworderdetailComponent } from './vieworderdetail/vieworderdetail.component';
import { Home1Component } from './home1/home1.component';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EmployeeComponent,
    AdminComponent,
    VendorComponent,
    VieworderrequestComponent,
    VieworderdetailComponent,
    Home1Component,
    OrderstatusComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,
    HttpClientModule,
    
   
    

    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
