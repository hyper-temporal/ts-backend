// import { createFile, createFileString} from "./createfile"
const cf = require('./createfile.js')
///and then 
//cf.createFileString("blah")

const readline = require('readline')

export default (f: (param: string) => string) => {
  let str = ""
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'localhost> ',
    terminal: true
  });
  rl.prompt();
  rl.on('line', (line: string) => {
    switch (line.trim()) {
      case 'hello':
        console.log('world!');
        break;
      default:
        console.log(`last time it was :'${str}'`);
        str = line.trim()
        cf.createFileString(str)
        console.log(`but still, you a '${f(str)}'`)
        break;
    }
    rl.prompt();

  })
    .on('close', () => {
      console.log('Have a great day!');
      process.exit(0);
    })
    .on('SIGINT', () => {
      rl.question('Are you sure you want to exit? ', (answer: string) => {
        if (answer.match(/^y(es)?$/i)) {
          rl.pause();
        }
      });
    });
}
// async function askQuestion(query) {
//   const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//   });

//   return new Promise(resolve => rl.question(query, ans => {
//       rl.close();
//       resolve(ans);
//   }))
// }
// module.exports =  askQuestion
