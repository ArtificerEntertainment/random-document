"use strict";

const fs = require('fs');

const rand = function(magnitude) {
  return Math.floor(Math.random() * magnitude);
}

const randElement = function(array) {
  return array[rand(array.length)];
}

const fromFile = function(jsonFilePath, outputCount) {
  return fromObject(JSON.parse(fs.readFileSync(jsonFilePath, 'utf8')), outputCount);
}

const fromObject = function(documentSet, outputCount) {
  const output = [];
  for(let i = 0; i < outputCount; i++) {
    let doc = {};
    for(var property in documentSet) {
      doc[property] = randElement(documentSet[property]);
    }
    output.push(doc);
  }
  return {documentList: output};
}

module.exports = {
  fromFile,
  fromObject
}
