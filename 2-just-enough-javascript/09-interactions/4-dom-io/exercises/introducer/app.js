// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  const firstname1 = readString('fn');
  const lastname1 = readString('ln');

  // --- create a message ---
  const message = `Hello, my name is ${firstname1} ${lastname1}.`;
  // --- display the message ---
  displayString('greet-field', message);
});
