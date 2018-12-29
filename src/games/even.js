import runGame from '..';
import { cons } from 'hexlet-pairs';
import generateRandomNumber from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".\n';

const isEven = value => value % 2 === 0;

const startRange = 0;
const endRange = 100;

const brainEvenGame = () => {
  const question = generateRandomNumber(startRange, endRange);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => runGame(brainEvenGame, description);
