const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res){
    console.log(starting server on port 3000);
    res.send(<H1>Hello World!</H1>)

})