var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
//handle["/"] = requestHandlers.start;
handle["/getRequirementsResults"] = requestHandlers.getRequirementsResults;
handle["/wilyToGraphite"] = requestHandlers.wilyToGraphite;
handle["/getGraphiteEvents"] = requestHandlers.getGraphiteEvents;

server.start(router.route, handle);