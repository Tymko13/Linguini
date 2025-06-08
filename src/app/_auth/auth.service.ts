import { Injectable, signal, computed, effect } from '@angular/core';
import { Auth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, signOut, User } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { getStorage, ref } from 'firebase/storage';
import { from, switchMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSignal = signal<User | null | undefined>(undefined); // undefined: loading, null: not logged in
  readonly user = computed(() => this.userSignal());

  constructor(private auth: Auth, private firestore: Firestore) {
    onAuthStateChanged(this.auth, (user) => {
      this.userSignal.set(user);
    });
  }

  signUp(email: string, password: string, name: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap(userCredential =>
        updateProfile(userCredential.user, { displayName: name }).then(() => userCredential)
      ),
      switchMap(userCredential => {
        const userDocRef = doc(this.firestore, 'users', userCredential.user.uid);

        const storage = getStorage();
        const backgroundRef = ref(storage, 'avatar/background/b_blue.PNG');
        const skinRef = ref(storage, 'avatar/skintones/s_default.PNG');

        const defaultUserData = {
          name: name,
          avatar: {
            a_background: backgroundRef.toString(),
            b_skin: skinRef.toString(),
            c_eyes: '',
            d_clothes: '',
            e_accessories: ''
          },
          unlocks: []
        };

        return from(setDoc(userDocRef, defaultUserData)).pipe(
          switchMap(() => from([userCredential]))
        );
      })
    );
  }

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    return from(signOut(this.auth));
  }

  isLoggedIn() {
    return !!this.userSignal();
  }
}

