import _ from 'lodash';
import stampit from 'stampit';

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
    .map(function (direction) {
      const propUpper = direction[0].toUpperCase() + direction.slice(1);
      return { 
        prop: direction,
        set: `set${propUpper}`,
        get: `get${propUpper}`,
      };
    })
    .map(function (propNames) {
      const props = {};
      props[propNames.prop] = null;

      const methods = {};
      methods[propNames.set] = function (itemAt) {
        this[propNames.prop] = itemAt;
        return this;
      };
      methods[propNames.get] = function () {
        return this[propNames.prop];
      };

      return { props, methods };
    })
    .map(function (descriptor) {
      return stampit.compose(descriptor);
    })
    .reduce(function (fullStamp, nextStamp) {
      return fullStamp.compose(nextStamp);
    })
    .value();
}

export default createHasDirectionStamp();
