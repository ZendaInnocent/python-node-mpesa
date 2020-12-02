const {spawn} = require('child_process');
const python = spawn('python', ['sample.py']);

python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    console.log(data.toString());
});

python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
})
