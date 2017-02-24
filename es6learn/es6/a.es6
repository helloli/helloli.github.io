// lib.js
let counter = 3;
function incCounter() {
  counter ++;
}
export default {
  counter,
  incCounter
};

// index.js
import a from './lib';
console.log(a.counter); // 3
a.incCounter();
console.log(a.counter); // 3

/* ------------------------------------ */

// lib.js
let counter = 3;
function incCounter() {
  counter ++;
}
export {
  counter,
  incCounter
};

// index.js
import {counter, incCounter} from './lib';
console.log(counter);   // 3
incCounter();
console.log(counter);   // 4 why