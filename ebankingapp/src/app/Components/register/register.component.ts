import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userdata:RegisterForEbanking=new RegisterForEbanking();
  otpResponse:any={
    status:false
  };
  registrationStatus!:any;

  constructor(private http:HttpClient){

  }

  verifyAccount(){
    let url=`http://localhost:8080/verifyaccount?accountnumber=${this.userdata.accountNumber}`;
    this.http.get(url).subscribe((response:any)=>{
      console.log(response);
      this.otpResponse=response;
    })
  }
  register(){
    console.log("register clicked")
    console.log(this.userdata);
    let url=`http://localhost:8080/registerebanking`;
    let body=JSON.stringify(this.userdata);
    this.http.post(url,body,{
      headers:{
        "Content":"appliaction/json"
      }
    }).subscribe((response)=>{
      console.log(response);
      this.registrationStatus=response;

    })

  }

 
 
}

export class RegisterForEbanking{

  accountNumber!:number;
  otp!:number;
  password!:string;
  username!:string;
  confirmPassword!:string;
  transactionPin!:number;
  confirmTransactionPin!:number;


}