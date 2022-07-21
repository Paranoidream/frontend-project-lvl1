import readlineSync from 'readline-sync';

export default (welcoming, gameInfo) => {
console.log('Welcome to the Brain Games!');
var userName = readlineSync.question('May I have your name? ');
console.log('Hello ' + userName + '!');
console.log(welcoming);

for (let i = 0; i < 3; i += 1) {
    const [message, rightAnswer] = gameInfo();

    console.log(`Question: ${message}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`"${answer}" is wrong answer;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let 's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};