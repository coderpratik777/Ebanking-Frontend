import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent {

  accountnumber!:Number;
  name!:String;
  accounttype!:String;
  balance!:Number;

  constructor(private http: HttpClient)
  {

  }

  account!:any;

  show(){
    this.http.get(`http://localhost:8080/accountstatement?accountNumber=${this.accountnumber}`).subscribe((Response)=>{
      this.account=Response;
      
      console.log(Response)
    })



  }



}
