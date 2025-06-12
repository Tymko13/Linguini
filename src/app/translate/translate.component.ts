import {Component, effect, inject, signal} from '@angular/core';
import {NgIf} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {Word} from '../_models/word';
import {FormsModule} from '@angular/forms';
import {debounceTime, Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-translate',
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.scss'
})
export class TranslateComponent {
  private http = inject(HttpClient);

  from = "ukr";
  to = "en";
  translation = ['I', 'LOVE', 'JavaScript', 'hello'];
  dictWord = signal<Word[] | null>(null);

  translate(text: string, source: string, target: string) {
    return "AAA"
  }

  searchTerm: string = '';
  private searchChanged = new Subject<string>();
  private destroy$ = new Subject<void>();
  debouncedValue = signal('');
  selectedWord = this.debouncedValue;
  constructor() {
    this.searchChanged
      .pipe(debounceTime(500), takeUntil(this.destroy$))
      .subscribe((term) => {
        this.debouncedValue.set(term);
      });
    effect(() => {
      if(this.selectedWord()) {
        this.http.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + this.selectedWord()).subscribe({
            next: (res) => {this.dictWord.set(res as Word[])},
            error: (err) => {this.dictWord.set(null)}
          }
        );
      }
    });
  }

  onSearchChange(value: string) {
    this.searchChanged.next(value);
  }

  codeToLang(code: string): string {
    switch(code) {
      case "en": return "Англійська";
      case "ukr": return "Українська";
      default: return "Автоматично";
    }
  }

  switchLang() {
    const swap = this.from;
    this.from = this.to;
    this.to = swap;
  }

  getDefinition() {
    const definition = [];
    const words = this.dictWord();
    const meanings = words!.flatMap(word => word.meanings);

    for(let word of words!) {
      if(word.word) {
        definition.push(word.word);
        definition.push(' ');
        break;
      }
    }

    for(let word of words!) {
      if(word.phonetic) {
        definition.push('[ ');
        definition.push(word.phonetic);
        definition.push(' ]');
        break;
      }
    }
    definition.push('<br>');
    definition.push('Definitions:');
    for(let meaning of meanings) {
      if(meaning.partOfSpeech) {
        definition.push('<br>');
        definition.push(meaning.partOfSpeech);
      }
      let num = 0;
      for(let def of meaning.definitions) {
        definition.push('<br>');
        definition.push(++num);
        definition.push('. ');
        definition.push(def.definition);
        if(def.example) {
          definition.push('<br>Example: ')
          definition.push(def.example);
        }
      }
    }
    return definition.join('');
  }
}
