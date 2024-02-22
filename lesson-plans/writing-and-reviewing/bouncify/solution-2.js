'use strict';

/* Bouncify

  A user can enter some text to bouncify it.
    - given a non-empty string
      every other letter is converted to UPPER CASE
      every other letter is converted to lower case
      all other characters are ignored without changing the pattern

  test cases:
    has only letters:
      'a'           -> 'A'
      'Hello'       -> 'HeLlO'
      'HELLO'       -> 'HeLlO'
      'cheese'      -> 'ChEeSe'
    has spaces and letters:
      'good bye'      -> 'GoOd ByE'
      ' row a boat '  -> ' RoW a BoAt '
    has everything:
      '12 Good Byes!'     -> '12 GoOd ByEs!'
      'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
      '0 . x . 0'         -> '0 . X . 0'

*/
let text = '';

while (true) {
  const input = prompt('enter some text, the letters will be bouncified');

  if (input === null) {
    alert('there is no escape!');
  }

  if (input === '') {
    alert('no empty input, try again.');
  }

  if (input) {
    text = input;
    break;
  }
}

let upperCaseNext = true;
let newText = '';

for (let i = 0; i < text.length; i++) {
  const char = text.charAt(i);
  if (/[a-zA-Z]/.test(char)) {
    if (upperCaseNext) {
      newText += char.toUpperCase();
    } else {
      newText += char.toLocaleLowerCase();
    }
    upperCaseNext = !upperCaseNext;
  } else {
    newText += char;
  }
}
alert(newText);
