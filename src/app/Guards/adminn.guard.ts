import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../Services/api-service.service';
import { map } from 'rxjs/operators';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class AdminnGuard implements CanActivate {

  // hasAcess:boolean=true;
  // userdetails:Array<any>=[] ;
  data:any;
  constructor(private apiservice:ApiServiceService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

      const roles :string = route.data['role'] //admin in routing
 
     this.data=localStorage.getItem('user')
    //  this.userdetails=this.data
     console.log(this.data);
     
      
      // console.log(this.userdetails);
      console.log(roles); 
      // this.data=this.userdetails.email
    

      
      
      
      if(roles.includes(this.data)){
        console.log("true");

        
        return true;
      }else{
        console.log("false");
        this.router.navigate(['home1'])
        
        return false
      }

 


  }

  // checkUserAccess(){
  //   return this.apiservice.getAllRegistrations().pipe(
  //     map((data)=>{
  //       //check the user access
  //       if(data.find(r=>r.role==='Admin')){
  //         return true;
  //       }else{
  //         alert('Access Denied!');
  //         this.router.navigate(['home1']);
  //         return false;
  //       }

  //       // if(data.find(r=>r.role==='Employee')){
  //       //   return true;
  //       // }else{
  //       //   alert('Access Denied!');
  //       //   this.router.navigate(['home1']);
  //       //   return false;
  //       // }

  //       // if(data.find(r=>r.role==='Vendor')){
  //       //   return true;
  //       // }else{
  //       //   alert('Access Denied!');
  //       //   this.router.navigate(['home1']);
  //       //   return false;
  //       // }
  //     }
  //     ))
    
  // };
  
}
