/**
 * This clearly can result in race condition. Though it doesn't. Output is multiple of 1 Billion always.
 * There is not enough documentation on this. So not going in deep here.
 */
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

let i = 0;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    counter();
    res.writeHead(200);
    res.end('counter ->  '+i);
  }).listen(8000);

  console.log(`Worker ${process.pid} started`);
}

function counter(){
    var j = 0;
    for(j=0; j< 1000000000; j++){
        i++;
    }
}