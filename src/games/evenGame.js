import getRandomNumber from '../randomElement';
import gameLogic from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRoundData = () => {
  const question = getRandomNumber();
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startEvenGame = () => {
  gameLogic(gameRule, getRoundData);
};

export default startEvenGame;
