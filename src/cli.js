var readlineSync = require('readline-sync');

export default () => {
var userName = readlineSync.question('May I have your name? ');
console.log('Hello ' + userName + '!');
};