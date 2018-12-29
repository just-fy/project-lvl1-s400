import runGame from '..';
import { cons, car, cdr } from 'hexlet-pairs';
import generateRandomNumber from '../utils';

const description = 'What number is missing in the progression?\n';

const startRange = 1;
const endRange = 9;

const sequenceLength = 10;
const minStep = 1;
const maxStep = 10;

const makeSequence = () => {
  const startElementSequence = generateRandomNumber(startRange, endRange);
  const stepSequence = generateRandomNumber(minStep, maxStep);
  const sequence = [];
  for (let i = 0; i < sequenceLength; i += 1) {
    const nextElement = startElementSequence + (stepSequence * i);
    sequence.push(nextElement);
  }
  const hiddenElementPosition = generateRandomNumber(0, sequenceLength - 1);
  const hiddenElementInSequence = sequence[hiddenElementPosition];
  sequence[hiddenElementPosition] = '..';
  const question = sequence.join(' ');
  const correctAnswer = hiddenElementInSequence;
  return cons(question, correctAnswer);
};

const brainProgressionGame = () => {
  const questionAndAnswer = makeSequence();
  const question = car(questionAndAnswer);
  const correctAnswer = (cdr(questionAndAnswer)).toString();
  return cons(question, correctAnswer);
};

export default () => runGame(brainProgressionGame, description);
