import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-createnewaccount',
  templateUrl: './createnewaccount.component.html',
  styleUrls: ['./createnewaccount.component.css']
})
export class CreatenewaccountComponent {

  customerData:CustomerData=new CustomerData();
  createAccountStatus!:any;

  constructor(private http:HttpClient){

  }
  submit(){
    let url=`http://localhost:8080/createaccount`;
    let data=JSON.stringify(this.customerData);
    this.http.post(url,data,{
      headers:{
        "Content":"appliaction/json,charset=utf-8"
  
      }
    }).subscribe((response)=>{
      console.log(response);
      this.createAccountStatus=response;

    })
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