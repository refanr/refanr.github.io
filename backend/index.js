//Sample for Assignment 3
const express = require('express');

//Import a body parser module to be able to access the request body as json
const bodyParser = require('body-parser');

//Use cors to avoid issues with testing on localhost
const cors = require('cors');
const { type } = require('express/lib/response');

const app = express();

const apiVersion = '/api/v1';

//Port environment variable already set up to run on Heroku
let port = process.env.PORT || 3000;

//Tell express to use the body parser module
app.use(bodyParser.json());

//Tell express to use cors -- enables CORS for this backend
app.use(cors());  

//Set Cors-related headers to prevent blocking of local requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

let success = [
    { message: 'Great Success!!'}
];


app.get(apiVersion + '/', (req,res) => {
    res.status(200).send('Great Success!!');
});

app.listen(port, () => {
    console.log('reynir app listening on port + ' + port);
});