import path from 'path'
import fs  from 'fs'

let data_folder = '/data/'
let products_folder  = '/products'
let products_file = 'products.json'

const full_path = path.join(data_folder, products_folder, products_file)

const abs_path = path.resolve(__dirname, 'data', 'products', 'products.json')
const data = fs.readFileSync(abs_path, 'utf-8')

const jsonObject = JSON.parse(data);

console.log(jsonObject.jet)


// import testJson from abs_path;
// console.log(testJson.jet);