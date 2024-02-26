'use strict';

let language = 'JavaScript';

// find the length of the string
//  then use strict equality to enter the conditional
const strLength = language.length;
let message;
if (strLength === 10) {
  message = 'Perfect you are right';
} else if (strLength > 10) {
  message = 'too long, please try again!';
} else if (strLength < 10) {
  message = 'too short, please try again!';
} else {
  message = "don't give up, keep trying";
}
alert(message);
