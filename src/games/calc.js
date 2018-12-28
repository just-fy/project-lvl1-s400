import mainGameStart from '..';
import { cons, car, cdr } from 'hexlet-pairs';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?\n';

const getRandomExpression = (num1, num2) => {
  const opIndex = getRandomInt(3);
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
      console.log('undefined operator');
  }
  return result;
};

const brainCalcGame = () => {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const questionAndAnswer = getRandomExpression(num1, num2);
  const question = car(questionAndAnswer);
  const correctAnswer = (cdr(questionAndAnswer)).toString();
  return cons(question, correctAnswer);
};

export default () => mainGameStart(brainCalcGame, description);
