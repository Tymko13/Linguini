import {Injectable} from '@angular/core';
import {getDownloadURL, getStorage, listAll, ref} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  storage = getStorage();

  get avatars() {
    const avatarsRef = ref(this.storage, 'avatar/');

    return listAll(avatarsRef).then(async (res) => {
      return await Promise.all(
        res.items.map((itemRef) => getDownloadURL(itemRef))
      );
    });
  }

  getAvatar(avatarUrl: string) {
    const avatarsRef = ref(this.storage, 'avatar/' + avatarUrl);
    return getDownloadURL(avatarsRef).then(async (res) => {return res;});

  }
}
