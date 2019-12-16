const fs = require('fs')
fs.readFile('./x.txt', 'utf8', (err, str) => {
    console.log(err, str)
})