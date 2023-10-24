#!/usr/bin/node
const request = require('request');
'http://swapi.co/api/films/' + process.argv[2];

request('http://swapi.co/api/films/' + process.argv[2], (error, response, body) => {
  if (error) throw error;
  const resp = JSON.parse(body);
  const characters = resp.characters;
  for (let i = 0; i < characters.length; i++) {
    request(characters[i], (error, response, body) => {
      if (error) throw error;
      console.log(JSON.parse(body).name);
    });
  }
});
