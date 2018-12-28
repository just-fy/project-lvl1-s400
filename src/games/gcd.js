import mainGameStart from '..';
import { cons } from 'hexlet-pairs';
import { getRandomInt, getGcd } from '../secondary-func';

const conditionGcdGame = 'Find the greatest common divisor of given numbers.\n';

const brainGcdGame = () => {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const question = `${num1} ${num2}`;
  const correctAnswer = (getGcd(num1, num2)).toString();
  return cons(question, correctAnswer);
};

export default () => mainGameStart(brainGcdGame, conditionGcdGame);
