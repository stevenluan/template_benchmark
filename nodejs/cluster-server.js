var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs-1; i++) {
    cluster.fork();
  }
  console.log(numCPUs);
  cluster.on('exit', function(worker, code, signal) {
    console.log('Worker pid ' + worker.process.pid + ' died unexpectedly. Starting a new worker..');
    cluster.fork();
  });
} else {
  require('./app.js');
}