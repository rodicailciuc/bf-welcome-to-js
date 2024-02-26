import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('to-sort', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const firstString = readString('string-a');
  const secondString = readString('string-b');

  // --- sort them input by length ---
  let sortedStrings = '';
  if (firstString.length > secondString.length) {
    sortedStrings = secondString + ', ' + firstString;
  } else {
    sortedStrings = firstString + ', ' + secondString;
  }

  // --- display the sorted strings ---
  displayString('sorted', sortedStrings);
});
