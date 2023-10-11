import fs from 'fs'

import makeid from './randomstring'

export const createFile = function (length: number) {
    const data = makeid(length)
    fs.writeFile('info.txt', data, 'utf-8', (err) => {
        console.log('File created')
    })
    console.log(data)

}
export const createFileString = function (str : string) {
    fs.writeFile('info.txt', str, 'utf-8', (err) => {
        console.log('File created')
    })
}


