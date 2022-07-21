import readlineSync from 'readline-sync';

const gameLogic = (welcoming, gameData) => {
console.log('Welcome to the Brain Games!');
var userName = readlineSync.question('May I have your name? ');
console.log(`Hello ${userName}!`);
console.log(welcoming);
for (let i = 0; i < 3; i += 1) {
    const [message, rightAnswer] = gameData();
    console.log(`Question: ${message}`);
    const answer = readlineSync.question('Your answer: ');
    if (String(answer) !== rightAnswer) {
      console.log(`"${answer}" is wrong answer;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let 's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
  export default gameLogic;