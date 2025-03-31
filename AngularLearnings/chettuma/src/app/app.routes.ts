import { Routes } from '@angular/router';
import { TamilComponent } from './tamil/tamil.component';
import { LakshkaComponent } from './lakshka/lakshka.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
   {path:'',component:DashboardComponent},
   {path:'laksh',component:LakshkaComponent},
   {path:'tamil',component:TamilComponent}
];
