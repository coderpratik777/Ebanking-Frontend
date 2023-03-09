import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent  implements OnInit{

  accountnumber!:Number;
  name!:String;
  accounttype!:String;
  balance!:Number;


  username=localStorage.getItem('username1');
  constructor(private http: HttpClient)
  {

  }
  account!:any;

  show(){
   
  }

  ngOnInit(): void {
    
    this.http.get(`http://localhost:8080/accountstatement?username=${this.username}`).subscribe((Response)=>{
      this.account=Response;
      
      console.log(Response)
    })
  }
    



  



}
