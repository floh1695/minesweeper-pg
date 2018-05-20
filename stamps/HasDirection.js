'use strict';

const stampit = require('stampit');

function createHasDirectionStamp() {
  const directionStamps = [];

  const directions = [
    'north',
    'northEast',
    'east',
    'southEast',
    'south',
    'southWest',
    'west',
    'northWest'
  ];

  directions.forEach(direction => {
    const props = {};
    props[direction] = null;

    const upperDirection = direction[0].toUpperCase() + direction.slice(1);
    const methods = {};
    methods[`set${upperDirection}`] = function (itemAt) {
      this[direction] = itemAt;
      return this;
    };
    methods[`get${upperDirection}`] = function () {
      return this[direction];
    };

    const directionStamp = stampit()
      .props(props)
      .methods(methods);

    directionStamps.push(directionStamp);
  });

  return directionStamps.reduce((fullStamp, nextStamp) => fullStamp.compose(nextStamp));
}

const HasDirection = createHasDirectionStamp();

module.exports = HasDirection;
