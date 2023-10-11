const readline = require('readline');

readline.emitKeypressEvents(process.stdin);

if (process.stdin.setRawMode != null) {
  process.stdin.setRawMode(true);
}

process.stdin.on('keypress', (str, key) => {
  console.log(str)
  console.log(key)
})