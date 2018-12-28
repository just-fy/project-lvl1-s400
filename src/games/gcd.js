import mainGameStart from '..';
import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';

const description = 'Find the greatest common divisor of given numbers.\n';

const getGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return getGcd(num2, num1 % num2);
};

const brainGcdGame = () => {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const question = `${num1} ${num2}`;
  const correctAnswer = (getGcd(num1, num2)).toString();
  return cons(question, correctAnswer);
};

export default () => mainGameStart(brainGcdGame, description);
