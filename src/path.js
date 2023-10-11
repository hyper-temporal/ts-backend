const path = require('path')

data_folder = '/data/'
products_folder  = '/products'
products_file = 'products.json'

const full_path = path.join(data_folder, products_folder, products_file)

const abs_path = path.resolve(__dirname, 'data', 'products', 'products.json')


console.log(abs_path)


// import testJson from abs_path;
// console.log(testJson.jet);