import {Component, inject, signal} from '@angular/core';
import {TestService} from '../_services/test.service';
import {NgForOf, NgIf} from '@angular/common';
import {Topic} from '../_models/topic';
import {UserService} from '../_services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-texts',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './texts.component.html',
  styleUrl: './texts.component.scss'
})
export class TextsComponent {
  testService = inject(TestService);
  userService = inject(UserService);
  router = inject(Router);

  currentTopic = signal<Topic | null>(null);

  learn() {
    if(this.currentTopic()) {
      this.userService.addWords(this.currentTopic()!);
      this.router.navigate(['/tests']);
    }
  }

  disableLearning() {
    const topics =  this.userService.topics();
    return topics && topics.includes(this.currentTopic()?.name);
  }
}
