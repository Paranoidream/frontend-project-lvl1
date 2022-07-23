import random from '../random.js';
import gameLogic from '../index.js';

const gameRule = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [start];
  for (let i = 1; i <= length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getRoundData = () => {
  const start = random(-100, 101);
  const step = random(-5, 6);
  const length = random(5, 11);
  const hiddenAnswer = random(1, length - 1);
  const makeProgression = getProgression(start, step, length);
  const rightAnswer = String(makeProgression[hiddenAnswer]);
  makeProgression[hiddenAnswer] = '..';
  const question = makeProgression.join(' ');
  return [question, rightAnswer];
};

const startProgressionGame = () => {
  gameLogic(gameRule, getRoundData);
};

export default startProgressionGame;
