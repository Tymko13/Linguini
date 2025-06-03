import {CanActivateFn, Router} from '@angular/router';
import {Auth, onAuthStateChanged} from '@angular/fire/auth';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);
  return new Promise(resolve => {
    onAuthStateChanged(auth, user => {
      if (user) {
        resolve(true);
      } else {
        router.navigate(['/translate']);
        resolve(false);
      }
    });
  });
}
