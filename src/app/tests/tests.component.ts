import {Component, inject} from '@angular/core';
import {UserService} from '../_services/user.service';
import {NgForOf, NgIf} from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';
import {Learn} from '../_models/learn';

@Component({
  selector: 'app-tests',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss'
})
export class TestsComponent {
  userService = inject(UserService);

  userTopics = toSignal(this.userService.topics());
  prizes = [
    'bronze',
    'silver',
    'gold'
  ];

  cup(prize: string) {
    return `../../assets/prizes/${prize}.PNG`;
  }

  prizeAchieved(i: number, j: number) {
    if (this.userTopics()) {
      return this.userTopics()![i]['claimed'][j] == 1;
    }
    return false;
  }

  prizeAvailable(i: number, j: number) {
    if (this.userTopics()) {
      return this.userTopics()![i]['completion'] < j + 1;
    }
    return false;
  }

  claimPrize(i: number, j: number, topic: string) {
    if (!this.prizeAvailable(i, j) && !this.prizeAchieved(i, j)) {
      this.userService.getPrize(topic, j);
    }
  }

  testTopic: string | null = null;
  testWords: Learn[] | null = null;
  testTypes: string[][] | null = null;
  testTypeNames: string[] | null = null;
  testAnswers: number[] | null = null;
  successRate = 0;
  completionRate = 0;
  tests = [
    'translation',
    'definition',
    'sentence'
  ]
  testMode = false;

  getRandomWord(word: Learn) {
    let res = word;
    while (res.word === word.word) {
      res = this.testWords![Math.floor(Math.random() * this.testWords!.length)];
    }
    return res;
  }

  startTest(words: Learn[], topic: string) {
    this.testWords = [...words].sort(() => Math.random() - 0.5);
    this.testTypes = this.getTypes();
    this.testAnswers = this.testWords.map(() => 0);
    this.successRate = 0;
    this.completionRate = 0;
    this.testMode = true;
    this.testTopic = topic;
  }

  getTypes() {
    this.testTypeNames = this.testWords!.map(() => this.tests[Math.floor(Math.random() * this.tests.length)]);
    return this.testTypeNames.map((type, num) => this.getRandomAnswers(type, num));
  }

  getAllWords() {
    return this.userTopics()!.flatMap(topic => {
      return topic['words']
    });
  }

  getRandomAnswers(type: string, num: number) {
    switch (type) {
      case 'translation':
        return this.getTranslations(num);
      case 'definition':
        return this.getDefinitions(num);
      case 'sentence':
      default:
        return this.getRandomWords(num);
    }
  }

  getTranslations(num: number) {
    const trans = this.testWords![num];
    const definitions = [
      trans.translation,
      this.getRandomWord(trans)!.translation,
      this.getRandomWord(trans)!.translation,
      this.getRandomWord(trans)!.translation,
    ];
    return [...definitions].sort(() => Math.random() - 0.5);
  }

  getDefinitions(num: number) {
    const trans = this.testWords![num];
    const definitions = [
      trans.definition,
      this.getRandomWord(trans)!.definition,
      this.getRandomWord(trans)!.definition,
      this.getRandomWord(trans)!.definition,
    ];
    return [...definitions].sort(() => Math.random() - 0.5);
  }

  getRandomWords(num: number) {
    const trans = this.testWords![num];
    const definitions = [
      trans.word,
      this.getRandomWord(trans)!.word,
      this.getRandomWord(trans)!.word,
      this.getRandomWord(trans)!.word,
    ];
    return [...definitions].sort(() => Math.random() - 0.5);
  }

  submitAnswer(answer: string, rightAnswer: string, i: number) {
    this.completionRate++;
    if (answer === rightAnswer) {
      this.testAnswers![i] = 1;
      this.successRate++;
    } else {
      this.testAnswers![i] = -1;
    }
    if (!this.testAnswers!.includes(0)) {
      this.testMode = false;
      if(this.testTopic !== 'all') this.userService.unlockPrizes(i, this.testTopic!, this.successRate, this.completionRate);
    }
  }

  disappear(i: number) {
    return this.testAnswers![i] !== 0;
  }
}
