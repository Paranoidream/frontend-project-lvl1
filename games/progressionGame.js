#!/usr/bin/env node
import readlineSync from 'readline-sync';
import random from '../src/random.js';
import gameLogic from '../src/index.js';

const gameRule = 'What number is missing in the progression?';

const progression = (start, step, length) => {
  const progressionFin = [start];
  for (let i = 1; i <= length; i += 1) {
    progressionFin.push(start + i * step);
  }
  return progressionFin;
};

const gameData = () => {
  const start = random(-100, 101);
  const step = random(-5, 6);
  const length = random(5, 11);
  const hiddenAnswer = random(1, length - 1);
  const makeProgression = progression(start, step, length);
  const rightAnswer = String(makeProgression[hiddenAnswer]);
  makeProgression[hiddenAnswer] = '..';
  const question = makeProgression.join(' ');
  return [question, rightAnswer];
};

const startProgression = () => {
  gameLogic(gameRule, gameData);
};

export default startProgression;