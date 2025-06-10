import {Component, inject, signal} from '@angular/core';
import {TestService} from '../_services/test.service';
import {NgForOf, NgIf} from '@angular/common';
import {Topic} from '../_models/topic';

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

  currentTopic = signal<Topic | null>(null);
}
