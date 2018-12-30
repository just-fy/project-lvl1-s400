import runGame from '..';
import { cons } from 'hexlet-pairs';
import generateRandomNumber from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

const startRange = 1;
const endRange = 100;

const isPrime = (number) => {
  if (number < 2) return false;
  const searchTo = Math.sqrt(number);
  for (let i = 2; i <= searchTo; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};


const brainPrimeGame = () => {
  const question = generateRandomNumber(startRange, endRange);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => runGame(brainPrimeGame, description);
