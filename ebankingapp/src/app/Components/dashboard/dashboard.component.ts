import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  status:any=localStorage.getItem("Useractive");
  constructor(public router:Router){

  }
  


}
