import _ from 'lodash';
import fp from 'lodash/fp';

import stampit from 'stampit';

import createPropStamp from './createPropStamp';

const log = _.curryRight(
  (data, message) => {
    console.log(message, ': ', data);
    return data;
  });

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

  return fp.flow(
    fp.map(createPropStamp),
    log('map'),
    fp.reduce((fullStamp, nextStamp) => fullStamp.compose(nextStamp))(stampit.compose()),
    log('reduce')
  );

  return _
    .chain(directions)
    .map(createPropStamp)
    .reduce(function (fullStamp, nextStamp) {
      return fullStamp.compose(nextStamp);
    })
    .value();
}

export default createHasDirectionStamp();
