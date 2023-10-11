const fs = require('fs')

const makeid = require ('./randomstring.js')

const createFile = function (length) {
    const data = makeid(length)
    fs.writeFile('info.txt', data, 'utf-8', (err) => {
        console.log('File created')
    })
    console.log(data)

}
const createFileString = function (str) {
    fs.writeFile('info.txt', str, 'utf-8', (err) => {
        console.log('File created')
    })
}
module.exports = { createFile, createFileString}


