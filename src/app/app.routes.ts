import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {authGuard} from './_auth/auth.guard';
import {TranslateComponent} from './translate/translate.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: 'translate', component: TranslateComponent},
  {path: 'auth', component: LoginComponent},
  {path: '**', redirectTo: 'home'}
];
