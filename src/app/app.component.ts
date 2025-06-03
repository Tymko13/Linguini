import {Component} from '@angular/core';
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterOutlet} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    SidebarComponent,
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
