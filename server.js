const express = require('express');
const app = express();

app.use('/public',express.static('public'));

app.get('/', function(request, response) {
  response.redirect('/index')
});

app.get('/index', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
  