// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-words', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  const nounT = readString('noun');
  const verbT = readString('verb');
  const adjectiveT = readString('adjective');

  // --- create a funny sentence ---
  const message = `On ${adjectiveT} days the ${nounT} will always ${verbT} .`;
  // --- display the sentence ---
  displayString('funny-sentence', message);
});
