import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnewbeneficiary',
  templateUrl: './addnewbeneficiary.component.html',
  styleUrls: ['./addnewbeneficiary.component.css']
})
export class AddnewbeneficiaryComponent implements OnInit {

  beneficiaryData:BeneficiaryData=new BeneficiaryData();
  registrationStatus!:any;

  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.beneficiaryData.customerId=localStorage.getItem("customerid");
    console.log(this.beneficiaryData)
  }

  addBeneficiary(){
      //add the customer id in the beneficiary data from the session storage
      console.log(this.beneficiaryData);
      let url=`http://localhost:8080/addbeneficiary`;
      this.http.post(url,this.beneficiaryData).subscribe((response)=>{
        console.log(response);
        this.registrationStatus=response;
  
      })
    
  }

}

export class BeneficiaryData{
  accountNumber!:number;
  customerId!:any;
  name!:string;
  nickName!:string;

}