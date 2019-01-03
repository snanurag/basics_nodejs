/*server.js*/
const http = require('http');
const async = require('async');
const bluebird = require('bluebird');

http.createServer(function(req, res) {
    // bluebird.resolve().then(()=> console.log('then promise'))
    // testAsync().then(()=> console.log('then async')).then(callback)
    // bluebird.resolve().nodeify(callback)
    // testAsync().nodeify(callback)
    bluebird.resolve(testAsync()).nodeify(callback)
  res.end('Hello World');
}).listen(8080);

async function testAsync(){
   await console.log('async func')
}
function callback(){
    console.log('callback function.')
}
