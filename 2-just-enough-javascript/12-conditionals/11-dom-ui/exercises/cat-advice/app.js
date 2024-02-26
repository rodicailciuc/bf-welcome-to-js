import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let likeCat = readBoolean('likes-cats');
  let isAllergic = readBoolean('is-allergic');
  let ownCat = readBoolean('owns-one');

  // --- generate good advice ---

  let advice = '';
  if (likeCat && isAllergic && ownCat) {
    advice = 'replace your cat with a stuffed animal';
  } else if (likeCat && isAllergic && !ownCat) {
    advice = 'make a friend who has a cat';
  } else if (likeCat && !isAllergic && !ownCat) {
    advice = 'get a cat';
  } else if (!likeCat && isAllergic && ownCat) {
    advice = 'rethink your life choices';
  } else if (!likeCat && isAllergic && !ownCat) {
    advice = 'you are doing great';
  } else if (!likeCat && !isAllergic && ownCat) {
    advice = 'you could be doing worse';
  } else {
    advice = 'you are doing great';
  }
  // --- display the result ---
  displayString('custom-advice', advice);
});
