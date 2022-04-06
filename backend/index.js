const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { type } = require('express/lib/response');
const app = express();

const apiVersion = 'api/v1';

let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

let success = [
    { message: 'Great Success!!'}
];


app.get('/', (req, res) => {
    res.status(200).json(success);
});

app.listen(port, () => {
    console.log('reynir app listening on port + ' + port);
});