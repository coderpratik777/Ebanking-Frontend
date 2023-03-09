import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent {

userdata:UserPassword=new UserPassword;



constructor (private http:HttpClient){

}


  submit(logs:{username:String,oldpassword:String,newpassword:String,confirmpassword:String}){

    let json:any=JSON.stringify(logs);
    const headers= new HttpHeaders({'content-type':'application/json'})
    console.log(this.userdata);
    this.http.post(
      'http://localhost:8080/changepassword',
      this.userdata,{headers:headers}).subscribe((Response)=>{
        // this.userdata=Response;

        
        console.log(Response);
      })

  }
}


export class UserPassword{
  username!:String;
  oldpassword!:String;
  password!:String;
  confirmpassword!:String;
};