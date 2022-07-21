#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default () => {
var userName = readlineSync.question('May I have your name? ');
console.log('Hello ' + userName + '!');
};