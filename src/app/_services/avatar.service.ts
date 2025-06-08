import {Injectable} from '@angular/core';
import {getDownloadURL, getStorage, listAll, ref} from '@angular/fire/storage';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  private storage = getStorage();

  get skintones() {
    const skinsRef = ref(this.storage, 'avatar/skintones/');
    return from(listAll(skinsRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item))))
    );
  }

  get backgrounds() {
    const bgRef = ref(this.storage, 'avatar/backgrounds/');
    return from(listAll(bgRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item))))
    );
  }

  get eyes() {
    const eyesRef = ref(this.storage, 'avatar/eyes/');
    return from(listAll(eyesRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item))))
    );
  }

  get clothes() {
    const clothesRef = ref(this.storage, 'avatar/clothes/');
    return from(listAll(clothesRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item))))
    );
  }

  get accessories() {
    const accRef = ref(this.storage, 'avatar/accessories/');
    return from(listAll(accRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item))))
    );
  }
}
