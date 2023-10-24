#!/usr/bin/node

const request = require('request');
let url = process.argv[2];
request(url, (err, response, body) => {
	if (err) throw err;
	console.log("code: " + response.statusCode);
});
