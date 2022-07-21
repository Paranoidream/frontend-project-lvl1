#!/usr/bin/env node
import readlineSync from 'readline-sync';
import random from '../src/random.js';

var userName = readlineSync.question('May I have your name? ');
console.log('Hello ' + userName + '!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
export default () => {
for (let i = 0; i < 3; i += 1) {
      console.log('Question: ' + random());
    let answer = readlineSync.question('Your answer: ');
    let rightAnswer = '';
    if (random % 2 === 0) {
        rightAnswer = 'yes';
    } else {
        rightAnswer = 'no';
    }
    while (answer !== rightAnswer) {
        console.log(`"${answer}" + 'is wrong answer ;(. Correct answer was ' + "${rightAnswer}"`);
        console.log("Let's try again, " + userName + "!");
        return false;
    }
    console.log('Correct!');
    
}
console.log('Congratulations, ' + userName +'!');
return true;
};


