//jshint esversion:6

const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res){
    
    res.send("<H1>Hello World!</H1>");
});

app.listen(3000, function(){
    console.log("server is running on port 3000.");
});