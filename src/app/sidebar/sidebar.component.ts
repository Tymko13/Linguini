import {Component, inject} from '@angular/core';
import {AuthService} from '../_auth/auth.service';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {AsyncPipe, NgIf} from '@angular/common';
import {ToastService} from '../_services/toast.service';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    NgIf,
    AsyncPipe,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toast = inject(ToastService);

  onLogout(){
    this.authService.logout().subscribe({
      next: ()=>{this.router.navigate(['login'])},
      error:()=>{this.toast.show("УПС, схоже ви тут на завжди!", false)}
    });
  }
}
