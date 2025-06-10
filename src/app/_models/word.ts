import {Meaning} from './meaning';

export interface Word {
  word: string;
  phonetic: string | null;
  meanings: Meaning[];
}
