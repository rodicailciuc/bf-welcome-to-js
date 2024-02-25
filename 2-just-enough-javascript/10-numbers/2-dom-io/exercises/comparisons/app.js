// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nums', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  const leftnumber = readNumber('left-num');
  const rightnumber = readNumber('right-num');

  // --- compare the numbers ---
  const greaterthan = `${leftnumber} > ${rightnumber} ----> ${
    leftnumber > rightnumber
  }`;
  const greaterthanorequal = `${leftnumber} >= ${rightnumber} ---> ${
    leftnumber >= rightnumber
  }`;
  const onlyequal = `${leftnumber} === ${rightnumber} --> ${
    leftnumber === rightnumber
  }`;
  const lessthanorequal = `${leftnumber} <= ${rightnumber} ---> ${
    leftnumber <= rightnumber
  }`;
  const lessthan = `${leftnumber} < ${rightnumber} ----> ${
    leftnumber < rightnumber
  }`;

  // --- create a message
  const message = `${greaterthan}\n${greaterthanorequal}\n${onlyequal}\n${lessthanorequal}\n${lessthan}`;

  // --- display the message ---
  displayString('compared', message);
});
