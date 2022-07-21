#!/usr/bin/env node
import readlineSync from 'readline-sync';
import random from '../src/random.js';
import gameLogic from '../src/index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const gameData = () => {
    const question = random();
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    return [question, rightAnswer];
};

const start = () => {
    gameLogic(gameRule, gameData);
};

export default start;


