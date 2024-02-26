// #todo

'use strict';

/*
  a user can enter two values and learn if the first includes the second.
    - given the user cancels either prompt, the program is sad
    - given the second input is part of the first, the user is told it is
    - given the cases are different, this search will still succeed
    - given the second input is not part of the first, the user is told so

  test cases:
    the user cancels:
      null, null -> ':('
      null, '' -> ':('
      '', null -> ':('
    both inputs are empty:
      '', '' -> '"" includes ""'
    only the first input is empty
      '', 'hello' -> '"" does not include "hello"'
      '', 'bye' -> '"" does not include "bye"'
    only the second input is empty
      'hello', '' -> '"hello" does include ""'
      'bye', '' -> '"bye" does include ""'
    the first input does include the second
      'car', 'A' -> '"car" does include "A"'
      'car', 'a' -> '"car" does include "a"'
      'Dog', 'do' -> '"Dog" does include "do"'
      'Dog', 'DO' -> '"Dog" does include "DO"'
    the first input does not include the second
      'javascript', 'css' -> '"javascript" does not include "css"'
      'java script', 'as' -> '"java script" does not include "as"'
      'Java Script', 'as' -> '"Java Script" does not include "as"'
*/

console.log('--- begin program ---');

/* --- gather user input --- */

let text = prompt('enter a text');
console.log('text:', text);

let query = prompt('enter a query');
console.log('query:', query);

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

const isSad =
  (text === null && query === null) ||
  (text === null && query === '') ||
  (text === '' && query === null);
const bothEmpty = text === '' && query === '';
const oneIsEmpty = (text === '' && query) || (text && query === '');
const oneIsNull = (text === null && query) || (text && query === null);
let isIncludesQuery;
if (text && query) {
  isIncludesQuery = text.toLowerCase().includes(query.toLowerCase());
}

if (isSad) {
  output = ':(';
} else if (bothEmpty) {
  output = '"" includes ""';
} else if (oneIsEmpty) {
  if (text) {
    output = `"${text}" does include ""`;
  } else {
    output = `"" does include "${query}"`;
  }
} else if (oneIsNull) {
  output = ':(';
} else if (isIncludesQuery) {
  output = `"${text}" does include "${query}"`;
} else {
  output = `"${text}" does not include "${query}"`;
}

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');

/*
  checklist:
    [ ] the code is formatted
    [ ] linting check passes
    [ ] variable names are clear and helpful
    [ ] each line of code is explained in a comment above that line
        - use full sentences and correct JS vocabulary
    [ ] the program runs
    [ ] the program has no errors
    [ ] all of the test cases work
    [ ] you tested strange inputs that could break your program (edge cases)
*/
