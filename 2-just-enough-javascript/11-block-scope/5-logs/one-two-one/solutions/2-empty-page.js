'use strict';

let name = 'alice';

{
  let name = 'alice';
  console.log(name);
}

console.log(name);
