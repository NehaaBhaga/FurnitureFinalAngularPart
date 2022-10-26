import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HideService {

  constructor() { }

  getDetails(){
    const userDetails=JSON.parse(sessionStorage.getItem('FullDetails')!);


    if(userDetails){
      return userDetails;
    }
  }

  isLoggedIn(){

   if(this.getDetails()){
    return true;
    
   }
   else{
    return false;
   }


  }

 }


