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



app.all('*', function(request, response, next) {
    console.log(request.method + " " + request.url);
    next();
})
app.use('/api/v1', require('./routes/routes_api_v1'));
app.use('/info', require('./routes/routes_api_v2'));


app.all('*', function(request, response){
    response.status(404);
    response.send('404 - Not Found');
})


var port = process.env.PORT || app.get('PORT');

app.listen(port, function() {
    console.log('Server app is listening on port ' + port);
})

