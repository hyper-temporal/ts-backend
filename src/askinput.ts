import path from "path";
import randomstring from "./randomstring";
import { createFile, createFileString} from "./createfile";

// import { createFile, createFileString} from "./createfile"
///and then 
//cf.createFileString("blah")

const readline = require('readline')

export default (
  defaultProcess: (param: string) => void,
  otherPrsocess: (param: string) => void
  ) => {
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
        otherPrsocess(str)
        break;
      default:
        defaultProcess(str)
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
