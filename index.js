var express = require("express");
var app = express();

app.use(express.static('src'))
app.listen(process.env.PORT || 2000)
console.log('Started')