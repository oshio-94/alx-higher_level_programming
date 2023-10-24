#!/usr/bin/node
const request = require('request');

request(process.argv[2], (error, response, body) {
  if (err) throw error;
  else {
    const resp = {};
    const json = JSON.parse(body);
    for (let i = 0; i < json.length; i++) {
      if (json.completed === true) {
        if (resp[json.userId] === undefined) {
          resp[json.userId] = 0;
        }
        resp[json.userId]++;
      }
    }
    console.log(resp);
  }
});

