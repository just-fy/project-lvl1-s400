import runGame from '..';
import { cons } from 'hexlet-pairs';
import generateRandomNumber from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const startRange = 1;
const endRange = 100;

const isPrime = (number) => {
  const searchUp = Math.sqrt(number);
  for (let i = 2; i < searchUp; i += 1) {
    if (number % i === 0) return false;
  }
  return number !== 1 && number !== 0 && number > 0;
};

const brainPrimeGame = () => {
  const question = generateRandomNumber(startRange, endRange);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => runGame(brainPrimeGame, description);
