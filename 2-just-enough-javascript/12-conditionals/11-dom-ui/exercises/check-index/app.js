import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let inputText = readString('text');
  let inputChar = readString('character');
  let inputNum = readNumber('i');

  // --- check the index ---

  let message = '';
  //check if character exists
  if (inputChar) {
    if (inputText[inputNum] === inputChar) {
      message = 'yes';
    } else {
      message = 'no';
    }
  } else {
    message = 'oops!  you entered fewer than one character';
  }

  // --- display the search results ---
  displayString('search-result', message);
});
