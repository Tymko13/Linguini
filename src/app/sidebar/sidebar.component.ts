import {Component, inject} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  authService = inject(AuthService);
}
