import mainGameStart from '..';
import { cons } from 'hexlet-pairs';
import getRandomInt from '../utils';

const description = 'What is the result of the expression?\n';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];

  const opIndex = Math.floor(Math.random() * 3);
  return operators[opIndex];
};

const brainCalcGame = () => {
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const op = getRandomOperator();
  const question = `${num1} ${op} ${num2}`;
  const correctAnswer = (eval(question)).toString();
  return cons(question, correctAnswer);
};

export default () => mainGameStart(brainCalcGame, description);
