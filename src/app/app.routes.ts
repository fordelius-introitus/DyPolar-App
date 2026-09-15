import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Login } from './pages/login/login';
import { Explorar } from './pages/explorar/explorar';
import { GroupPage } from './pages/group-page/group-page';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'home', component: Landing },
  { path: 'login', component: Login },
  { path: 'explorar', component: Explorar },
  { path: 'grupo/:id', component: GroupPage},
  { path: '**', redirectTo: '' }
];