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
  const hiddenElementPosition = generateRandomNumber(0, sequenceLength - 1);
  const startElementSequence = generateRandomNumber(startRange, endRange);
  const stepSequence = generateRandomNumber(minStep, maxStep);
  const hiddenElementInSequence = startElementSequence + (stepSequence * hiddenElementPosition);
  const sequence = [startElementSequence];
  for (let i = 1; i < sequenceLength; i += 1) {
    if (i === hiddenElementPosition) {
      sequence[i] = '..';
    } else {
      const nextElement = startElementSequence + (stepSequence * i);
      sequence.push(nextElement);
    }
  }

  const correctAnswer = hiddenElementInSequence;
  return cons(sequence, correctAnswer);
};

const brainProgressionGame = () => {
  const questionAndAnswer = makeSequence();
  const question = car(questionAndAnswer);
  const correctAnswer = (cdr(questionAndAnswer)).toString();
  return cons(question, correctAnswer);
};

export default () => runGame(brainProgressionGame, description);
