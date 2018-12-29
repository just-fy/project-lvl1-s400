import runGame from '..';
import { cons, car, cdr } from 'hexlet-pairs';
import generateRandomNumber from '../utils';

const description = 'What is the result of the expression?\n';

const startRange = 0;
const endRange = 100;

const getRandomExpression = (num1, num2) => {
  const opIndex = generateRandomNumber(0, 3);
  let result;
  switch (opIndex) {
    case 0:
      result = cons(`${num1} + ${num2}`, num1 + num2);
      break;
    case 1:
      result = cons(`${num1} - ${num2}`, num1 - num2);
      break;
    case 2:
      result = cons(`${num1} * ${num2}`, num1 * num2);
      break;
    default:
  }
  return result;
};

const brainCalcGame = () => {
  const num1 = generateRandomNumber(startRange, endRange);
  const num2 = generateRandomNumber(startRange, endRange);
  const questionAndAnswer = getRandomExpression(num1, num2);
  const question = car(questionAndAnswer);
  const correctAnswer = (cdr(questionAndAnswer)).toString();
  return cons(question, correctAnswer);
};

export default () => runGame(brainCalcGame, description);
