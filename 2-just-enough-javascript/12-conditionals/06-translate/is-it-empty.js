// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

/* ---   ?   --- */

// let message = 'your input is';

/* ---   ?   --- */
//   message <- message + 'null'
// ELSE:
/* ---   ?   --- */
//   maybeNot <- ''
//   IF: input.length !== 0
/* ---   ?   --- */
//     maybeNot <- 'not '
//   :END IF
//   message <- message + maybeNot + 'empty'
// :END IF

/* ---   ?   --- */

// alert(message)

const input = prompt('do whatever you want');

let message = '';

if (input === null) {
  message = 'you click cancel';
} else {
  let maybenot = confirm('is this what you want to write\n ' + input);
  if (maybenot === false) {
    message = 'try again';
  } else {
    message = 'Great! thank you';
  }
}

alert(message);
