import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!:String;
  password!:String;

  logindetail!:any;

  constructor (private http:HttpClient){

  }

  login(logs:{email:string,password:string}){
    

    let json:any=JSON.stringify(logs);
    const headers= new HttpHeaders({'content-type':'application/json'})
    
    this.http.post(
      'http://localhost:8080/login',
      json,{headers:headers}).subscribe((Response)=>{
        this.logindetail=Response;

      })
  
  }

}
