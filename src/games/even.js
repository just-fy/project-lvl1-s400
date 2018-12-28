import mainGameStart from '..';
import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = value => value % 2 === 0;

const brainEvenGame = () => {
  const question = getRandomInt(100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => mainGameStart(brainEvenGame, description);
