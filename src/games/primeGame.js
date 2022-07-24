import getRandomNumber from '../randomElement.js';
import gameLogic from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= (Math.sqrt(number)); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getRoundData = () => {
  const number = getRandomNumber(1, 200);
  const question = number;
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startPrimeGame = () => {
  gameLogic(description, getRoundData);
};

export default startPrimeGame;
