import readlineSync from 'readline-sync';

const firstGreeting = 'Welcome to the Brain Games!';
const taskOfEvenGame = 'Answer "yes" if number even otherwise answer "no".';
const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const greeting = () => {
  console.log(firstGreeting);
  console.log(taskOfEvenGame);
  const userName = readlineSync.question('What is your name? ', {
    defaultInput: 'Friend',
  });
  console.log(`Hello, ${userName}!`);
};

const isEven = value => value % 2 === 0;

const brainEven = () => {
  const randomNumber = getRandomInt(100);
  console.log(`Question: ${randomNumber}`);
  const answerStr = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const ifCorrect = 'Correct!';
  const ifWrong = `"${answerStr}" is wrong answer ;(. Correct answer was "${correctAnswer}".`;
  return (answerStr === correctAnswer) ? console.log(ifCorrect) : console.log(ifWrong);
};

export { greeting };
export { brainEven };
