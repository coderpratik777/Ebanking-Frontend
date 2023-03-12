import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accountstatement',
  templateUrl: './accountstatement.component.html',
  styleUrls: ['./accountstatement.component.css']
})
export class AccountstatementComponent implements OnInit {

  accountnumber!: Number;
  name!: String;
  accounttype!: String;
  balance!: Number;

  transetail!:any;

  username = localStorage.getItem('username1');
  constructor(private http: HttpClient) {
  }
  account!: any;
  trans!: any;
  customerid: any = localStorage.getItem('customerid');
  s: boolean = false;
  transdetail:TransInfo=new TransInfo;
  json!:any;
  trans2!:any;

  ngOnInit(): void {

    this.http.get(`http://localhost:8080/accountstatement?username=${this.username}`).subscribe((Response) => {
      this.account = Response;
      console.log(this.customerid);
      // console.log(Response)
    })
    this.http.get(`http://localhost:8080/gettransaction?customerid=${this.customerid}`).subscribe((response) => {
      this.trans = response;

      // console.log(response)
    })



  }

  showmini() {

    this.s = true;
    console.log(this.s);


  }

   submit(){
    this.s = true;
    console.log(this.s);

    const headers= new HttpHeaders({'content-type':'application/json'})
    this.transdetail.customerid=this.customerid;
 
    console.log(this.transdetail);


      let url=`http://localhost:8080/toandfromtrans`;
    let body=JSON.stringify(this.transdetail);
    console.log(body);

    this.http.post(url,this.transdetail).subscribe((response)=>{

      this.trans2=response;
      console.log(response);

    })

   }




}


export class TransInfo{
  datefrom!:Date;
  dateto!:Date;
  customerid!:Number;
};
