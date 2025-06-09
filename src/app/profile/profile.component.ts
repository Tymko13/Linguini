import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_auth/auth.service';
import { AvatarService } from '../_services/avatar.service';
import { UserService } from '../_services/user.service';
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
    this.avatarService.setPart(this.selectedPart, url);
  }

  saveChanges() {
    this.userService.setUsername(this.username);

  }

  goBack() {
    this.router.navigate(['/translate']);
  }
}
