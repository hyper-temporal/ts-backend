//synchrone
const fs = require('fs')
const cf = require('./createfile.js')

if (!fs.existsSync( 'info.txt'))
    cf.createFileString("yo")
const data = fs.readFileSync('info.txt', 'utf-8')
console.log(data) // file content
console.log('Le fichier a été lu')


//async

const infoa = fs.readFile('info.txt', 'utf-8',
 (err, data) => {
    console.log(err)
    console.log(data)
})

console.log(infoa) // file content
console.log('Le fichier a été lu')

