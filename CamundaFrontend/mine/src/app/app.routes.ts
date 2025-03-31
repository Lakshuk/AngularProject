import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OtpComponent } from './otp/otp.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { CibilComponent } from './cibil/cibil.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DocumentComponent } from './document/document.component';
import { ApprovaldecisionComponent } from './approvaldecision/approvaldecision.component';
import { ExtradocComponent } from './extradoc/extradoc.component';
import { SeniordocComponent } from './seniordoc/seniordoc.component';

export const routes: Routes = [
    {path:'',component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'otp',component:OtpComponent},
    {path:'address',component:UserdetailsComponent},
    {path:'cibil',component:CibilComponent},
    {path:'document',component:DocumentComponent},
    {path:'decision',component:ApprovaldecisionComponent},
    {path:'finalapproval',component:ExtradocComponent},
    {path:'senior',component:SeniordocComponent}
];
