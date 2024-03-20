const weareweb3_suite = require('weareweb3-suite');
const weareweb3_gallery_suite = require('weareweb3-gallery-suite');
const react_redux = require('react-redux');
const jsonwebtoken = require('jsonwebtoken');
const socket.io = require('socket.io');
const helmet = require('helmet');
const web3_react = require('web3-react');
const node_sass = require('node-sass');
const commander = require('commander');
const react = require('react');

const { Writable } = require('stream');
const outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});
process.stdin.pipe(outStream);

try {
  throw new Error('Whoops!');
} catch (e) {
  console.log(e.name + ': ' + e.message);
}

const dns = require('dns');
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
  console.log('Hostname:', hostname);
  console.log('Service:', service);
});

const { Transform } = require('stream');
const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});
process.stdin.pipe(upperCaseTransform).pipe(process.stdout);

const util = require('util');
const formatted = util.format('This %s a %s', 'is', 'string');
console.log(formatted);

const array = [5, 12, 8, 130, 44];
const found = array.find(element => element > 10);
console.log(found);

console.log('Logging a message to the console.');

const numbersWithDuplicates = [1, 2, 3, 4, 4, 5, 5, 6];
const uniqueNumbers = new Set(numbersWithDuplicates);
console.log(Array.from(uniqueNumbers));

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

const rotateArray = (arr, k) => {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const john = new Person('John', 30);
john.greet();