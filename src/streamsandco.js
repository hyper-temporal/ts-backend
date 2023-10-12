const { pipeline } = require('stream/promises');
const zlib = require('zlib');
const fs = require("fs");

const fileStream= fs.createReadStream("./info.txt");

//READ
fileStream
  .on("data", (data) => {
    console.log("Read data:", data.toString());
  })
  .on("end", () => { console.log("No more data."); });

//TRANSFORM

const { Transform } = require("stream");
const transformedData= fs.createWriteStream("./transformedData.txt");

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

//ZIP
async function run() {
  const ac = new AbortController();
  const signal = ac.signal;
  // setImmediate(() => ac.abort());
  await pipeline(
    fs.createReadStream('info.txt'),
    zlib.createGzip(),
    fs.createWriteStream('archive.tar.gz'),
    { signal },
  );
}

run().catch(console.error)



const removeSpaces = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, String(chunk).replace(' ', ''));
  },
});

async function* toUpper(source) {
  for await (const chunk of source) {
    yield String(chunk).toUpperCase();
  }
}
const { compose } = require("stream");
const { finished } = require("stream/promises");
const { convertToObject } = require('typescript');

// Convert AsyncIterable into readable Duplex.
const s1 = compose(async function*() {
  yield 'Hello';
  yield 'World';
}());

// Convert AsyncGenerator into transform Duplex.
const s2 = compose(async function*(source) {
  for await (const chunk of source) {
    yield String(chunk).toUpperCase();
  }
});

let res = '';

// Convert AsyncFunction into writable Duplex.
const s3 = compose(async function(source) {
  for await (const chunk of source) {
    res += chunk;
  }
});


module.exports =  async ()=>{
  await finished(compose(s1, s2, s3));
  console.log(res); // prints 'HELLOWORLD' 
}
 
function CollecA2B(p, ...trucs) {
  return  trucs.map( truc => (p(truc))); // no error
}

function getTotal(...numbers ) {
  let total = 0;
  numbers.forEach((num) => total += num);
  return total;
}

console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60


let arr1 = CollecA2B((num)=>{ return num + 1;},[0,1,2,3,4,5,6,7,8,9])

console.log(arr1); // 0
