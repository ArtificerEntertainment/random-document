"use strict";

const docRand = require('./doc-rand.js');
const nco = require('nco');
const fs = require('fs');

const args = process.argv.slice(2);

const inputFile = nco(args[0], null);
const outputCount = nco(args[1], 0);
const outputFile = nco(args[2], null)

if(inputFile === null) {
  throw "Input file path not specified.";
}
if(outputFile === null) {
  throw "Input file path not specified.";
}

const doc = docRand.fromFile(inputFile, outputCount);

fs.writeFile(outputFile, JSON.stringify(doc, null, 2), function(err) {
  if(err) {
    return console.log(err);
  }
  console.log(`Created ${outputCount} random json documents in ${outputFile}`)
});
