var spawn = require('child_process').spawn,
    grep  = spawn('ls', ['/tmp']);
process.env.password='cango';
console.log('Spawned child pid: ' + grep.pid);
console.log('Spawned child pid: ' + grep);
grep.stdin.end();