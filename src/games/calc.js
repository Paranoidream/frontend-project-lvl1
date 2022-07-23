import gameLogic from '../index.js';
import randomElement from '../randomElement.js';

const gameRule = 'What is the result of the expression?';

const count = (numOne, numTwo, symbol) => {
  switch (symbol) {
    case '+':
      return numOne + numTwo;
    case '-':
      return numOne - numTwo;
    case '*':
      return numOne * numTwo;
    default:
      throw new Error(`Unknown operator: ${symbol}`);
  }
};

const getRoundData = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[randomElement(0, operators.length - 1)];
  const num1 = randomElement(0, 20);
  const num2 = randomElement(0, 20);
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = count(num1, num2, operator);
  return [question, rightAnswer];
};

const startCalcGame = () => {
  gameLogic(gameRule, getRoundData);
};

export default startCalcGame;
