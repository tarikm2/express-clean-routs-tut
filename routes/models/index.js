const models = require("express").Router();
const all = require('./all.js');
const single = require('./single.js');
const cars = require('./cars/index.js');
const data = require("../../data.json");

models.get('/', all);
models.get('/:modelId', single);
models.use('/:modelId/cars', cars);

//this is parameter middleare for the modelId parameter.
//ensures a model exsists. if it does not return a 404
models.param('modelId', (req, res, next, value) => {
    const model = data.models.find(m => m.id === (value * 1));

    if(model) {
	req['modle'] = model;
	next();
    } else {
	res.status(404).send("Error: invalid model");
    }
});

module.exports = models;
