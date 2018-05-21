import _ from 'lodash';

import createPropStamp from './createPropStamp';

function createHasDirectionStamp() {
  const directions = [
    'north',
    'northEast',
    'east',
    'southEast',
    'south',
    'southWest',
    'west',
    'northWest',
  ];

  return _
    .chain(directions)
    .map(createPropStamp)
    .reduce(function (fullStamp, nextStamp) {
      return fullStamp.compose(nextStamp);
    })
    .value();
}

export default createHasDirectionStamp();
