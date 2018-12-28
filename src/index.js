import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const rounds = 3;

const mainGameStart = (nameGame, conditionGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(conditionGame);
  const playerName = readlineSync.question('What is your name? ', {
    defaultInput: 'Friend',
  });
  console.log(`Hello, ${playerName}!\n`);
  for (let i = 1; i <= rounds; i += 1) {
    const gamePair = nameGame();
    const currentQuestion = car(gamePair);
    console.log(`Question: ${currentQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = cdr(gamePair);
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\n`);
      console.log(`Let's try again, ${playerName}!`);
      return false;
    }
  }
  return console.log(`Congratulations, ${playerName}!`);
};

export { mainGameStart as default };
