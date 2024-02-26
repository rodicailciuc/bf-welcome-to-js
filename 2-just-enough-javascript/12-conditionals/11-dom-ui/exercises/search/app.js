import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  const text = readString('text');
  const query = readString('query');
  const isCaseSenstive = readBoolean('sensitive');

  // --- do the search ---
  let message = '';

  // if case sensitive
  if (isCaseSenstive) {
    if (text.includes(query)) {
      message = 'yes';
    } else {
      message = 'no';
    }
  } else {
    const isIncludes = text.toLowerCase().includes(query.toLowerCase());
    if (isIncludes) {
      message = 'yes';
    } else {
      message = 'no';
    }
  }
  // --- display the search results ---
  displayString('search-result', message);
});
