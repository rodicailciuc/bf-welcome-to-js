import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('calculator', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read user values ---
  const num1 = readNumber('left');
  const num2 = readNumber('right');
  // --- multiply the numbers ---
  const result = num1 * num2;
  // --- create a message ---
  const message = `${num1} * ${num2} === ${result}`;

  // --- display the message ---
  displayString('product', message);
});
