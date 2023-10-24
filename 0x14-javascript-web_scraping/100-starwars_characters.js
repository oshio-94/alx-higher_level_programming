#!/usr/bin/node
const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films/';
request(url + process.argv[2], (error, response, body) => {
  if (error) throw error;
  else {
    const resp = JSON.parse(body);
    const characters = resp.characters;
    for (let i = 0; i < characters.length; i++) {
      request(characters[i], (error, response, body) => {
        if (error) throw error;
        console.log(JSON.parse(body).name);
      });
    }
  }
});
