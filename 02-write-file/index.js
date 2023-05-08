const { error } = require('console');
const fs = require('fs');
const path = require('path');
const { stdin } = process;

fs.writeFile(path.join(__dirname, 'text.txt'), '', (error) => {
  if (error) throw error;
  console.log('Enter text..');
});

stdin.on('data', (data) => {
  fs.appendFile(path.join(__dirname, 'text.txt'), data.toString(), (error) => {
    if (error) throw error;
    if (data.toString().trim().toLowerCase() === 'exit') {
      console.log('Good bye!');
      process.exit();
    }
  });
});

process.on('SIGINT', () => {
  console.log('Good bye!');
  process.exit();
});
