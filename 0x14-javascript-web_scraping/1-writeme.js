#!/usr/bin/node

const fs = require('fs')
let finput = process.argv[3]
fs.writeFile(process.argv[2], finput, (err) => {
	if (err) throw err;
})
