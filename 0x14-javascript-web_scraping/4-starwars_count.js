#!/usr/bin/node
const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/';
request(url + '/', (error, response, body) => {
  if (error) throw error;
  else {
    const res = JSON.parse(body);
    const lst = [];
    if (res.characters = 'https://swapi-api.alx-tools.com/api/people/18/') {
	    lst.append(res.title);
    }
    console.log(lst.length);
  }
});
