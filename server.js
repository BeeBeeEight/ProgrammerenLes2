var express = require('express');
var app = express();

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
app.listen(8080, function() {
    console.log('Server app is listening on port 8080');
})