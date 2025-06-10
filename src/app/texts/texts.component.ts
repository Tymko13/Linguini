import { Component } from '@angular/core';
import {Topic} from '../_models/topic';

@Component({
  selector: 'app-texts',
  imports: [],
  templateUrl: './texts.component.html',
  styleUrl: './texts.component.scss'
})
export class TextsComponent {
  topics: Topic[];

  constructor() {
    this.topics = JSON.parse(this.topicsString);
    console.log(this.topics);
  }

  topicsString = `[
    {
      "name": "Fashion 1",
      "title": "Dior and the New Look",
      "text" : "In 1947, French designer Christian Dior changed the world of fashion with his New Look. After World War II, people were tired of simple and practical clothes. Dior’s new collection brought back elegance and glamour. It featured narrow waists, full skirts, and soft shoulders, creating a very feminine silhouette. Many fashion lovers were amazed by the luxurious fabrics and beautiful embroidery. The dresses were often made from silk and decorated with lace and beads. This look was not only stylish but also gave people hope and joy. It showed that fashion could be expressive and artistic, even after hard times. Today, Dior’s New Look is still remembered as a symbol of haute couture and timeless style.",
      "words": [
        {
          "word": "designer",
          "translation": "дезайнер",
          "definition": "a person who creates clothes or fashion items",
          "sentence1": "Christian Dior was a famous fashion",
          "sentence2": "from France."
        },
        {
          "word": "",
          "translation": "",
          "definition": "",
          "sentence1": "",
          "sentence2": ""
        }
      ]
    },
        {
      "name": "",
      "title": "",
      "text" : "",
      "words": [
        {
          "word": "",
          "translation": "",
          "definition": "",
          "sentence1": "",
          "sentence2": ""
        },
        {
          "word": "",
          "translation": "",
          "definition": "",
          "sentence1": "",
          "sentence2": ""
        }
      ]
    }
  ]`
}
