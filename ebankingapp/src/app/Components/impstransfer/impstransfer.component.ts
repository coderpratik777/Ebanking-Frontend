import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-impstransfer',
  templateUrl: './impstransfer.component.html',
  styleUrls: ['./impstransfer.component.css']
})
export class ImpstransferComponent {

  transferData:ImpsTransferData=new ImpsTransferData();
  pinStatus:number=1;
  verifypin:any=null;
  tpin!:number;
  accountData!:any;
  transactionStatus!:any;


  constructor (private http:HttpClient){

  }

  verifyTpin(){
    //check the tpin of the cusotmer from the account table 
    console.log(this.pinStatus)
    if(this.tpin==1234){
      this.pinStatus=3;
      this.verifypin=true;
      console.log("in pin");
    }
    else{
      this.pinStatus=2;
      this.verifypin=false;
    }

  }

  fetchAccount(){
    //fetch account number by customerid from the localstorage
  }
  transaction(){
    
    if(this.pinStatus==1){

      this.pinStatus=2;
    }
    else if(this.pinStatus==2){
      this.pinStatus=0;
    }
    else if(this.pinStatus==3){
      console.log("transaction initiated");
      let url=`http://localhost:8080/transaction`;
      let data=JSON.stringify(this.transferData);

      this.http.post(url,data,{
        headers:{
          "Content":"appliaction/json"
        }
      }).subscribe((response)=>{
        console.log(response);
        this.transactionStatus=response;
  
      })

    }


  }

}

export class ImpsTransferData{
  fromAccount:number=12;
  toAccount!:number;
  amount!:number;
  transactionDate:Date=new Date();
  remark!:string;
  transactionType:string="IMPS";
}