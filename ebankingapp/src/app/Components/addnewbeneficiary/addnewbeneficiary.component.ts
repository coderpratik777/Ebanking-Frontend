import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-addnewbeneficiary',
  templateUrl: './addnewbeneficiary.component.html',
  styleUrls: ['./addnewbeneficiary.component.css']
})
export class AddnewbeneficiaryComponent {

  beneficiaryData:BeneficiaryData=new BeneficiaryData();
  registrationStatus!:any;

  constructor(private http:HttpClient){

  }

  addBeneficiary(){
    if(this.beneficiaryData.saveBeneficiary==true){
      //add the customer id in the beneficiary data from the session storage
      let url=`http://localhost:8080/addbeneficiary`;
      let data=JSON.stringify(this.beneficiaryData);
      this.http.post(url,data,{
        headers:{
          "Content":"appliaction/json"
        }
      }).subscribe((response)=>{
        console.log(response);
        this.registrationStatus=response;
  
      })
    }
  }

}

export class BeneficiaryData{
  accountNumber!:number;
  customerId!:number;
  name!:string;
  nickName!:string;
  saveBeneficiary!:boolean;

}