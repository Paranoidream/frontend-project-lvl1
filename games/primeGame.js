import random from '../src/random.js';
import gameLogic from '../src/index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const gameData = () => {
  const number = random(1, 200);
  const question = number;
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startPrime = () => {
  gameLogic(gameRule, gameData);
};

export default startPrime;
