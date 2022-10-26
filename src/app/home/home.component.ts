import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HideService } from '../Services/hide.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   result:any;
  constructor(public hide:HideService, private router:Router) { }

  ngOnInit(): void {

  // this.result=sessionStorage.getItem('login');

  }


  Onlogout(){

    alert("Are you sure you want to logout?")
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['home1'])
    
  }

  

}
