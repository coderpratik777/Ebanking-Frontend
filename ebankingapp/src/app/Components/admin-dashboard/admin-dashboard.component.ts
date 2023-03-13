import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  customerid!:Number;
  userstatus!:any;
  stat:any=null;
  stat1: any= null;
  constructor (private http:HttpClient){

  }

  
  ngOnInit(): void{
 
  this.http.get(`http://localhost:8080/customer`).subscribe((Response)=>{
    this.userstatus=Response;
   
    console.log(Response)
    
  })
  }

  submit(id:Number){
      this.ngOnInit();
    this.http.get(`http://localhost:8080/changestatus?customerid=${id}`).subscribe((response)=>{
      this.stat=response;
      
      console.log(this.stat)
      
    })

  }

  

}
