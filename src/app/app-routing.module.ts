import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';


import { AdminnGuard } from './Guards/adminn.guard';

import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { LoginComponent } from './login/login.component';
import { OrderstatusComponent } from './orderstatus/orderstatus.component';
import { RegisterComponent } from './register/register.component';
import { VendorComponent } from './vendor/vendor.component';
import { VieworderdetailComponent } from './vieworderdetail/vieworderdetail.component';
import { VieworderrequestComponent } from './vieworderrequest/vieworderrequest.component';

const routes: Routes = [

{path:'', component:Home1Component},
{path:'home1', component:Home1Component},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'employee', component:EmployeeComponent,  data:{role : ['Employee'],}, canActivate:[AdminnGuard]},
{path: 'orderstatus', component:OrderstatusComponent, data:{role : ['Employee'],}, canActivate:[AdminnGuard]},
{path:'admin', component:AdminComponent, data:{role : ['Admin'],}, canActivate:[AdminnGuard]},
{path:'vendor', component:VendorComponent, data:{role : ['Vendor'],}, canActivate:[AdminnGuard]},
{path:'vieworderrequest', component:VieworderrequestComponent, data:{role : ['Admin'],}, canActivate:[AdminnGuard]},
{path:'vieworderdetail', component:VieworderdetailComponent, data:{role : ['Vendor'],}, canActivate:[AdminnGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
