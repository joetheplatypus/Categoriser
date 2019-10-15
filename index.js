var express = require("express");
var app = express();

app.use(express.static('src'))
app.listen(2000)
console.log('Started on port 2000')