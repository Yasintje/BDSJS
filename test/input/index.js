const spawn = require('child_process').spawn;
const child = spawn('node', ['./test/input/HelloWorld.js'], {
    stdio: ['pipe', process.stdout, process.stderr]
});

process.stdin.pipe(child.stdin);

var write = (cmd) => {
    child.stdin.write('BDSJS\n');
}

write("test")