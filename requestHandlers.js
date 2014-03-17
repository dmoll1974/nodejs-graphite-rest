var exec = require("child_process").exec;
var url = require('url');
var request = require('request-json');



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
	var client = request.newClient('http://localhost/');
	var timestamps={};
	var queryData = url.parse(req.url, true).query;

	client.get('events/get_data?tags=' + queryData.tags, function(err, res, body) {

		for(i=0;i<body.length;i++){
			if(body[i].what == 'Start-loadtest')
				timestamps.start = body[i].when
			else{

				if(body[i].what == 'End-loadtest')
				timestamps.end = body[i].when
			}
		}  		

	    timestamps.build = queryData.tags;
	    console.log(timestamps);
		
		getMetrics(timestamps.start, timestamps.end, 'kl12c27x.Tomcat.tif_a_ae1_kl12c27x_server_1.CPU.Processor_3.Utilization_percentage_aggregate	')	 
	    
	});
	

 } 	

 function getMetrics(start, end, target) {

	var client = request.newClient('http://localhost/');

	client.get('/render?target=' + target + '&from=' + start + '&until=' + end + '&format=json', function(err, res, body) {

		console.log(body)

		
	});

 } 	


 		exports.getRequirementsResults = getRequirementsResults;
		exports.wilyToGraphite = wilyToGraphite;
		exports.getGraphiteEvents = getGraphiteEvents;

 //  	request(eventUrl, function (error, response, body) {

	//   var eventsArray = [];
	//   if (!error && response.statusCode == 200) {

	// 	debugger;   	
	//    	var timestamps={};
	//    	console.log('typeof body' + typeof(eval(body)));
	//    	eventsArray = eval(body);

	//    	for(i=0;i<eventsArray.length;i++){


	//    		if (eventsArray[0].what == 'Start-loadtest'){

	//    			timestamps.start = eventObj.when;

	// 	   	}

	// 	   	if (eventObj[what] == 'End-loadtest') {

	// 	   		timestamps.end = eventObj.when;

	// 	   	}

	//    	}

	//    	console.log(timestaps);

	//    	resp.writeHead(200, {"Content-Type": "text/plain"});
	// 	resp.write(body);
	// 	resp.end();

	// }  
	// })


//}
