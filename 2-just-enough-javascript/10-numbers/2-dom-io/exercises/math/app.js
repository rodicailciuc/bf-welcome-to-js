// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('numbers', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  const leftnumber = readNumber('left-num');
  const rightnumber = readNumber('right-num');

  // --- do the math ---
  const addition = `${leftnumber} + ${rightnumber} === ${
    leftnumber + rightnumber
  }`;
  const subtraction = `${leftnumber} - ${rightnumber} === ${
    leftnumber - rightnumber
  }`;
  const multiplication = `${leftnumber} * ${rightnumber} === ${
    leftnumber * rightnumber
  }`;
  const division = `${leftnumber} / ${rightnumber} === ${
    leftnumber / rightnumber
  }`;
  const reminder = `${leftnumber} % ${rightnumber} === ${
    leftnumber % rightnumber
  }`;

  // --- create a message
  const message = `${addition}\n${subtraction}\n${multiplication}\n${division}\n${reminder}`;

  // --- display the message ---
  displayString('sum', message);
});
