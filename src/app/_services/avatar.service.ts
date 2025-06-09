import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage, listAll, ref } from '@angular/fire/storage';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  private storage = getStorage();

  private selectedParts: Record<string, string> = {};

  constructor() {
    this.loadAvatarState(); // завантаження збереженого стану при ініціалізації
  }

  // Геттери для завантаження з Firebase
  get skintones() {
    const skinsRef = ref(this.storage, 'avatar/skintones/');
    return from(listAll(skinsRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item)))
    ));
  }

  get backgrounds() {
    const bgRef = ref(this.storage, 'avatar/backgrounds/');
    return from(listAll(bgRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item)))
    ));
  }

  get eyes() {
    const eyesRef = ref(this.storage, 'avatar/eyes/');
    return from(listAll(eyesRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item)))
    ));
  }

  get clothes() {
    const clothesRef = ref(this.storage, 'avatar/clothes/');
    return from(listAll(clothesRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item)))
    ));
  }

  get accessories() {
    const accRef = ref(this.storage, 'avatar/accessories/');
    return from(listAll(accRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item)))
    ));
  }

  get hair() {
    const hairRef = ref(this.storage, 'avatar/hair/');
    return from(listAll(hairRef).then(listResults =>
      Promise.all(listResults.items.map(item => getDownloadURL(item)))
    ));
  }

  // Метод для вибору зображення для певної частини
  setPart(part: string, url: string): void {
    this.selectedParts[part] = url;
    this.saveAvatarState();
  }

  // Повертає обрані шари для аватара в правильному порядку
  get avatar(): string[] {
    return [
      this.selectedParts['backgrounds'],
      this.selectedParts['skintones'],
      this.selectedParts['eyes'],
      this.selectedParts['hair'],
      this.selectedParts['clothes'],
      this.selectedParts['accessories'],
    ].filter(Boolean);
  }

  // Збереження стану в localStorage
  private saveAvatarState(): void {
    localStorage.setItem('avatarParts', JSON.stringify(this.selectedParts));
  }

  // Завантаження стану з localStorage
  private loadAvatarState(): void {
    const saved = localStorage.getItem('avatarParts');
    if (saved) {
      try {
        this.selectedParts = JSON.parse(saved);
      } catch (e) {
        console.error('Error parsing saved avatar parts:', e);
      }
    }
  }
}
