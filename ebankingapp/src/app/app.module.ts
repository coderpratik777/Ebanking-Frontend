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


const routes:Routes=[
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'forgot password',component:ForgotpasswordComponent},
  {path:'account statement',component:AccountstatementComponent},
  
  {path:'openaccount',component:CreatenewaccountComponent},
  {path:'addbeneficiary',component:AddnewbeneficiaryComponent}
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
