import {computed, effect, Injectable, signal} from '@angular/core';
import {AuthService} from '../_auth/auth.service';
import {doc, docData, Firestore, updateDoc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userRef: any;
  readonly userData = signal<any>(null);

  constructor(
    private auth: AuthService,
    private firestore: Firestore
  ) {
    this.userRef = computed(() => {
      return this.auth.isLoggedIn() ? doc(this.firestore, 'users', this.auth.user()?.uid!) : null;
    });
    effect(() => {
      const ref = this.userRef();
      if (ref) {
        docData(ref).subscribe(data => {
          this.userData.set(data);
        });
      }
    })
  }

  username = computed(() => {
    return this.userData()?.name ?? null;
  });

  avatar = computed(() => {
    const avatar = this.userData()?.avatar ?? null;
    if(avatar) {
      return [
        avatar.background,
        avatar.skin,
        avatar.eyes,
        avatar.clothes,
        avatar.accessories
      ];
    } else return [];
  });

  setUsername(username: string) {
    if(this.userRef()) {
      updateDoc(this.userRef()!, {name: username});
    }
  }

  setBackground(backgroundUrl: string) {
    if (this.userRef()) {
      updateDoc(this.userRef()!, { 'avatar.background': backgroundUrl });
    }
  }

  setSkin(skinUrl: string) {
    if (this.userRef()) {
      updateDoc(this.userRef()!, { 'avatar.skin': skinUrl });
    }
  }

  setEyes(eyesUrl: string) {
    if (this.userRef()) {
      updateDoc(this.userRef()!, { 'avatar.eyes': eyesUrl });
    }
  }

  setClothes(clothesUrl: string) {
    if (this.userRef()) {
      updateDoc(this.userRef()!, { 'avatar.clothes': clothesUrl });
    }
  }

  setAccessories(accessoriesUrl: string) {
    if (this.userRef()) {
      updateDoc(this.userRef()!, { 'avatar.accessories': accessoriesUrl });
    }
  }
}
