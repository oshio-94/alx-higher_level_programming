#!/usr/bin/node
const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/'
request(`${url}process.argv[2]`, (error, response, body) => {
  if (error) throw error;
  const js_res = response;
  const res = JSON.parse(js_res);
  console.log(res.title);
});
 
