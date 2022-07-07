const express = require("express");
const app = express();
const http = require("http");

const port = process.env.PORT || 4000

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/student/studentsList", function(req, res) {
    var StudentList = {
        "result": ["Rajesh", "Ramesh", "Sayali", "Sanjana"]
    };
    res.send(StudentList);
    console.log(StudentList);
});


app.get('*', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, function() {
    console.log("Server Started at port " + port);
});