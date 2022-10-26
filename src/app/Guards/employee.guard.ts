import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ApiServiceService } from '../Services/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate {
  
  // hasAcess:boolean=true;
  constructor(private apiservice:ApiServiceService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
     return this.checkUserAccess();
  }

  checkUserAccess(){
    return this.apiservice.getAllRegistrations().pipe(
      map((data)=>{
        //check the user access
        if(data.find(r=>r.role==='Employee')){
          return true;
        }else{
          alert('Access Denied!');
          this.router.navigate(['home1']);
          return false;
        }

        // if(data.find(r=>r.role==='Employee')){
        //   return true;
        // }else{
        //   alert('Access Denied!');
        //   this.router.navigate(['home1']);
        //   return false;
        // }

        // if(data.find(r=>r.role==='Vendor')){
        //   return true;
        // }else{
        //   alert('Access Denied!');
        //   this.router.navigate(['home1']);
        //   return false;
        // }
      }
      ))
    
  };
}
