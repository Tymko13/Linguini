import {Component, inject } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../_auth/auth.service';
import {AvatarService} from '../_services/avatar.service';
import {UserService} from '../_services/user.service';
import {CommonModule, NgFor} from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  imports: [
    NgFor,
    CommonModule
  ],
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  router = inject(Router);
  auth = inject(AuthService);
  avatarService = inject(AvatarService);
  userService = inject(UserService);

  goBack() {
    this.router.navigate(['/translate']);
  }

  editProfile() {
    alert('Тут буде редагування профілю');
  }

  editAvatar() {
    this.router.navigate(['/edit-avatar']);
  }

}
