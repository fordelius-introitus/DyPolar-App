import { Routes } from '@angular/router';
import { Landing } from './paginas/landing/landing';
import { Login } from './paginas/login/login';
import { Explorar } from './paginas/explorar/explorar';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'home', component: Landing },
  { path: 'login', component: Login },
  { path: 'explorar', component: Explorar },
  { path: '**', redirectTo: '' }
];