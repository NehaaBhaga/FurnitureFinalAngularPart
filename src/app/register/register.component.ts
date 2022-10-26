import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { Registration } from '../Models/Registration.model';
import { ApiServiceService } from '../Services/api-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router,private apiservice:ApiServiceService) { }

  ngOnInit(): void {
  }

  registrationForm=new FormGroup({
    
    uid:new FormControl("",[Validators?.required]),
    email:new FormControl("",[Validators?.required, Validators?.minLength(12), Validators?.maxLength(50), Validators?.pattern('[a-z, A-Z, 0-9, @, .]+$')]),
    password:new FormControl("",[Validators?.required, Validators?.minLength(8), Validators?.maxLength(50)]),
    fname:new FormControl("",[Validators?.required]),
    lname:new FormControl("",[Validators?.required]),
    address:new FormControl("",[Validators?.required]),
    role :new FormControl(" ")

  })

  
  get uid(){
    return this.registrationForm.get('uid');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get password(){
    return this.registrationForm.get('password');
  }

  get fname(){
    return this.registrationForm.get('fname');
  }
  get lname(){
    return this.registrationForm.get('lname');
  }
  get address(){
    return this.registrationForm.get('address');
  }
  get role(){
    return this.registrationForm.get('role');
  }


 //used in html ngModel
  registration: Registration={

    uid:'',
    

    email:'',

    password:'',

    firstName:'',

    lastName:'',

    address:'',

    role:''


  }







  Formdata:any;
  datarole:any;

  Onregistration(){
  //console.log(this.registrationForm.value);
  //console.log(this.registration);


  // this.registration=this.registrationForm.value;

  //whateva we are typing in the form coming in console
  console.log(this.registrationForm.value);
 this.datarole= this.registrationForm.value.role
 console.log(this.datarole); //Admin
 


  //registration is getting value from ngModel in html
  this.apiservice.addRegistration(this.registration).subscribe(response=>
    {

      console.log(response);
       
      

      this.proceedOnRegister(this.role);
      //alert("Registered Succesfully");

     
    


    this.registrationForm.reset();

     this.router.navigate(['login'])

   
  
    }

  )



  }


  proceedOnRegister(role:any){
   localStorage.setItem("role", this.datarole); //case1: role=Admin if select as Admin
  //case2: role=Employee if select as Employee
  }

}

