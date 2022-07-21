#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';
var readlineSync = require('readline-sync');

greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
    const number = (min = 0, max = 100) => {
        const randomNum = Math.floor(Math.random() * (max - min)) + min;
        return randomNum;
      }
      console.log('Question: ' + number());
    let answer = readlineSync.question('Your answer: ');
    if (number % 2 === 0) {
        rightAnswer = 'yes';
    } else {
        rightAnswer = 'no';
    };
    if (answer !== rightAnswer) {
        console.log(`"${answer}" + 'is wrong answer ;(. Correct answer was ' + "${rightAnswer}"`);
        console.log("Let's try again, " + userName + "!");
    }
    console.log('Correct!');
}
console.log('Congratulations, ' + userName +'!');

export default () => {
    gameData(gameInfo)
};


