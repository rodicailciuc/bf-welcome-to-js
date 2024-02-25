'use strict';

// #todo

// prettier-ignore
// so prettier does not remove the extra spacing

let name = prompt('what is your name?');

let greeting = '';

if (name !== null) {
  greeting = 'hello ' + name + '!';
} else {
  greeting = 'no name?!';
}

alert(greeting);
