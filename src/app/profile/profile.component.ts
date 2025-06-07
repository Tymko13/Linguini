import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_auth/auth.service';
import { ImageService } from '../_services/image.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarUrl: string = '';

  constructor(
    private router: Router,
    private auth: AuthService,
    private imageService: ImageService
  ) {}

  get username() {
    return this.auth.getUsername();
  }

  ngOnInit() {
    const savedPath = localStorage.getItem('userAvatar') ?? 'skintones/s_default.PNG';

    this.imageService.getAvatar(savedPath).then(url => {
      this.avatarUrl = url;
    });
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
