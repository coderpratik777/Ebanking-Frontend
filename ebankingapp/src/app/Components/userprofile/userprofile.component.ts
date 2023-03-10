import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit{

  // customerid!:Number;
  addhar!:Number;

  firstname!:String;
  fathername!:String;
  lastname!:String;
  email!:String;
  address!:String;

  customer!:any;
  constructor (private http:HttpClient){
  }

  customerid=localStorage.getItem('customerid');
  

  ngOnInit(): void {
    console.log(this.customerid);
    this.http.get(`http://localhost:8080/userprofile?customerid=1002`).subscribe((Response)=>{
      this.customer=Response;
      console.log(Response);
    })
  }

}
