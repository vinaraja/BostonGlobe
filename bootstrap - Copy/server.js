var connect = require('connect');
var fs=require('fs');
var sys=require('sys');
//var express=require ('express');
var http=require ('http');
var url = require("url");
var path = require("path");
console.log("outside");
var app = connect()
	.use(connect.bodyParser())
	.use(connect.static('public'))
	.use(function (request, response) {
		console.log("hello 1");
		var parsed_url = url.parse(request.url);
		var uri = parsed_url.pathname;
		if(uri === "/test"){
				var request = http.request("http://rss.cnn.com/rss/cnn_latest.rss", function (res) {
				var data = '';
				res.on('data', function (chunk) {
				   data += chunk;
					//var title=chunk.rss.title;
					//console.log(title);
				});
				res.on('end', function () {
					response.writeHead(200, {"Content-Type": "text/plain"});
       				 response.end(data);
					//console.log(data);
					/**var outputFilename = '\my.xml';
			
						fs.writeFile(outputFilename, data, function(err) {
							if(err) {
							  console.log(err);
							} else {
							  console.log("JSON saved to " + outputFilename);
							}
						})**/
			
				});
			});
			request.on('error', function (e) {
				console.log(e.message);
			});
			request.end();
		}
		
		if(uri === "/technology"){
				var request = http.request("http://rss.cnn.com/rss/cnn_tech.rss", function (res) {
				var data = '';
				res.on('data', function (chunk) {
				   data += chunk;
					//var title=chunk.rss.title;
					//console.log(title);
				});
				res.on('end', function () {
					response.writeHead(200, {"Content-Type": "text/plain"});
       				 response.end(data);
					//console.log(data);
					/**var outputFilename = '\my.xml';
			
						fs.writeFile(outputFilename, data, function(err) {
							if(err) {
							  console.log(err);
							} else {
							  console.log("JSON saved to " + outputFilename);
							}
						})**/
			
				});
			});
			request.on('error', function (e) {
				console.log(e.message);
			});
			request.end();
		}
		
			if(uri === "/student"){
				var request = http.request("http://rss.cnn.com/rss/cnn_us.rss", function (res) {
				var data = '';
				res.on('data', function (chunk) {
				   data += chunk;
					//var title=chunk.rss.title;
					//console.log(title);
				});
				res.on('end', function () {
					response.writeHead(200, {"Content-Type": "text/plain"});
       				 response.end(data);
					//console.log(data);
					/**var outputFilename = '\my.xml';
			
						fs.writeFile(outputFilename, data, function(err) {
							if(err) {
							  console.log(err);
							} else {
							  console.log("JSON saved to " + outputFilename);
							}
						})**/
			
				});
			});
			request.on('error', function (e) {
				console.log(e.message);
			});
			request.end();
		}
		
			if(uri === "/health"){
				var request = http.request("http://rss.cnn.com/rss/cnn_health.rss", function (res) {
				var data = '';
				res.on('data', function (chunk) {
				   data += chunk;
					//var title=chunk.rss.title;
					//console.log(title);
				});
				res.on('end', function () {
					response.writeHead(200, {"Content-Type": "text/plain"});
       				 response.end(data);
					//console.log(data);
					/**var outputFilename = '\my.xml';
			
						fs.writeFile(outputFilename, data, function(err) {
							if(err) {
							  console.log(err);
							} else {
							  console.log("JSON saved to " + outputFilename);
							}
						})**/
			
				});
			});
			request.on('error', function (e) {
				console.log(e.message);
			});
			request.end();
		}
		
			if(uri === "/entertainment"){
				var request = http.request("http://rss.cnn.com/rss/cnn_showbiz.rss", function (res) {
				var data = '';
				res.on('data', function (chunk) {
				   data += chunk;
					//var title=chunk.rss.title;
					//console.log(title);
				});
				res.on('end', function () {
					response.writeHead(200, {"Content-Type": "text/plain"});
       				 response.end(data);
					//console.log(data);
					/**var outputFilename = '\my.xml';
			
						fs.writeFile(outputFilename, data, function(err) {
							if(err) {
							  console.log(err);
							} else {
							  console.log("JSON saved to " + outputFilename);
							}
						})**/
			
				});
			});
			request.on('error', function (e) {
				console.log(e.message);
			});
			request.end();
		}
		
		/**if(uri === "/travel"){
				var request = http.request("http://rss.cnn.com/rss/cnn_travel.rss", function (res) {
				var data = '';
				res.on('data', function (chunk) {
				   data += chunk;
					//var title=chunk.rss.title;
					//console.log(title);
				});
				res.on('end', function () {
					response.writeHead(200, {"Content-Type": "text/plain"});
       				 response.end(data);
					//console.log(data);
					var outputFilename = '\my.xml';
			
						fs.writeFile(outputFilename, data, function(err) {
							if(err) {
							  console.log(err);
							} else {
							  console.log("JSON saved to " + outputFilename);
							}
						})
			
				});
			});
			request.on('error', function (e) {
				console.log(e.message);
			});
			request.end();
		}**/
		
		if(uri === "/travel"){
				var request = http.request("http://www.bostonglobe.com/rss/bigpicture", function (res) {
				var data = '';
				res.on('data', function (chunk) {
				   data += chunk;
					//var title=chunk.rss.title;
					//console.log(title);
				});
				res.on('end', function () {
					response.writeHead(200, {"Content-Type": "text/plain"});
       				 response.end(data);
					//console.log(data);
					/**var outputFilename = '\my1.xml';
			
						fs.writeFile(outputFilename, data, function(err) {
							if(err) {
							  console.log(err);
							} else {
							  console.log("JSON saved to " + outputFilename);
							}
						})**/
			
				});
			});
			request.on('error', function (e) {
				console.log(e.message);
			});
			request.end();
		}
	})
	.listen("3600");
