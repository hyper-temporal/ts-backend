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

 function getTotal(...numbers) {
  let total = 0;
  numbers.forEach((num) => total += num);
  return total;
}
 const t = getTotal(1,2,3,4,5,6,7,8,9)
console.log(t)

