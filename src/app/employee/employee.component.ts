import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderRequest } from '../Models/OrderRequest.model';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private apiservice:ApiServiceService, private router:Router  ) { }

  ngOnInit(): void {
  }

  orderRequestForm=new FormGroup({
    
    uid:new FormControl(""),
    email:new FormControl(""),
    furniture:new FormControl(""),
    equipment:new FormControl(""),
    address:new FormControl(""),
    
  })


  get uid(){
    return this.orderRequestForm.get('uid');
  }

  get email(){
    return this.orderRequestForm.get('email');
  }

  get furniture(){
    return this.orderRequestForm.get('furniture');
  }

  get equipment(){
    return this.orderRequestForm.get('equipment');
  }
  get address(){
    return this.orderRequestForm.get('address');
  }


  orderrequest: OrderRequest={


    uid:'',
    
 

    email:'',

    furnitureNeeded:'',

    equipmentNeeded:'',

    shippingAddress:'',

    orderStatus:''




  }
  user:any;
  var:any;
  var1:any;
  Onviewrequest(){
    // console.log(this.orderRequestForm.value);
    console.log(this.orderrequest);

  

        this.apiservice.getAllRegistrations().subscribe((response)=>{
          console.log(response);
    
            this.user= response.find((a:any)=>{
    
            return a.uid===this.orderrequest.uid && a.email=== this.orderrequest.email
    
    
        })


        if(this.user){
      
          this.apiservice.addOrderRequest(this.orderrequest).subscribe(response=>
            {
        
              console.log(response);
            })
            //alert("Order placed Successfully");
            this.var1='Order placed Successfully'
             this.orderRequestForm.reset();
            //  sessionStorage.clear();
            //  this.router.navigate(['login'])
           
        }
        else{
          //alert("Invalid Employee")
      
            //alert("User not found")
            this.var='Invalid Email or ID'
           
       
          

          this.orderRequestForm.reset();
          //this.router.navigate(['login'])
       
        }


 
  
      },err=>{
        alert("Something went wrong")
      })

      
        
  
       //sessionStorage.clear();
      
  
     
  
  


      }

      
}

