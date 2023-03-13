import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-createnewaccount',
  templateUrl: './createnewaccount.component.html',
  styleUrls: ['./createnewaccount.component.css']
})
export class CreatenewaccountComponent {

  customerData:CustomerData=new CustomerData();
  createAccountStatus!:any;

  constructor(private router:Router,private http:HttpClient,private datePipe:DatePipe){

  }
  submit(){
    let url=`http://localhost:8080/createaccount`;
    // let data=JSON.stringify(this.customerData);
    this.datePipe.transform(this.customerData.dateOfBirth, 'yyyy/MM/dd')
    console.log(this.customerData);
    this.http.post(url,this.customerData).subscribe((response)=>{
      console.log(response);
      this.createAccountStatus=response;
      if(this.createAccountStatus.status){
        alert("Form is submitted Admin will verify soon please check email for the Account number");
        this.router.navigate(['']);
      }
    })
}


}

export class CustomerData{
  firstName!:String;
  lastName!:String;
  fathersName!:String;
  email!:string;
  dateOfBirth!:Date;
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