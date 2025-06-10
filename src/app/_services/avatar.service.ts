import {Injectable} from '@angular/core';
import { getDownloadURL, getStorage, listAll, ref } from '@angular/fire/storage';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  private storage = getStorage();

  backgrounds: Observable<string[]>;
  skintones: Observable<string[]>;
  eyes: Observable<string[]>;
  hair: Observable<string[]>;
  clothes: Observable<string[]>;
  accessories: Observable<string[]>;

  async getBackgrounds() {
    const bgRef = ref(this.storage, 'avatar/backgrounds/');
    return from(listAll(bgRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item)))
    ));
  }

  constructor() {
    const skinsRef = ref(this.storage, 'avatar/skintones/');
    this.skintones = from(listAll(skinsRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item)))
    ));

    const bgRef = ref(this.storage, 'avatar/backgrounds/');
    this.backgrounds = from(listAll(bgRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item)))
    ));

    const eyesRef = ref(this.storage, 'avatar/eyes/');
    this.eyes = from(listAll(eyesRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item)))
    ));

    const clothesRef = ref(this.storage, 'avatar/clothes/');
    this.clothes = from(listAll(clothesRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item)))
    ));

    const accRef = ref(this.storage, 'avatar/accessories/');
    this.accessories = from(listAll(accRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item)))
    ));

    const hairRef = ref(this.storage, 'avatar/hair/');
    this.hair = from(listAll(hairRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item)))
    ));
  }
}
