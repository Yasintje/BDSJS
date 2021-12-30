var readline = require('readline');
  
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question('What is your name? \nInput: ', (age) => {
     console.log('Your age name: ' + age);
     process.exit(1);
});