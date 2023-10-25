#!/usr/bin/node
const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/';
const id = parseInt(process.argv[2], 10);
let characters = [];

request(url, (error, response, body) => {
  if (error) throw error;
  else {
    const resp = JSON.parse(body);
    const results = resp.results;
    if (results[id - 1]) {
      characters = results[id - 1].characters;
    }
    for (let j = 0; j < characters.length; j++) {
      request(characters[j], (error, response, body) => {
        if (error) throw error;
        console.log(JSON.parse(body).name);
      });
    }
  }
});
