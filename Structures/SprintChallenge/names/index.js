const fs = require("fs");
const { performance } = require("perf_hooks");
const { BinarySearchTree } = require('../../BinarySearchTree');

const startTime = performance.now();

let data = fs.readFileSync(
  "./Structures/SprintChallenge/names/names_1.txt",
  "utf8"
);
let names1 = data.split("\r\n");

let data2 = fs.readFileSync(
  "./Structures/SprintChallenge/names/names_2.txt",
  "utf8"
);
let names2 = data2.split("\r\n");

const duplicates = [];

const BST = new BinarySearchTree();

for (let i=0; i < names1.length; i++) {
  BST.insert(names1[i]);
}

for (let j=0; j < names2.length; j++) {
  if (BST.contains(names2[j])) {
    duplicates.push(names[j]);
  }
}

const endTime = performance.now();
console.log(`${duplicates.length} duplicates: ${duplicates.join(" ")}`);
console.log(`runtime: ${(endTime - startTime) / 1000} seconds`);
// Can you optimize the runtime??
// ***********************************************************************
