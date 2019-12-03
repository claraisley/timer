const userInput = process.stdin
userInput.setRawMode(true)
userInput.setEncoding('utf8')





userInput.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao! \n')
    process.exit()

  } else if (key === 'b') {
    process.stdout.write('\x07');

  } else if (parseInt(key) >= 1 && parseInt(parseInt(key))) {
    process.stdout.write(`Setting a timer for ${key} seconds... \n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, parseInt(key) * 1000)
    
  }

})