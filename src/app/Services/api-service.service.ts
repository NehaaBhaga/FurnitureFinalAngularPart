import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDetail } from '../Models/OrderDetail.model';
import { OrderRequest } from '../Models/OrderRequest.model';
import { Registration } from '../Models/Registration.model';
import { SendMail } from '../Models/SendMail.model';
import { VendorTable } from '../Models/VendorTable.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl="https://localhost:7117/api";



  constructor(private http:HttpClient) { }




  //get all Registration--used in admin, login

  getAllRegistrations():Observable<Registration[]>{

    return this.http.get<Registration[]>(this.baseUrl + '/Registrations');


  }

  //post extra registration data
  addRegistration(registration:Registration):Observable<Registration[]>{

    // registration.uid="00000000-0000-0000-0000-000000000000"
    return this.http.post<Registration[]>(this.baseUrl + '/Registrations', registration)
  }




  //get all OrderRequest

  getAllOrderRequests():Observable<OrderRequest[]>{

    return this.http.get<OrderRequest[]>(this.baseUrl + '/OrderRequests');


  }

  //get single uid

  getSingleOrderRequest(uid:string):Observable<OrderRequest[]>{

    
    return this.http.get<OrderRequest[]>(this.baseUrl+ '/OrderRequests' +'/' + uid);
  }

  //post extra order request data
  addOrderRequest(orderrequest:OrderRequest):Observable<OrderRequest[]>{

  
    return this.http.post<OrderRequest[]>(this.baseUrl + '/OrderRequests', orderrequest)
  }
  
  //delete order
  deleteOrderRequest(uid:string):Observable<OrderRequest[]>
  {

    return this.http.delete<OrderRequest[]>(this.baseUrl+ '/OrderRequests'+ '/' + uid)
  }


  

  //get all Vendor Table

  getAllVendorTables():Observable<VendorTable[]>{

    return this.http.get<VendorTable[]>(this.baseUrl+ '/VendorTables');


  }


  //post vendor table data
  addVendorTable(vendortable:VendorTable):Observable<VendorTable[]>{

   
    return this.http.post<VendorTable[]>(this.baseUrl+ '/VendorTables', vendortable);
  }

  //delete vendor table data 
  deleteVendorTable(uid:string):Observable<VendorTable[]>
  {

    return this.http.delete<VendorTable[]>(this.baseUrl+ '/VendorTables' + '/' + uid)
  }

  //post order detail
  addOrderDetail(orderdetail:OrderDetail):Observable<OrderDetail[]>{

   
    return this.http.post<OrderDetail[]>(this.baseUrl + '/OrderDetails', orderdetail);
  }

  //get order detail
  getOrderDetail():Observable<OrderDetail[]>{

    return this.http.get<OrderDetail[]>(this.baseUrl + '/OrderDetails');

  }
  //delete order details with shipping date
  deleteOrderDetail(uid:string):Observable<OrderDetail[]>
  {

    return this.http.delete<OrderDetail[]>(this.baseUrl + '/OrderDetails' + '/' + uid)
  }

  //send mail
  SendMail(sendmail:SendMail): Observable<SendMail[]>
  {

   return this.http.post<SendMail[]>(this.baseUrl  + '/Mail/send', sendmail);
    
  }
  



}
