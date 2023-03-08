import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userdata:RegisterForEbanking=new RegisterForEbanking();

  register(){
    console.log("register clicked")
    console.log(this.userdata);
  }

 
 
}

export class RegisterForEbanking{

  accountNumber!:number;
  password!:string;
  username!:string;
  confirmPassword!:string;
  transactionPin!:number;
  confirmTransactionPin!:number;

}