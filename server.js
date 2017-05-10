var express = require('express');
var config = require('./config.json');

var app = express();
app.set('PORT', config.webPort);

app.get('/', function(request, response) {
    response.send('Hello!');
})
app.get('/about', function(request, response) {
    response.send('Written by Teun Roelandt');
})
app.post('/', function(request, response) {
    response.send('POST request received!');
})
app.put('/', function(request, response) {
    response.send('PUT request received!');
})

var port = process.env.PORT || app.get('PORT');

app.listen(port, function() {
    console.log('Server app is listening on port ' + port);
})