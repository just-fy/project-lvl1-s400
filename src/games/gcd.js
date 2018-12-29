import runGame from '..';
import { cons } from 'hexlet-pairs';
import generateRandomNumber from '../utils';

const description = 'Find the greatest common divisor of given numbers.\n';

const startRange = 0;
const endRange = 100;

const getGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return getGcd(num2, num1 % num2);
};

const brainGcdGame = () => {
  const num1 = generateRandomNumber(startRange, endRange);
  const num2 = generateRandomNumber(startRange, endRange);
  const question = `${num1} ${num2}`;
  const correctAnswer = (getGcd(num1, num2)).toString();
  return cons(question, correctAnswer);
};

export default () => runGame(brainGcdGame, description);
