const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const spawn = require("child_process").spawn;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var checkEquality = function (f1, f2, callback) {
    let pythonProcess = spawn('python3', ["pyscripts/checkEquality.py", f1, f2]);
    pythonProcess.stdout.on('data', callback);
}

app.use(express.static('public'))
app.use('/dist', express.static('dist'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))