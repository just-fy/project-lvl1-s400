import runGame from '..';
import { cons, car, cdr } from 'hexlet-pairs';
import generateRandomNumber from '../utils';

const description = 'What number is missing in the progression?\n';
const sequenceLength = 8;
start + step * i;
const makeSequence = () => {
  let start = generateRandomNumber(0, 10);
  const step = generateRandomNumber(0, 10);
  const sequence = [start];
  for (let i = 0; i <= sequenceLength; i += 1) {
    const nextValue = start + step;
    sequence.push(nextValue);
    start = nextValue;
  }

  const hiddenElementPosition = generateRandomNumber(0, 10);
  const correctAnswer = sequence[hiddenElementPosition];
  const deleteIndex = sequence.indexOf(sequence[hiddenElementPosition]);
  sequence[deleteIndex] = '..';
  return cons(sequence, correctAnswer);
};

const brainProgressionGame = () => {
  const questionAndAnswer = makeSequence();
  const question = car(questionAndAnswer);
  const correctAnswer = (cdr(questionAndAnswer)).toString();
  return cons(question, correctAnswer);
};

export default () => runGame(brainProgressionGame, description);
