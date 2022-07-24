import getRandomNumber from '../randomElement.js';
import gameLogic from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRoundData = () => {
  const question = getRandomNumber(0, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startEvenGame = () => {
  gameLogic(description, getRoundData);
};

export default startEvenGame;
