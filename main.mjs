import HasDirection from './stamps/HasDirection.mjs';

import createPropStamp from './stamps/createPropStamp';

const direction = HasDirection()
  .setNorth('Ocala')
  .setWest('The ocean');
console.log(direction);

const HasApple = createPropStamp('apple');
console.log(HasApple().setApple(123));
