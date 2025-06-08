import { Component, inject } from '@angular/core';
import {AuthService} from '../_auth/auth.service';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {NgFor, NgIf} from '@angular/common';
import {ToastService} from '../_services/toast.service';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf,
    NgFor
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toast = inject(ToastService);
  userService = inject(UserService);

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['auth'])
      },
      error: () => {
        this.toast.show("УПС, схоже ви тут на завжди!", false)
      }
    });
  }
}
