import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Login } from './pages/login/login';
import { Explorar } from './pages/explorar/explorar';
import { GroupPage } from './pages/group-page/group-page';
import { Books } from './pages/books/books';
import { AuthGuard } from './guards/auth-guard';
import { Cadastro } from './pages/cadastro/cadastro';
import { MembershipPage } from './pages/membership-page/membership-page';
import { ComprarLivro } from './pages/comprar-livro/comprar-livro';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'home', component: Landing },
  { path: 'login', component: Login },
  { path: 'explorar', component: Explorar, canActivate: [AuthGuard]},
  { path: 'grupo/:id', component: GroupPage, canActivate: [AuthGuard]},
  { path: 'acervo', component: Books},
  { path: 'cadastro', component: Cadastro},
  { path: 'membership', component: MembershipPage},
  { path: 'comprar-livro/:id', component: ComprarLivro},
  { path: '**', redirectTo: '' }
];