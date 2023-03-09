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
import { CreatenewaccountComponent } from './Components/createnewaccount/createnewaccount.component';
import { FundtransferComponent } from './Components/fundtransfer/fundtransfer.component';
import { TransfermoneyComponent } from './Components/transfermoney/transfermoney.component';
import { NefttransferComponent } from './Components/nefttransfer/nefttransfer.component';
import { ImpstransferComponent } from './Components/impstransfer/impstransfer.component';
import { RtgstransferComponent } from './Components/rtgstransfer/rtgstransfer.component';


const routes:Routes=[
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'forgot password',component:ForgotpasswordComponent},
  {path:'openaccount',component:CreatenewaccountComponent},
  {path:'addbeneficiary',component:AddnewbeneficiaryComponent},
  {path:'fundtransfer',component:FundtransferComponent},
  {path:'transfermoney',component:TransfermoneyComponent},
  {path:'impstransfer',component:ImpstransferComponent}
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
   FundtransferComponent,
   TransfermoneyComponent,
   NefttransferComponent,
   ImpstransferComponent,
   RtgstransferComponent,
   
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
