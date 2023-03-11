import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { AddnewbeneficiaryComponent } from './Components/addnewbeneficiary/addnewbeneficiary.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';


import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Components/home/home.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { AccountstatementComponent } from './Components/accountstatement/accountstatement.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CreatenewaccountComponent } from './Components/createnewaccount/createnewaccount.component';

import { UserprofileComponent } from './Components/userprofile/userprofile.component';
import { NewpasswordComponent } from './Components/newpassword/newpassword.component';
import { TransfermoneyComponent } from './Components/transfermoney/transfermoney.component';
import { FundtransferComponent } from './Components/fundtransfer/fundtransfer.component';
import { ImpstransferComponent } from './Components/impstransfer/impstransfer.component';

import { NefttransferComponent } from './Components/nefttransfer/nefttransfer.component';
import { RtgstransferComponent } from './Components/rtgstransfer/rtgstransfer.component';
import { TransactionreceiptComponent } from './Components/transactionreceipt/transactionreceipt.component';



const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'forgotspassword',component:ForgotpasswordComponent},
  {path:'accountstatement',component:AccountstatementComponent},
  
  {path:'openaccount',component:CreatenewaccountComponent},
  {path:'addbeneficiary',component:AddnewbeneficiaryComponent},

  {path:'userprofile',component:UserprofileComponent},
  {path:'newpassword',component:NewpasswordComponent},

  {path:'fundtransfer',component:FundtransferComponent},
  {path:'transfermoney',component:TransfermoneyComponent},
  {path:'impstransfer',component:ImpstransferComponent},
  {path:'transactionreceipt',component:TransactionreceiptComponent},

]


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ForgotpasswordComponent,
   AccountstatementComponent,
   CreatenewaccountComponent,

   UserprofileComponent,
   NewpasswordComponent,

   FundtransferComponent,
   TransfermoneyComponent,
   NefttransferComponent,
   ImpstransferComponent,
   RtgstransferComponent,
   NavbarComponent,
   TransactionreceiptComponent,

   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
