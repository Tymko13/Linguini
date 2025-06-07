import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../_auth/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { ToastService } from '../_services/toast.service';
import { ImageService } from '../_services/image.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  authService = inject(AuthService);
  router = inject(Router);
  toast = inject(ToastService);
  imageService = inject(ImageService);

  avatarUrl: string = '';

  ngOnInit(): void {
    const savedAvatar = localStorage.getItem('userAvatar') ?? 'skintones/s_default.PNG';

    this.imageService.getAvatar(savedAvatar).then(url => {
      this.avatarUrl = url;
    });
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  onLogout() {
    this.authService.logout().subscribe({
      next: () => { this.router.navigate(['auth']) },
      error: () => { this.toast.show("УПС, схоже ви тут на завжди!", false) }
    });
  }
}
