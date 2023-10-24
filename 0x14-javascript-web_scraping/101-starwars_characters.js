#!/usr/bin/node
const request = require('request');
const url = 'http://swapi.co/api/films/';
let id = parseInt(process.argv[2], 10);
let characters = [];

request(url, (error, response, body) => {
  if (error) throw error; 
  else {
    const resp = JSON.parse(body);
    const results = resp.results;
    if (id < 4) {
      id += 3;
    } else {
      id -= 3;
    }
    for (let i = 0; i < results.length; i++) {
      if (results[i].episode_id === id) {
        characters = results[i].characters;
        break;
      }
    }
    for (let j = 0; j < characters.length; j++) {
      request(characters[j], (error, response, body) => {
        if (error) throw error;
        console.log(JSON.parse(body).name);
      });
    }
  }
});

