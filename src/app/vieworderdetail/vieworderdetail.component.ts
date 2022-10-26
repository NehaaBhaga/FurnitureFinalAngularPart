import { Component, OnInit } from '@angular/core';
import { OrderDetail } from '../Models/OrderDetail.model';
import { ApiServiceService } from '../Services/api-service.service';

@Component({
  selector: 'app-vieworderdetail',
  templateUrl: './vieworderdetail.component.html',
  styleUrls: ['./vieworderdetail.component.css']
})
export class VieworderdetailComponent implements OnInit {

  orderdetail: OrderDetail[]=[]
  constructor(private apiservice:ApiServiceService) { }

  ngOnInit(): void {
 
    this.getOrderDetail();
    

  }

  getOrderDetail(){

    this.apiservice.getOrderDetail().subscribe(response=>{
      this.orderdetail=response;
    })
  }

  



}
