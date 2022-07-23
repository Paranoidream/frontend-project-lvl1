import gameLogic from '../index.js';
import randomElement from '../randomElement.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const divisor = (numOne, numTwo) => {
  if (numTwo !== 0) {
    return divisor(numTwo, numOne % numTwo);
  }
  return numOne;
};

const getRoundData = () => {
  const num1 = randomElement(0, 20);
  const num2 = randomElement(0, 20);
  const question = `${num1} ${num2}`;
  const rightAnswer = divisor(num1, num2);
  return [question, rightAnswer];
};

const startGCDGame = () => {
  gameLogic(gameRule, getRoundData);
};

export default startGCDGame;
