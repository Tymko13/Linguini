import {computed, effect, Injectable, Signal, signal} from '@angular/core';
import {AuthService} from '../_auth/auth.service';
import {
  doc,
  docData,
  Firestore,
  updateDoc,
  arrayUnion,
  setDoc,
  collectionData,
  collection, getDoc
} from '@angular/fire/firestore';
import {Topic} from '../_models/topic';
import {from} from 'rxjs';
import {ToastService} from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userRef: any;
  readonly userData = signal<any>(null);

  constructor(
    private auth: AuthService,
    private firestore: Firestore,
    private toast: ToastService
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

  currency = computed(() => {
    return this.userData()?.currency ?? 0;
  });

  unlocks = computed(() => {
    return this.userData()?.unlocks ?? [];
  });

  avatar = computed(() => {
    const avatar = this.userData()?.avatar ?? null;
    if (avatar) {
      return [
        avatar.background,
        avatar.skin,
        avatar.eyes,
        avatar.hair,
        avatar.clothes,
        avatar.accessories
      ];
    } else return [];
  });

  topics = computed(() => {
    if(this.userRef()) {
      return collectionData(collection(this.userRef(), 'topics'), {idField: 'name'});
    }
    return from([]);
  });

  unlock(url: string) {
    if (this.userRef()) {
      updateDoc(this.userRef()!, {unlocks: arrayUnion(url)});
    }
  }

  setUsername(username: string) {
    if (this.userRef()) {
      updateDoc(this.userRef()!, {name: username});
    }
  }

  setBackground(backgroundUrl: string) {
    if (this.userRef()) {
      updateDoc(this.userRef()!, {'avatar.background': backgroundUrl});
    }
  }

  setSkin(skinUrl: string) {
    if (this.userRef()) {
      updateDoc(this.userRef()!, {'avatar.skin': skinUrl});
    }
  }

  setEyes(eyesUrl: string) {
    if (this.userRef()) {
      updateDoc(this.userRef()!, {'avatar.eyes': eyesUrl});
    }
  }

  setClothes(clothesUrl: string) {
    if (this.userRef()) {
      updateDoc(this.userRef()!, {'avatar.clothes': clothesUrl});
    }
  }

  setHair(hairUrl: string) {
    if (this.userRef()) {
      updateDoc(this.userRef()!, {'avatar.hair': hairUrl});
    }
  }

  setAccessories(accessoriesUrl: string) {
    if (this.userRef()) {
      updateDoc(this.userRef()!, {'avatar.accessories': accessoriesUrl});
    }
  }

  addTopic(topic: Topic) {
    if (this.userRef()) {
      const topicRef = doc(this.userRef()!, 'topics', topic.name);
      setDoc(topicRef, {words: arrayUnion(...topic.words), completion: 0, claimed: [0,0,0]});
    }
  }

  async changeCurrency(currency: number) {
    if(this.userRef()) {
      const userSnap = await getDoc(this.userRef());
      if (!userSnap.exists()) return;
      // @ts-ignore
      const current = userSnap.data().currency;
      if(current + currency < 0) { return false;}
      updateDoc(this.userRef(), {currency: current + currency});
      return true;
    }
    return false;
  }

  async unlockPrizes(num: number, topic: string, successRate: number, totalRate: number) {
    const topicRef = doc(this.userRef()!, 'topics', topic);
    if(this.userRef()) {
      if(totalRate <= successRate) {
        updateDoc(topicRef, {completion: 3});
        this.toast.show("Congrats on passing the test fully correctly!", true);
      } else if(successRate * 3 / 2 >= totalRate) {
        updateDoc(topicRef, {completion: 2});
        this.toast.show(`Congrats on passing the test for ${successRate}/${totalRate}!`, true);
      } else if(successRate * 3 >= totalRate) {
        updateDoc(topicRef, {completion: 1});
        this.toast.show(`Congrats on passing the test for ${successRate}/${totalRate}!`, true);
      } else this.toast.show(`Better luck next time.`, false);
    }
  }

  async getPrize(topic: string, prize: number) {
    const topicRef = doc(this.userRef()!, 'topics', topic);
    const topicSnap = await getDoc(topicRef);
    if (!topicSnap.exists()) return;
    const claimed = topicSnap.data()['claimed'];
    claimed[prize] = 1;
    updateDoc(topicRef, {claimed: claimed});
    await this.changeCurrency(10);
  }
}
