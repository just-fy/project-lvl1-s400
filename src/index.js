import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  const playerName = readlineSync.question('What is your name? ', {
    defaultInput: 'Friend!',
  });
  console.log(`Hello, ${playerName}!`);
};

const getPlayerName = () => {
  const playerName = readlineSync.question('What is your name? ', {
    defaultInput: 'Friend',
  });
  console.log(`Hello, ${playerName}`);
  return playerName;
};

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const isEven = value => value % 2 === 0;

const firstGreeting = 'Welcome to the Brain Games!\n';
const taskOfEvenGame = 'Answer "yes" if number even otherwise answer "no".\n';

const playEvenGame = (numberRounds) => {
  console.log(firstGreeting);
  console.log(taskOfEvenGame);
  const name = getPlayerName();
  for (let i = 1; i <= numberRounds; i += 1) {
    const question = getRandomInt(100);
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    const ifCorrect = 'Correct!';
    const ifWrong = `"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again, ${name}!`;
    if (playerAnswer === correctAnswer) {
      console.log(ifCorrect);
    } else {
      console.log(ifWrong);
      return false;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
const rounds = 3;
export { greeting, rounds };
export { playEvenGame };
