import {Definition} from './definition';

export interface Meaning {
  partOfSpeech: string;
  synonyms: string[];
  antonyms: string[];
  definitions: Definition[];
}
