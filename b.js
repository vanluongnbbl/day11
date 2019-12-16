const request = require('request')

function getIP(cb) {
    request('http://ip.jsontest.com/', (err, res, body) => {
        cb(body) // console.log(body)
    })
}

getIP(ip => console.log(ip))