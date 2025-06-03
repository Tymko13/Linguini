import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {authGuard} from './_auth/auth.guard';
import {TranslateComponent} from './translate/translate.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: 'translate', component: TranslateComponent},
  {path: '**', redirectTo: 'home'}
];
