import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  username!:string;
  otp!:BigInteger;

  

  constructor(private http: HttpClient){ }

  generate(){

    this.http.get("http://localhost:8080/forgotpassword").subscribe((Response)=>{
   
      
      console.log(Response)
    })


  }

}
