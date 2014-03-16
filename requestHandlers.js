var exec = require("child_process").exec;
var url = require('url');
var request = require('request');



function getRequirementsResults(response) {
	console.log("Request handler 'getRequirementsResults' was called.");
	
	var content = "empty";
	
	exec("ls -lah", function (error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stdout);
		response.end();
	});
}

function wilyToGraphite(request, response) {
	console.log("Request handler 'wilyToGraphite' was called.");
	var queryData = url.parse(request.url, true).query;
	var command = "/usr/local/bamboo-benchmark-1/load-test/wilyToGraphite.sh " + queryData.nodes + " " + queryData.clones + " " + queryData.metricConf + " " + queryData.dataFrequency + " " + queryData.appBuild + " " + queryData.pipelineBuild;
	
	exec(command, function (error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write(stderr);
		response.end();
	});


}

function getGraphiteEvents(req, resp) {
	console.log("Request handler 'getGraphiteEvents' was called.");
	var queryData = url.parse(req.url, true).query;
	
	getBuildTimestamps(queryData.tags, function(error,body){

		resp.writeHead(200, {"Content-Type": "text/plain"});
		resp.write(body);
		resp.end();

	});
	

	 
	
}


function getBuildTimestamps(buildId) {
	
	var eventUrl = 'http://localhost/events/get_data?tags=' + buildId;
	
  	request(eventUrl, function (error, response, body) {
	  
	  var eventsArray = [];
	  if (!error && response.statusCode == 200) {
		console.log(body);
		debugger;
	   	return body;
	    
	  }
	
	});


}


exports.getRequirementsResults = getRequirementsResults;
exports.wilyToGraphite = wilyToGraphite;
exports.getGraphiteEvents = getGraphiteEvents;