var express = require('express');

var app = express();

app.use(express.static('src'))
.get('/', function(req, res) {
  res.send('index.html')
})
.listen(3000, function() {
  console.log('Listening on port 3000')
})
