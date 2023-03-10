import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createnewaccount',
  templateUrl: './createnewaccount.component.html',
  styleUrls: ['./createnewaccount.component.css']
})
export class CreatenewaccountComponent {

  customerData:CustomerData=new CustomerData();
  createAccountStatus!:any;

  constructor(private router:Router,private http:HttpClient){

  }
  submit(){
    let url=`http://localhost:8080/createaccount`;
    // let data=JSON.stringify(this.customerData);
    this.http.post(url,this.customerData).subscribe((response)=>{
      console.log(response);
      this.createAccountStatus=response;
    })
    if(this.createAccountStatus.status===true){
      alert("Form is submitted Admin will verify soon please check email for the Account number");
      this.router.navigate(['/home']);
    }
}


}

export class CustomerData{
  firstName!:String;
  lastName!:String;
  fatherName!:String;
  email!:string;
  datOfBirth!:Date;
  mobileNumber!:String;
  sourceOfIncome!:String;
  grossAnnualIncome!:number;
  addharCardNumber!:number;
  address:Address=new Address();
}
export class Address{
  addressLine1!:string;
  addressLine2!:string;
  landmark!:string;
  pincode!:number;
  city!:number;

}