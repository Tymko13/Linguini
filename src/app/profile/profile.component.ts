import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_auth/auth.service';
import { AvatarService } from '../_services/avatar.service';
import { UserService } from '../_services/user.service';
import { ToastService } from '../_services/toast.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, FormsModule]
})
export class ProfileComponent implements OnInit {
  router = inject(Router);
  auth = inject(AuthService);
  avatarService = inject(AvatarService);
  userService = inject(UserService);
  toast = inject(ToastService);

  username = this.userService.username();
  editingName = false;

  parts = [
    { key: 'backgrounds', label: 'background' },
    { key: 'skintones', label: 'skin' },
    { key: 'eyes', label: 'eyes' },
    { key: 'hair', label: 'hair' },
    { key: 'clothes', label: 'clothes' },
    { key: 'accessories', label: 'accessories' }
  ];

  selectedPart: string = 'backgrounds';
  options$: Observable<string[]> | null = null;

  selectedParts: Record<string, string> = {}; // локальні зміни для збереження

  private avatarGetters: Record<string, () => Observable<string[]>> = {
    backgrounds: () => this.avatarService.backgrounds,
    skintones: () => this.avatarService.skintones,
    eyes: () => this.avatarService.eyes,
    hair: () => this.avatarService.hair,
    clothes: () => this.avatarService.clothes,
    accessories: () => this.avatarService.accessories,
  };

  ngOnInit() {
    this.loadOptions('backgrounds');
    this.userService.initializeDefaultAvatar(); // 👉 встановити дефолтний аватар якщо треба
  }

  toggleEditName() {
    this.editingName = !this.editingName;
  }

  selectPart(partKey: string) {
    this.selectedPart = partKey;
    this.loadOptions(partKey);
  }

  loadOptions(partKey: string) {
    this.options$ = this.avatarGetters[partKey]();
  }

  selectImage(url: string) {
    this.avatarService.setPart(this.selectedPart, url); // локальне оновлення для профілю
    this.selectedParts[this.selectedPart] = url;        // збереження для кнопки Save
  }

  saveChanges() {
    const trimmed = this.username?.trim();
    if (!trimmed || trimmed.length === 0) {
      alert('Name must contain at least one character.');
      this.editingName = true;
      return;
    }

    this.userService.setUsername(trimmed);
    this.editingName = false;

    if (this.selectedParts['backgrounds']) {
      this.userService.setBackground(this.selectedParts['backgrounds']);
    }
    if (this.selectedParts['skintones']) {
      this.userService.setSkin(this.selectedParts['skintones']);
    }
    if (this.selectedParts['eyes']) {
      this.userService.setEyes(this.selectedParts['eyes']);
    }
    if (this.selectedParts['hair']) {
      this.userService.setHair(this.selectedParts['hair']);
    }
    if (this.selectedParts['clothes']) {
      this.userService.setClothes(this.selectedParts['clothes']);
    }
    if (this.selectedParts['accessories']) {
      this.userService.setAccessories(this.selectedParts['accessories']);
    }

    this.toast.show('Changes saved successfully!', true);
  }

  goBack() {
    this.router.navigate(['/translate']);
  }
}
