const all = require("../../data");

module.exports = (req, res) => {
    const cars = all.cars;

    res.status(200).json({ cars });
};
