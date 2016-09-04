var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello Jenkins Users555555555522');
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
