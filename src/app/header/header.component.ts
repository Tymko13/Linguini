import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {TitleCasePipe} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    TitleCasePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router = inject(Router);
}
