// #todo

'use strict';

console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

// exercises
console.log('HackYourFuture'.includes('Hack')); // true
console.log('HackYourFuture'.includes('Your')); // true
console.log('HackYourFuture'.includes('Future')); // true

console.log('HackYourFuture'.includes('rouy')); // false
console.log('HackYourFuture'.includes('retu')); // false
console.log('HackYourFuture'.includes('hak')); // false

console.log('Good Bye'.includes(' Bye')); // true
console.log('. Car'.includes('. Car')); // true
console.log('2+2'.includes('+')); // true

console.log('hello'.includes('hi')); // false
console.log('map'.includes('road')); // false
console.log('ami'.includes('Ima')); // false
