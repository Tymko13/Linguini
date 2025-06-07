import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {authGuard} from './_auth/auth.guard';
import {TranslateComponent} from './translate/translate.component';
import {LoginComponent} from './login/login.component';
import {TextsComponent} from './texts/texts.component';
import {TestsComponent} from './tests/tests.component';
import { ProfileComponent } from './profile/profile.component';


export const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: 'translate', component: TranslateComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  {path: 'auth', component: LoginComponent},
  {path: 'texts', component: TextsComponent},
  {path: 'tests', component: TestsComponent},
  {path: '**', redirectTo: 'home'}
];
