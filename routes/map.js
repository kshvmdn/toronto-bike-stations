var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function(req, res, next) {
  request('http://www.bikesharetoronto.com/stations/json', function(error, response, body) {
    if (!error & response.statusCode == 200) {
      data = JSON.parse(body);
    }
    console.log(data);
    res.render('map', {title: 'Map', bike_data: data});
  })
});

module.exports = router;
