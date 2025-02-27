import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResultComponent } from './components/result/result.component';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'result/:value',component: ResultComponent}, 
    {path:'**',redirectTo:''}
];
