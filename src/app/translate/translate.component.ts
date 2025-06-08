import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-translate',
  imports: [
    NgForOf
  ],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.scss'
})
export class TranslateComponent {
  from = "ukr";
  to = "en";
  translation = ['I', 'LOVE', 'JavaScript'];

  codeToLang(code: string): string {
    switch(code) {
      case "en": return "Англійська";
      case "ukr": return "Українська";
      default: return "Автоматично";
    }
  }
}
