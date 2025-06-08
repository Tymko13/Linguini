import {CanActivateFn, Router} from '@angular/router';
import {Auth, onAuthStateChanged} from '@angular/fire/auth';
import {inject} from '@angular/core';
import {ToastService} from '../_services/toast.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);
  const toast = inject(ToastService);
  return new Promise(resolve => {
    onAuthStateChanged(auth, user => {
      if (user) {
        resolve(true);
      } else {
        router.navigate(['/auth']);
        toast.show("Please login to access that page.", false);
        resolve(false);
      }
    });
  });
}
