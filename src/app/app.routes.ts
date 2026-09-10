import { Routes } from '@angular/router';
import { LandingComponent } from './paginas/landing/landing';
import { LoginComponent } from './paginas/login/login';

export const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'login' }
];