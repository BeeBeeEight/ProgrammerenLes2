//Sample recipes database
//Source: https://en.wikibooks.org/wiki/Cookbook

//var express = require('express');
//var router = express.Router();
//var path = require('path');

var recipes = [
    {
        name: 'Lasagne',
        category: 'Pasta',
        procedure: 'Steps for making lasagne'
    },
    {
        name: 'Calzone',
        category: 'Pizza',
        procedure: 'Steps to make calzone (pizza)'
    },
    {
        name: 'Tuna Salad',
        category: 'salad',
        procedure: [
            'Mix ingredients in a bowl',
            'Chill before serving'
        ]
    },
    {
        name: 'Yeast Bread',
        category: 'Bread',
        procedure: [
            'Shape the dough',
            'Bake it'
        ]
    },
    {
        name: 'Ceasar salad',
        category: 'salad',
        procedure: 'something'
    }
];

module.exports = recipes;
//module.exports = router;
