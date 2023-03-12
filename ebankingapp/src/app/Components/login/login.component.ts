import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!:string;
  password!:string;

  logindetail!:any;
  customerid!:Number;

  username1!:string;

  apiUrl:string=`http://localhost:8080/login`;
  constructor (private router:Router,private http:HttpClient){

  }

  async login(logs:{username: string, password: string}): Promise<any> {
    try {
      const response = await this.postLoginRequest(logs);
      // Login successful
      this.logindetail=await response;
      if(this.logindetail.status==true){
                localStorage.setItem('customerid',this.logindetail.customerid);
                localStorage.setItem('username1',this.username);
               localStorage.setItem("Useractive","true");
               this.router.navigate(['/dashboard']);
               
        
              }
      return response;
    } catch (error) {
      // Login failed
      console.error('Login failed:', error);
      throw error;
    }
  }

  private postLoginRequest(logs:{username: string, password: string}): Promise<any> {
    return this.http.post<any>(this.apiUrl,logs).toPromise();
  }

}