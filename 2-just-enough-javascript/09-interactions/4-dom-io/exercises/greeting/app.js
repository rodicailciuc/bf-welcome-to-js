// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nametag', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  const firstname = readString('first');
  const lastname = readString('last');

  // --- create a greeting ---

  const message = `Hello ${firstname} ${lastname}.`;

  // --- display the greeting ---
  displayString('greeting', message);
});
