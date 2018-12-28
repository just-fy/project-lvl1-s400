import mainGameStart from '..';
import { cons, car, cdr } from 'hexlet-pairs';
import getRandomInt from '../utils';

const description = 'What number is missing in the progression?\n';
const sequenceLength = 8;

const makeSequence = () => {
  let start = getRandomInt(10);
  const step = getRandomInt(10);
  const sequence = [start];
  for (let i = 0; i <= sequenceLength; i += 1) {
    const nextValue = start + step;
    sequence.push(nextValue);
    start = nextValue;
  }

  const randomIndex = getRandomInt(10);
  const correctAnswer = sequence[randomIndex];
  const deleteIndex = sequence.indexOf(sequence[randomIndex]);
  if (deleteIndex !== -1) {
    sequence[deleteIndex] = '..';
  }
  return cons(sequence, correctAnswer);
};

const brainProgressionGame = () => {
  const questionAndAnswer = makeSequence();
  const question = car(questionAndAnswer);
  const correctAnswer = (cdr(questionAndAnswer)).toString();
  return cons(question, correctAnswer);
};

export default () => mainGameStart(brainProgressionGame, description);
