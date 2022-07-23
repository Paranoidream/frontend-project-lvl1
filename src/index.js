import readlineSync from 'readline-sync';

const roundCount = 3;
const gameLogic = (description, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(description);
  for (let i = 0; i < roundCount; i += 1) {
    const [question, rightAnswer] = getRoundData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== String(rightAnswer)) {
      console.log(`"${answer}" is wrong answer;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameLogic;
