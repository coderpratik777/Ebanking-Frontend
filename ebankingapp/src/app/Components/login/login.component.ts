import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!:string;
  password!:string;

  logindetail!:any;
  customerid!:Number;

  username1!:string;
  
  constructor (private http:HttpClient){

  }

  login(logs:{username:string,password:string}){
    

    let json:any=JSON.stringify(logs);
    const headers= new HttpHeaders({'content-type':'application/json'})
    
    this.http.post(
      'http://localhost:8080/login',
      json,{headers:headers}).subscribe((Response)=>{
        this.logindetail=Response;
        console.log(Response);
      })

      localStorage.setItem('customerid',this.logindetail.customerid);
      localStorage.setItem('username1',this.username);
    //  let cust:Number=localStorage.getItem('customerid');
    console.log(localStorage.getItem('customerid'));

    console.log(localStorage.getItem('username1'));
      
  }

  

}
