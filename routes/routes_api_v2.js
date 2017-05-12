//API version 2
var express = require('express');
var router = express.Router();
var path = require('path');

var recipes = require('../recipes');


router.get('/recipes', function(request, response) {
    var cat = request.query.category || '';
    if (cat === '') {
        response.json(recipes);
    } else {
        var rec = recipes.filter(function(recipe) {
            return (recipe.category == cat);
        })
        response.json(rec);
    }
})

router.get('/recipes', function (request, response) {
    response.status(200);
    response.json(recipes);
});

router.get('/recipes/:id', function (request, response) {
    var id = request.params.id || '';
    response.json(recipes[id]);
});



router.get('*', function(request, response) {
    response.status(200);
    response.json({
        "description": "This is the site of Teun Roelandt."
    });
});





module.exports = router;