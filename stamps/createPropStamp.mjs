import fp from 'lodash/fp';

import stampit from 'stampit';

const createPropStamp = fp.flow(
  function (propName) {
    const propUpper = propName[0].toUpperCase() + propName.slice(1);
    return {
      prop: propName,
      set: `set${propUpper}`,
      get: `get${propUpper}`,
    };
  },
  function (propNames) {
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
  },
  function (descriptor) {
    return stampit.compose(descriptor);
  }
);

export default createPropStamp;
