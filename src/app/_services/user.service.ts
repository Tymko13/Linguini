import {computed, effect, inject, Injectable, signal} from '@angular/core';
import {AuthService} from '../_auth/auth.service';
import {doc, docData, Firestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  auth = inject(AuthService);
  firestore = inject(Firestore);

  private userRef = computed(() => {
    return this.auth.isLoggedIn() ? doc(this.firestore, 'users', this.auth.user()?.uid!) : null;
  });
  readonly userData = signal<any>(null);

  constructor() {
    effect(() => {
      const ref = this.userRef();
      if (ref) {
        docData(ref).subscribe(data => {
          this.userData.set(data);
        });
      }
    })
  }

  get username() {
    return this.userData()?.name ?? null;
  }

  get avatar() {
    return this.userData()?.avatar ?? null;
  }
}
