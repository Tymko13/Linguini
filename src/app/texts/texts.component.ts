import {Component, inject, signal} from '@angular/core';
import {TestService} from '../_services/test.service';
import {NgForOf, NgIf} from '@angular/common';
import {Topic} from '../_models/topic';
import {UserService} from '../_services/user.service';
import {Router} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';

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

  allTopics = toSignal(this.userService.topics());
  currentTopic = signal<Topic | null>(null);

  learn() {
    if(this.currentTopic()) {
      this.userService.addTopic(this.currentTopic()!);
      this.router.navigate(['/tests']);
    }
  }

  disableLearning() {
    const topics =  this.allTopics();
    return topics && topics.map(topic => topic.name).includes(this.currentTopic()?.name);
  }
}
