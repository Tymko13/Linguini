import { Injectable } from '@angular/core';
import {BehaviorSubject, from, switchMap} from 'rxjs';
import {
  Auth, User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut, updateProfile
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => this.userSubject.next(user));
  }

  signUp(email: string, password: string, name: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap((userCredential) =>
        updateProfile(userCredential.user, { displayName: name }).then(() => userCredential)
      )
    );
  }

  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  logout() {
    return signOut(this.auth);
  }

  isLoggedIn() {
    return !!this.userSubject.value;
  }

  get currentUser(): User | null {
    return this.auth.currentUser;
  }

  getUsername() {return this.currentUser?.displayName ?? "User";}
}
