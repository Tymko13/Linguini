import {
  Component,
  computed,
  inject, OnInit,
  signal
} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../_auth/auth.service';
import {AvatarService} from '../_services/avatar.service';
import {UserService} from '../_services/user.service';
import {ToastService} from '../_services/toast.service';
import {CommonModule, NgFor, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

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

  ngOnInit() {
    setTimeout(() => this.editedUsername = this.userService.username());
  }
  editedUsername = '';
  editedAvatar = [
    '',
    '',
    '',
    '',
    '',
    ''
  ]

  buttons = [
    'Backgrounds',
    'Skins',
    'Eyes',
    'Hair',
    'Clothes',
    'Accessories'
  ];

  selectedPart = signal(0);
  options = computed(() => {
    switch (this.selectedPart()) {
      case 0:
        return this.avatarService.backgrounds;
      case 1:
        return this.avatarService.skintones;
      case 2:
        return this.avatarService.eyes;
      case 3:
        return this.avatarService.hair;
      case 4:
        return this.avatarService.clothes;
      case 5:
      default:
        return this.avatarService.accessories;
    }
  });

  select(url: string) {
    this.editedAvatar[this.selectedPart()] = url;
  }

  saveChanges() {
    const trimmed = this.editedUsername.trim();
    if (trimmed !== this.userService.username()) {
      this.userService.setUsername(trimmed);
    }
    if (this.editedAvatar[0] && this.userService.avatar()[0] !== this.editedAvatar[0]) {
      this.userService.setBackground(this.editedAvatar[0]);
    }
    if (this.editedAvatar[1] && this.userService.avatar()[1] !== this.editedAvatar[1]) {
      this.userService.setSkin(this.editedAvatar[1]);
    }
    if (this.editedAvatar[2] && this.userService.avatar()[2] !== this.editedAvatar[2]) {
      this.userService.setEyes(this.editedAvatar[2]);
    }
    if (this.editedAvatar[3] && this.userService.avatar()[3] !== this.editedAvatar[3]) {
      this.userService.setHair(this.editedAvatar[3]);
    }
    if (this.editedAvatar[4] && this.userService.avatar()[4] !== this.editedAvatar[4]) {
      this.userService.setClothes(this.editedAvatar[4]);
    }
    if (this.editedAvatar[5] && this.userService.avatar()[5] !== this.editedAvatar[5]) {
      this.userService.setAccessories(this.editedAvatar[5]);
    }
    this.toast.show('Changes saved successfully!', true);
  }
}
