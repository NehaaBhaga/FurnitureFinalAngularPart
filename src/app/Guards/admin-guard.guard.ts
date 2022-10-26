import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Registration } from '../Models/Registration.model';
import { ApiServiceService } from '../Services/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {





  constructor(private router:Router, private apiservice:ApiServiceService ){}

   a:any;
   b:any;
  


  canActivate(


    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any  {

      const roles= route.data['role'] 
      console.log(roles); //['Admin'] --->array


      this.apiservice.getAllRegistrations().subscribe((response)=>{
        console.log(response);
  
        const user= response.find((a:any)=>{
  
          return a.role==="Admin"
  
  
      })
  
      console.log(user);
      if(roles== 'Admin'){
        alert('You are not allowed to view this page. LOGIN FIRST!!'); 
          this.router.navigate(["home1"]);             
          return false; 
       }
     
    //  else if(user?.role==='Admin'){
    //       return true;

    //      }

         else{
          return true;
         }

         return



         

    })
      
    
    
    
  
      // if(roles== 'Admin' && this.a.role=="Admin" )
      // {

      //   return true;
      // }
      // else{
        
      //  alert('You are not allowed to view this page. LOGIN FIRST!!'); 
      //  this.router.navigate(["home1"]);             
      //  return false; 

      // }
    

 

  
   
    }
  


}

  
  



