import { Component, OnInit } from '@angular/core';
import { Registration } from '../Models/Registration.model';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  registrations:Registration[]=[];
 

  constructor(private apiservice:ApiServiceService) { }      



  ngOnInit(): void {

    this.getAllRegistration();

  }

  getAllRegistration() {

    this.apiservice.getAllRegistrations().subscribe(

      response=>{

        console.log(response);

        
       this.registrations=response;

      }

    )

  }





}
