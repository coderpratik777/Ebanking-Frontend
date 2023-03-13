import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {


  username!:string;
  password!:string;

  logindetail!:any;
  customerid!:Number;

  username1!:string;

  apiUrl:string=`http://localhost:8080/adminlogin`;
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
               this.router.navigate(['/admindashboard']);
               
        
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
