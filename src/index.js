import readlineSync from 'readline-sync';

//var readlineSync = require('readline-sync');

const userName = readlineSync.question('What is your name?');
console.log('Hello, ' + userName + '!');
