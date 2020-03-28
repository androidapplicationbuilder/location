var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var geoip = require('geoip-country');
const port = process.env.PORT || 3000;
app.get('/scrape/:id', function(req, res){

var ip = req.params.id;
  
   var geo = geoip.lookup(ip);
    res.send(geo.country);
  
  
  
})

app.listen(port)
  console.log('Server started on port', port);
exports = module.exports = app;


