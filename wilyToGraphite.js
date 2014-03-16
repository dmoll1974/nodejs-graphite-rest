var request = require('request');
var et = require('elementtree');
var utf8 = require('utf8');
var parseString = require('xml2js').parseString;

request('http://localhost:8888', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    parseWilyResponse (body);
  }
})



function multiple_replace(str,rdict){
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return str.replace(re, function(matched){
        return mapObj[matched.toLowerCase()];
    });
}

function parseWilyResponse (body){

	root = et.parse(body)
	console.log(root.findall('multiRef').get)
	
}