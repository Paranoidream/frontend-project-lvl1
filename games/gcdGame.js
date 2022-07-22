import {gameLogic} from '../src/index.js';
import {randomElement} from '../src/randomElement.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const divisor = (x, y) => {
  if (y !== 0) {
    return divisor(y, x % y);
  }
  return x;
  };

const gameData = () => {
  const num1 = randomElement(0, 20);
  const num2 = randomElement(0, 20);
  const question = `${num1} ${num2}`;
  const rightAnswer = divisor(num1, num2);
  return [question, rightAnswer];
};

const startGCD = () => {
  gameLogic(gameRule, gameData);
};

export default startGCD;
