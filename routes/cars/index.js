const cars = require("express").Router({ mergeParams: true });
const all = require("./all");
const single = require("./single");
const data = require("../../data.json");

//middleware for validating car id
cars.param("carId", (req, res, next, value) => {
    const car = data.cars.find(c => c.id === (value * 1));
    
    if (car) {
	req['car'] = car;
	next();
    } else {
	res.status(404).send("Error: car id not found.");
    }
});

cars.get('/', all);
cars.get('/:carId', single);

module.exports = cars;
