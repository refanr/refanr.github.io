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
let bio = {
    "bio": "I'm Reynir, married with two young daughters. I enjoy walking our dog, lifting weights and playing music. I suffered an injury a few years back and had to reevaluate my career, so I went back to school and am currently two thirds of the way through my BSc degree in software engineering. My current academic interests are in web programming, and I will be taking courses on web services and another on networks in the fall. Another area of academic interest is computer games and I will be taking courses on computer graphics and game making in the fall as well."
}
let edu = {
    "schools" : [
        {
            "school": "Bifröst University",
            "degree": "University Gateway",
            "years": "2019-2020"
        },
        {
            "school": "Reykjavik University",
            "degree": "BSc Software Engineering",
            "years": "2020-2023"
        }
    ],
    "courses": [
        {"name": "Discrete mathematics for engineering", "tech": []},
        {"name": "Programming", "tech": ["Python"]},
        {"name": "Interaction design and user experience", "tech": ["Agile"]},
        {"name": "Calculus I", "tech": []},
        {"name": "Data structures", "tech": ["Python"]},
        {"name": "Linear algebra throuch computer science applications", "tech": ["Python"]},
        {"name": "System requirements and design", "tech": ["Python", "Agile"]},
        {"name": "The information and technology society", "tech": []},
        {"name": "Computer architecture", "tech": ["C", "UNIX"]},
        {"name": "Algorithms", "tech": ["Java"]},
        {"name": "Software design and implementation", "tech": ["Java", "Python"]},
        {"name": "Statistics I", "tech": ["R"]},
        {"name": "Databases", "tech": ["SQL", "PostgreSQL"]},
        {"name": "Entrepreneurship and starting new ventures", "tech": ["Design Sprint"]},
        {"name": "Web-programming I", "tech": ["HTML", "CSS", "Javascript", "NodeJS"]},
        {"name": "Operating systems", "tech": ["C"]},
        {"name": "Semester project 1", "tech": ["Python"]},
        {"name": "Software processes and project management", "tech": ["Agile", "Scrum"]},
    ]
};
let exp = {
    "jobs": [
        {"company": "Reykjavik University", "title": ["summer employee"] , "years": "2021", "description": "Data cleaning for Reykjavik University Language and Voice Lab"},
        {"company": "Icelandair", "title": ["loader", "team lead", "ramp manager/service delivery manager"] , "years": "2014-2019", "description": "Great experience working in aviation, a greatly regulated field, high compliance to standards and rules, personell management and shift organization were big parts of my duties there."},
        {"company": "HB Grandi", "title": ["team lead"] , "years": "2013-2014", "description": ""},
        {"company": "Össur", "title": ["silicone technician"] , "years": "2011-2013", "description": ""}
    ]
}




app.get(apiVersion + "/bio", (req, res) => {
    res.status(200).json(bio);
});

app.get(apiVersion + "/education", (req, res) => {
    res.status(200).json(edu);
});

app.get(apiVersion + "/experience", (req, res) => {
    res.status(200).json(exp);
});

app.listen(port, () => {
    console.log('reynir app listening on port + ' + port);
});