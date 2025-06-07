import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private router: Router, private auth: AuthService) {}

  get username() {
    return this.auth.getUsername();
  }

  goBack() {
    this.router.navigate(['/translate']);
  }

  editProfile() {
    alert('Тут буде редагування профілю');
  }

  editAvatar() {
    alert('Тут буде редагування аватара');
  }
}
