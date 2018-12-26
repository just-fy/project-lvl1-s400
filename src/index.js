const readlineSync = require('readline-sync');
const firstGreeting = 'Welcome to the Brain Games!';

const greeting = () => {
  console.log(firstGreeting);
  const userName = readlineSync.question('What is your name?', {
    defaultInput: 'Friend'
  });
  console.log('Hello, ' + userName + '!');
};

export { greeting };