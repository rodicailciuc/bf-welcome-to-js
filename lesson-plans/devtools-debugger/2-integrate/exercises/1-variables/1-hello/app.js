// these are the only functions you will need

debugger;

import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-info', () => {
  debugger;

  console.log('\n--- form data changed ---');

  // --- read user input ---

  let theFirstname = readString('the-first-name');
  let theLastname = readString('the-last-name');
  console.log(theFirstname, theLastname);

  // --- create a message ---

  let greeting = `Hello ${theFirstname} ${theLastname}! `;
  let greetings = `Good bye ${theFirstname} ${theLastname}! `;
  // --- display the message ---

  displayString('greeting-output', greeting + '\n' + greetings);
  //displayString('greeting-output', greetings);
});

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/
