import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const getPlayerName = () => {
  const playerName = readlineSync.question('What is your name? ', {
    defaultInput: 'Friend',
  });
  return playerName;
};

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const checkAnswer = (playerAnswer, correctAnswer, playerName) => {
  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${playerName}!`);
  }
};

const mainGameStart = (nameGame, conditionGame) => {
  greeting();
  console.log(conditionGame);
  const playerName = getPlayerName();
  console.log(`Hello, ${playerName}!\n`);
  for (let i = 1; i <= 3; i += 1) {
    const gamePair = nameGame();
    const currentQuestion = car(gamePair);
    const playerAnswer = askQuestion(currentQuestion);
    const correctAnswer = cdr(gamePair);
    checkAnswer(playerAnswer, correctAnswer, playerName);
  }
  console.log(`Congratulations, ${playerName}!`);
};

export { mainGameStart as default };
