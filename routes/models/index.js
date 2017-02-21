const models = require("express").Router();
const all = require('./all.js');
const single = require('./single.js');
const cars = require('./cars/index.js');

models.get('/', all);
models.get('/:modelId', single);
models.use('/:modelId/cars', cars);

module.exports = models;
