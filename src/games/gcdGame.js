import gameLogic from '../index.js';
import getRandomNumber from '../randomElement.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const findGcd = (numOne, numTwo) => {
  if (numTwo !== 0) {
    return findGcd(numTwo, numOne % numTwo);
  }
  return numOne;
};

const getRoundData = () => {
  const num1 = getRandomNumber(0, 20);
  const num2 = getRandomNumber(0, 20);
  const question = `${num1} ${num2}`;
  const rightAnswer = findGcd(num1, num2);
  return [question, rightAnswer];
};

const startGCDGame = () => {
  gameLogic(gameRule, getRoundData);
};

export default startGCDGame;
