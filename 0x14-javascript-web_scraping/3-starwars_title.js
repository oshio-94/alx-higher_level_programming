#!/usr/bin/node
const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/'
request(`${url}process.argv[2]`, (error, response, body) => {
  if (error) throw error;
  const res = JSON.parse('response');
  console.log(res.title);
});
 
