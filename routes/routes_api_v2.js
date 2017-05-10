//API version 2
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('*', function(request, response) {
    response.status(200);
    response.json({
        "description": "This is the site of Teun Roelandt."
    });
});

module.exports = router;