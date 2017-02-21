//this tells to send params on down to us from routes heading this way
const cars = require('express').Router({ mergeParams: true });
const all = require('./all');

cars.get('/', all);

module.exports = cars;
