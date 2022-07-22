import gameLogic from '../src/index.js';
import randomElement from '../src/randomElement.js';

const gameRule = 'What is the result of the expression?';

const count = (x, y, symbol) => {
  let result = '';
  switch (symbol) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    default:
      result = null;
      break;
  }
  return result;
};

const gameData = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[randomElement(0, operators.length - 1)];
  const num1 = randomElement(0, 20);
  const num2 = randomElement(0, 20);
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = count(num1, num2, operator);
  return [question, rightAnswer];
};

const startCalc = () => {
  gameLogic(gameRule, gameData);
};

export default startCalc;
