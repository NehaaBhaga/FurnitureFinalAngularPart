import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { OrderRequest } from '../Models/OrderRequest.model';
import { VendorTable } from '../Models/VendorTable.model';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-vieworderrequest',
  templateUrl: './vieworderrequest.component.html',
  styleUrls: ['./vieworderrequest.component.css'],
})
export class VieworderrequestComponent implements OnInit {
  //singleOrderRequest: any;

  // showApprove !:boolean;
  // showReject!:boolean;



  orderrequest: OrderRequest={


    uid:'',
    
 

    email:'',

    furnitureNeeded:'',

    equipmentNeeded:'',

    shippingAddress:'',

    orderStatus: ''




  }

  orderrequests: OrderRequest[] = [];
  constructor(private apiservice: ApiServiceService) {}

  ngOnInit(): void {
    this.getAllOrderRequest();
  }

  getAllOrderRequest() {
    this.apiservice.getAllOrderRequests().subscribe((response) => {
      console.log(response);

      this.orderrequests = response;
      console.log(this.orderrequests);
      
    });
  }

  delete(uid: string) {
    alert('Are you sure to reject?');

    this.apiservice.deleteOrderRequest(uid).subscribe((response) => {
      this.getAllOrderRequest();
    });

  //   this.showApprove=false;
  // this.showReject=true;

  }

  Approve:any=true
  data2:any;
  
  approve(data: any) {
    alert('Are you sure to approve?');
   // this.Approve=!this.Approve

  
  
//  this.apiservice.addOrderRequest(data).subscribe((response)=>{
//   this.orderrequest.orderStatus=true;
//   console.log(data);
  
//  })


 this.apiservice.addVendorTable(data).subscribe((response)=>{
 


  console.log(data);

  // this.showApprove=true;
  // this.showReject=false;

   this.data2=data.uid;
  // console.log(this.data2);
  this.deleteApprove(this.data2)


 })


 
 
 
//     this.apiservice
//       .addVendorTable(this.singleOrderRequest)
//       .subscribe((response) => {
//         console.log(response);
//       });
    
  }


  deleteApprove(uid:string){
    
  this.apiservice.deleteOrderRequest(uid).subscribe((response) => {
    this.getAllOrderRequest();
  });
  }
}
