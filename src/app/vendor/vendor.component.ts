import { Component, Input, OnInit } from '@angular/core';
import { OrderRequest } from '../Models/OrderRequest.model';
import { VendorTable } from '../Models/VendorTable.model';
import { ApiServiceService } from '../Services/api-service.service';
import {FormBuilder, FormGroup} from '@angular/forms'
import { RequestDetail } from './vendor.model';
import { OrderDetail } from '../Models/OrderDetail.model';
import { SendMail } from '../Models/SendMail.model';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css'],
  
})
export class VendorComponent implements OnInit {

  formValue !: FormGroup
  requestDetailObj :RequestDetail=new RequestDetail();

  orderdetail: OrderDetail={


    uid:'',
    
 

    email:'',

    furnitureNeeded:'',

    equipmentNeeded:'',

    shippingAddress:'',

     deliveryDate:''




  }
  

  
  approvedrequests: VendorTable[] = [];
  

  constructor(private apiservice:ApiServiceService, private formbuilder:FormBuilder) { }      



  ngOnInit(): void {

   this.getApprovedRequest();

   this.formValue=this.formbuilder.group({

    uid: [''],
    email:[' '],
    furnitureNeeded:[''],
    equipmentNeeded:[''],
    shippingAddress:[''],
    deliveryDate:['']


   })


  }

  data2:any;
  sendmail: SendMail={

    email: '',
    subject: '',
   deliveryDate :'',
   body:''


  }

  email:any;
  data:any;
  data3:any;

  onSubmit(){

   this.requestDetailObj.uid=this.formValue.value.uid;
   this.requestDetailObj.email=this.formValue.value.email;
   this.requestDetailObj.furnitureNeeded=this.formValue.value.furnitureNeeded;
   this.requestDetailObj.equipmentNeeded=this.formValue.value.equipmentNeeded;
   this.requestDetailObj.shippingAddress=this.formValue.value.shippingAddress;
   this.requestDetailObj.deliveryDate=this.formValue.value.deliveryDate;

   console.log(this.requestDetailObj);

   this.apiservice.addOrderDetail(this.requestDetailObj).subscribe((response)=>{
    console.log(response);
    
    let ref=document.getElementById('cancel');
    ref?.click();


    this.data=response;
    this.sendmail.email=this.formValue.value.email;
    this.sendmail.deliveryDate=this.formValue.value.deliveryDate;
    this.sendmail.subject=" Full Order Detail";
    this.sendmail.body=" hello," +" " + this.requestDetailObj.uid + "  " + "your order that consist of " +" "+ this.requestDetailObj.furnitureNeeded+ "  "+"and"+ " " +this.requestDetailObj.equipmentNeeded+ "  " + "will be delivered to"+ "  " +this.requestDetailObj.shippingAddress+ " "+ "on" +" " + this.requestDetailObj.deliveryDate;

    //email
    this.SendEmail(this.data);
    
   
    this.data2=this.requestDetailObj.uid;
  // console.log(this.data2);
    this.deleteonSetDate(this.data2)
   
    
   })
   

  }

  deleteonSetDate(uid:string){
    
    this.apiservice.deleteVendorTable(uid).subscribe((response) => {
     this.getApprovedRequest();
    });
    }

    SendEmail(sendmail:string){
      this.apiservice.SendMail(this.sendmail).subscribe((res)=>{
        console.log(res);
        
        this.email=this.data.email;
        
        // this.subject='Order Detail';
        // this.deliveryDate=this.data.deliveryDate;

        //this.email=res.email
        
      })
    }

 


  onEdit(a:any){

   this.formValue.controls['uid'].setValue(a.uid);
  
    
    this.formValue.controls['email'].setValue(a.email);
    this.formValue.controls['furnitureNeeded'].setValue(a.furnitureNeeded);
    this.formValue.controls['equipmentNeeded'].setValue(a.equipmentNeeded);
    this.formValue.controls['shippingAddress'].setValue(a.shippingAddress);


  }


  getApprovedRequest(){

   
    this.apiservice.getAllVendorTables().subscribe((response)=>{

      console.log(response);

      this.approvedrequests=response;
      
    })





  }

 



}
