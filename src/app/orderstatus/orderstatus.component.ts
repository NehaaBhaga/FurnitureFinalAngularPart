import { Component, OnInit } from '@angular/core';
import { OrderDetail } from '../Models/OrderDetail.model';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.css']
})
export class OrderstatusComponent implements OnInit {

 
  orderdetail: OrderDetail[]=[];
 

  orderdetail1: OrderDetail={


    uid:'',
    
 

    email:'',

    furnitureNeeded:'',

    equipmentNeeded:'',

    shippingAddress:'',

     deliveryDate:''




  }
  
 
  

  constructor(private apiservice:ApiServiceService) { }

  ngOnInit(): void {
 
    this.getOrderDetail();
    

  }


  

  getOrderDetail(){

    this.apiservice.getOrderDetail().subscribe(response=>{
      this.orderdetail=response;

    })
  }


  

    

   

  //   this.apiservice.getOrderDetail().subscribe((response:any)=>{
  //     console.log(response);

  //     const user= response.find((a:any)=>{
    
  //       return a.email===this.userDetails.email
    
  //     })
  //     if(user){
  //       console.log("neha");
        
  //     }
      
      
  //     // this.orderdetail1=response

  //     // console.log(this.orderdetail1.email);
      
     

  //     // this.d=response;
  //     // this.d1=this.d.email;

     

  //     // console.log(this.d1);
  
     
      

  //       // this.user= response.find((a:any)=>{

  //       // return a.email==this.userDetails.email 

   
        

    
    

  //   // console.log(this.user);

  // })
}



 




  
 
  
  
  

  

 


