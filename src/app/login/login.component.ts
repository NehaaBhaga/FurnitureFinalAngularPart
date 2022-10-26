import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../Models/Registration.model';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  Formdata:any;
  user:any;
  constructor(private http:HttpClient, private router:Router,private apiservice: ApiServiceService) { }

  ngOnInit(): void {
  }

  loginForm=new FormGroup({

    email:new FormControl("",[Validators?.required]),
    password :new FormControl("",[Validators?.required]),
    // role :new FormControl(" ")
    
  })


  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  response:any;
  registration: Registration={

    uid:'',
    

    email:'',

    password:'',

    firstName:'',

    lastName:'',

    address:'',

    role:''


  }

  var:any;
  onLogin(){

    console.log(this.loginForm.value);
    
    this.Formdata=this.loginForm.value;

    //console.log(this.Formdata);

   
 

    this.apiservice.getAllRegistrations().subscribe((response)=>{
      console.log(response);

        this.user= response.find((a:any)=>{

        return a.email===this.loginForm.value.email && a.password=== this.loginForm.value.password


    })

    console.log(this.user);
    if(this.user==undefined){
      //alert("User not found")


        this.var='Invalid Email or Password'
   
   
     
      this.loginForm.reset();
    }

    localStorage.setItem("user", this.user.role)
    sessionStorage.setItem("FullDetails",  JSON.stringify(this.user))
    

    if(this.user && this.user.role==="Admin"){
      // sessionStorage.setItem("login", 'true')
      //alert("Login Sucess!!")
      this.loginForm.reset();
      this.router.navigate(['/admin'])

    }

    else if( this.user && this.user.role==="Employee"){
      //alert("Login Sucess!!")
      this.loginForm.reset();
     this.router.navigate(['employee'])
    }
  else if( this.user && this.user.role==="Vendor")  {
    //alert("Login Sucess!!")
    this.loginForm.reset();

    this.router.navigate(['vendor'])
  }
  // else{

  //   alert("User Not Found!!")
  //   this.loginForm.reset();
  // }
  
},err=>{
  alert("Something went wrong")
})





}



    // this.http.get<Registration[]>("https://localhost:7117/api/Registrations")
    // .subscribe(res=>{
    //   console.log(res);

      //this.response=res.role


    //  const user= res.find((a:any)=>{

    //   return a.email===this.loginForm.value.email && a.password=== this.loginForm.value.password
   

    //  });

  //    if( user && this.response.role==="Employee"){
  //     alert("Login Sucess!!")
  //     this.loginForm.reset();
  //     this.router.navigate(['employee'])

  //   }
  //   else if( user && this.response.role==="admin"){
  //     alert("Login Sucess!!")
  //     this.loginForm.reset();
  //    this.router.navigate(['admin'])
  //   }
  // else if( user && this.response.role==="Vendor")   {
  //   alert("Login Sucess!!")
  //   this.loginForm.reset();

  //   this.router.navigate(['vendor'])
  // }
//   else{

//     alert("User Not Found!!")
//   }
  
// },err=>{
//   alert("Something went wrong")
// })

// }
    
}

    
    
  