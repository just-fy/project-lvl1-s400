import mainGameStart from '..';
import { cons } from 'hexlet-pairs';
import { getRandomInt, isEven } from '../secondary-func';

const conditionEvenGame = 'Answer "yes" if number even otherwise answer "no".\n';

const brainEvenGame = () => {
  const question = getRandomInt(100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => mainGameStart(brainEvenGame, conditionEvenGame);
