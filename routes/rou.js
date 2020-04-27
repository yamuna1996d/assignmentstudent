var express = require('express');
var { studmodel } = require('../models/student');
var { cousemodel } = require('../models/addcourse');
const routers = express.Router();
routers.get('/', (req, res) => {
    res.send('Hai');
});
routers.post('/studreg', async (req, res) => {
    try {
        var data = new studmodel(req.body);
        var result = await data.save();
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

routers.post('/coursepdt', async (req, res) => {
    try {
        var data = new cousemodel(req.body);
        var result = await data.save();
        res.json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

module.exports = routers